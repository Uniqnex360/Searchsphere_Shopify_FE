import { useState, useEffect, useMemo } from "react";
import { List, LayoutGrid, Eye } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";

import { AutoComplete } from "../components/AutoComplete";
import AppPagination from "../components/AppPagination";
import AppTable from "../components/AppTable";
import { AppSelect } from "../components/AppSelect";

import { fetchProducts, fetchProductAutosugest } from "../api/product";

// ===============================
// FACET SIDEBAR
// ===============================
const FacetSidebar = ({
  facets,
  selected,
  onToggle,
}: {
  facets: any;
  selected: Record<string, string[]>;
  onToggle: (key: string, value: string) => void;
}) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (key: string) => {
    setExpanded((p) => ({ ...p, [key]: !p[key] }));
  };

  const renderFacet = (title: string, key: string, buckets: any[] = []) => {
    if (!buckets?.length) return null;

    const isExpanded = expanded[key];
    const visible = isExpanded ? buckets : buckets.slice(0, 10);

    return (
      <div className="mb-6">
        <h4 className="font-semibold text-sm mb-2 capitalize">{title}</h4>

        <div className="space-y-1">
          {visible.map((b) => {
            const isChecked = selected[key]?.includes(b.key);

            return (
              <label
                key={b.key}
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={isChecked || false}
                  onChange={() => onToggle(key, b.key)}
                />
                <span>
                  {b.key} ({b.doc_count})
                </span>
              </label>
            );
          })}
        </div>

        {buckets.length > 10 && (
          <button
            onClick={() => toggleExpand(key)}
            className="text-xs text-blue-600 mt-2"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-white p-5 border-r overflow-y-auto hidden lg:block">
      <h3 className="font-bold mb-4 text-sm uppercase">Filters</h3>

      {renderFacet("vendors", "vendor", facets?.vendors?.buckets?.buckets)}
      {renderFacet(
        "product type",
        "product_type",
        facets?.product_types?.buckets?.buckets,
      )}
      {renderFacet("tags", "tags", facets?.tags?.buckets?.buckets)}
      {renderFacet(
        "colors",
        "colors",
        facets?.colors?.filter_colors?.values?.buckets?.buckets,
      )}
      {renderFacet(
        "sizes",
        "sizes",
        facets?.sizes?.filter_sizes?.values?.buckets?.buckets,
      )}
    </div>
  );
};

// ===============================
// MAIN COMPONENT
// ===============================
export default function Product() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const [gridView, setGridView] = useState(false);
  const [searchInput, setSearchInput] = useState(params.q || "");

  // ===============================
  // FIXED FILTERS (stable + safe)
  // ===============================
  const filters = useMemo(() => {
    return {
      q: params.q || "",
      vendor: params.vendor ? params.vendor.split(",") : [],
      product_type: params.product_type ? params.product_type.split(",") : [],
      colors: params.colors ? params.colors.split(",") : [],
      sizes: params.sizes ? params.sizes.split(",") : [],
      tags: params.tags ? params.tags.split(",") : [],
      sort_by: params.sort_by ? params.sort_by : "",
    };
  }, [
    params.q,
    params.vendor,
    params.product_type,
    params.colors,
    params.sizes,
    params.tags,
    params.sort_by,
  ]);

  const page = Number(params.page || 1);
  const size = 20;

  // ===============================
  // AUTOSUGGEST
  // ===============================
  const { data: suggestions, refetch: fetchSuggestions } = useQuery({
    queryKey: ["suggestions", searchInput],
    queryFn: () => fetchProductAutosugest(searchInput),
    enabled: false,
  });

  useEffect(() => {
    const t = setTimeout(() => {
      if (searchInput) fetchSuggestions();
    }, 200);

    return () => clearTimeout(t);
  }, [searchInput]);

  // ===============================
  // PRODUCT API (FORCE ALWAYS FETCH ON MOUNT)
  // ===============================
  const { data: productList, isLoading } = useQuery({
    queryKey: [
      "products",
      filters.q,
      filters.vendor.join(","),
      filters.product_type.join(","),
      filters.colors.join(","),
      filters.sizes.join(","),
      filters.tags.join(","),
      filters.sort_by,
      page,
    ],
    queryFn: () =>
      fetchProducts({
        q: filters.q,
        vendor: filters.vendor,
        product_type: filters.product_type,
        colors: filters.colors,
        sizes: filters.sizes,
        tags: filters.tags,
        sort_by: filters.sort_by,
        page,
        size,
      }),
    refetchOnMount: "always",
  });

  const facets = productList?.facets;

  // ===============================
  // URL UPDATE
  // ===============================
  const updateParams = (newParams: Record<string, any>) => {
    console.log("beofre update", params);
    const updated = { ...params, ...newParams };
    console.log("after update", params);
    Object.keys(updated).forEach((k) => {
      if (!updated[k] || updated[k].length === 0) delete updated[k];
    });

    setSearchParams(updated);
  };

  // ===============================
  // SEARCH
  // ===============================
  const triggerSearch = (value: string) => {
    updateParams({ q: value, page: "1" });
  };

  // ===============================
  // FACET TOGGLE
  // ===============================
  const toggleFacet = (key: string, value: string) => {
    const current = (filters as any)[key] || [];

    const updated = current.includes(value)
      ? current.filter((v: string) => v !== value)
      : [...current, value];

    updateParams({
      [key]: updated.join(","),
      page: "1",
    });
  };

  // ===============================
  // CLEAR ALL (FIXED)
  // ===============================
  const hasActiveFilters =
    filters.q ||
    filters.vendor.length ||
    filters.product_type.length ||
    filters.colors.length ||
    filters.sizes.length ||
    filters.tags.length;

  const clearAll = () => {
    setSearchParams({});
    setSearchInput("");
  };

  // ===============================
  // TABLE COLUMNS
  // ===============================
  const columns = [
    {
      key: "image",
      label: "Image",
      render: (_: any, row: any) => (
        <img
          src={row?.images?.[0]?.url}
          className="w-10 h-10 object-cover rounded"
        />
      ),
    },
    {
      key: "title",
      label: "Name",
      render: (_: any, row: any) => <div className="text-sm">{row.title}</div>,
    },
    { key: "vendor", label: "Vendor", sortable: true },
    { key: "product_type", label: "Type", sortable: true },
    {
      key: "price",
      label: "Price",
      render: (_: any, row: any) => `$${row.min_price}`,
    },
    {
      key: "actions",
      label: "Actions",
      render: (_: any, row: any) => (
        <button onClick={() => navigate(`/product/${row.id}`)} className="p-1">
          <Eye size={16} />
        </button>
      ),
    },
  ];

  // ===============================
  // UI
  // ===============================
  return (
    <div className="flex flex-col h-screen w-full bg-gray-50">
      {/* HEADER */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="p-6 flex justify-between">
          <h1 className="text-2xl font-bold">Product</h1>

          <div className="flex gap-5 text-gray-600 justify-center items-center">
            <div>Total: {productList?.pagination?.total || "-"}</div>
            {hasActiveFilters ? (
              <button onClick={clearAll} className="text-red-600 text-sm">
                Clear All
              </button>
            ) : null}
          </div>
        </div>

        <div className="flex items-center gap-4 px-5 pb-4">
          <div className="flex-1">
            <AutoComplete
              // primaryData={suggestions?.products || []}
              primaryData={suggestions?.suggestions || []}
              fallbackData={[]}
              fallbackType={null}
              value={searchInput}
              onChange={setSearchInput}
              onSelect={triggerSearch}
              placeholder="Search products..."
              loading={false}
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setGridView(false)}
              className={`p-2 ${!gridView ? "bg-blue-500 text-white" : ""}`}
            >
              <List />
            </button>
            <button
              onClick={() => setGridView(true)}
              className={`p-2 ${gridView ? "bg-blue-500 text-white" : ""}`}
            >
              <LayoutGrid />
            </button>
          </div>
        </div>
        {/* filters part */}
        <div>
          <AppSelect
            options={[
              "Product Name (A → Z)",
              "Product Name (Z → A)",
              "Price (Low → High)",
              "Price (High → Low)",
              "Vendor (A -> Z)",
              "Vendor (Z -> A)",
              "Product Type (A -> Z)",
              "Product Type (Z -> A)",
            ]}
            value={filters.sort_by || ""}
            onChange={(value) => {
              console.log("value", value);
              updateParams({
                sort_by: value,
                page: "1",
              });
            }}
          />
        </div>
      </div>

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">
        <FacetSidebar
          facets={facets}
          selected={filters as any}
          onToggle={toggleFacet}
        />

        <div className="flex-1 overflow-y-auto p-5">
          {gridView ? (
            <div className="grid grid-cols-4 gap-4">
              {productList?.products?.map((p: any) => (
                <div
                  key={p.id}
                  className="bg-white p-3 rounded shadow cursor-pointer"
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  <img
                    src={p.images?.[0]?.url}
                    className="h-32 w-full object-cover"
                  />
                  <div className="text-sm font-semibold mt-2">{p.title}</div>
                  <div className="text-blue-600">${p.min_price}</div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <AppTable
                columns={columns}
                data={productList?.products || []}
                isLoading={isLoading}
              />

              <div className="flex justify-end mt-4">
                <AppPagination
                  total={productList?.pagination?.total || 0}
                  page={page}
                  size={size}
                  onPageChange={(p) => updateParams({ page: String(p) })}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
