export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-sm p-10 md:p-14">
        {/* HEADER */}
        <div className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-5xl font-black tracking-tight text-slate-900">
            Privacy Policy
          </h1>

          <p className="text-slate-500 mt-4 text-lg">
            Last Updated: May 15, 2026
          </p>

          <p className="mt-6 text-slate-600 leading-relaxed text-lg">
            Welcome to{" "}
            <span className="font-semibold">
              SearchSphere – Smart AI Search & Discovery
            </span>
            . This Privacy Policy explains how we collect, use, and protect
            information when merchants use our Shopify application.
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-12">
          {/* SECTION */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              1. Information We Collect
            </h2>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Store Information
                </h3>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Shopify store name</li>
                  <li>Store URL</li>
                  <li>Store owner email address</li>
                  <li>Shopify shop ID</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Product & Catalog Data
                </h3>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Product titles</li>
                  <li>Descriptions and variants</li>
                  <li>Collections and tags</li>
                  <li>Product images</li>
                  <li>Inventory metadata</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Analytics Data
                </h3>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Search queries</li>
                  <li>Autocomplete interactions</li>
                  <li>Click-through events</li>
                  <li>No-result searches</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              2. How We Use Information
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-slate-600 leading-relaxed">
              <li>Provide intelligent search functionality</li>
              <li>Improve autocomplete and relevance</li>
              <li>Generate analytics and insights</li>
              <li>Optimize search ranking performance</li>
              <li>Improve overall user experience</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              3. Data Security
            </h2>

            <p className="text-slate-600 leading-relaxed">
              We implement reasonable technical and organizational measures to
              protect your data, including encrypted communication, secure cloud
              infrastructure, and restricted internal access.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              4. Data Sharing
            </h2>

            <p className="text-slate-600 leading-relaxed">
              We do not sell merchant or customer data. Limited information may
              be shared with trusted infrastructure and analytics providers
              strictly for operating the application.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              5. Shopify API Usage
            </h2>

            <p className="text-slate-600 leading-relaxed">
              SearchSphere uses Shopify APIs to access store and product data
              required for indexing, search, autocomplete, and analytics
              functionality.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              6. Cookies & Tracking
            </h2>

            <p className="text-slate-600 leading-relaxed">
              We may use cookies and similar technologies to maintain sessions,
              analyze usage patterns, and improve application performance.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              7. Data Retention
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Store-related data is retained only as long as necessary to
              provide services and comply with legal obligations.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              8. Your Rights
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Depending on your region, you may have rights to access, correct,
              delete, or restrict the processing of your information.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              9. Contact Us
            </h2>

            <div className="bg-slate-100 rounded-2xl p-6 text-slate-700">
              <p className="font-semibold text-slate-900">
                SearchSphere Support
              </p>

              <p className="mt-2">support@example.com</p>

              <p className="mt-1">https://example.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
