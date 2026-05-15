import { api } from "./appAxios";
//@ts-ignore
import qs from "qs";

export async function fetchProductAutosugest(query: string) {
  const res = await api.get("product/autocomplete/", {
    params: {
      q: query,
    },
    headers: {
      "X-FE-URL": window.location.href,
    },
  });

  return res.data;
}

export async function fetchProducts(params: {
  q?: string;
  page?: number;
  size?: number;

  vendor?: string[];
  product_type?: string[];
  colors?: string[];
  sizes?: string[];
  tags?: string[];
  sort_by?: string;
}) {
  console.log("sort", params.sort_by);
  let sortBy = params.sort_by;
  if (sortBy === "Product Name (A → Z)") {
    sortBy = "title_asc";
  } else if (sortBy === "Product Name (Z → A)") {
    sortBy = "title_desc";
  } else if (sortBy === "Price (Low → High)") {
    sortBy = "price_asc";
  } else if (sortBy === "Price (High → Low)") {
    sortBy = "price_desc";
  } else if (sortBy == "Vendor (A -> Z)") {
    sortBy = "vendor_asc";
  } else if (sortBy == "Vendor (Z -> A)") {
    sortBy = "vendor_desc";
  } else if (sortBy == "Product Type (A -> Z)") {
    sortBy = "product_type_asc";
  } else if (sortBy == "Product Type (Z -> A)") {
    sortBy = "product_type_desc";
  }

  const res = await api.get("products/list/", {
    params: {
      q: params.q || undefined,
      page: params.page || 1,
      size: params.size || 20,

      vendor: params.vendor,
      product_type: params.product_type,
      colors: params.colors,
      sizes: params.sizes,
      tags: params.tags,

      sort_by: sortBy,
    },

    paramsSerializer: (params) =>
      qs.stringify(params, {
        arrayFormat: "repeat",
      }),
  });

  return res.data;
}
