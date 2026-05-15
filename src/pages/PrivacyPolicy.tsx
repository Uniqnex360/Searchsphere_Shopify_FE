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
            Effective Date: May 15, 2026
          </p>

          <p className="mt-6 text-slate-600 leading-relaxed text-lg">
            Welcome to{" "}
            <span className="font-semibold">SearchSphere</span>
            {" "}("SearchSphere", "we", "our", or "us").
            We are committed to protecting your privacy and maintaining the
            security of your information.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            This Privacy Policy explains how SearchSphere collects, uses,
            processes, stores, and protects information when you access our
            platform, website, APIs, products, and related services.
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-14">
          {/* SECTION */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Information We Collect
            </h2>

            <div className="space-y-8">
              {/* Account */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Account Information
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Name</li>
                  <li>Business email address</li>
                  <li>Company name</li>
                  <li>Job title</li>
                  <li>Phone number</li>
                  <li>Billing information</li>
                </ul>
              </div>

              {/* Usage */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Usage & Interaction Data
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Search queries</li>
                  <li>Click behavior</li>
                  <li>Session activity</li>
                  <li>Device/browser information</li>
                  <li>IP address</li>
                  <li>Location (country/region level)</li>
                  <li>Referring URLs</li>
                  <li>Interaction with recommendations</li>
                </ul>
              </div>

              {/* Product */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Product Catalog & Business Data
                </h3>

                <p className="text-slate-600 leading-relaxed mb-4">
                  When using SearchSphere, customers may upload:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Product catalogs</li>
                  <li>SKU data</li>
                  <li>Metadata</li>
                  <li>Attribute information</li>
                  <li>Search indexes</li>
                  <li>Content assets</li>
                  <li>Supplier data</li>
                </ul>

                <p className="mt-4 text-slate-600">
                  Customers retain ownership of all uploaded business data.
                </p>
              </div>

              {/* AI */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  AI Processing Data
                </h3>

                <p className="text-slate-600 leading-relaxed mb-4">
                  SearchSphere may process data using AI/ML models to:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Improve search relevance</li>
                  <li>Generate semantic understanding</li>
                  <li>Classify products</li>
                  <li>Optimize ranking</li>
                  <li>Personalize search results</li>
                  <li>Detect data anomalies</li>
                </ul>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  SearchSphere does not use customer proprietary data to train
                  public or third-party foundation models without explicit
                  customer authorization.
                </p>
              </div>
            </div>
          </section>

          {/* HOW WE USE */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              How We Use Information
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-slate-600 leading-relaxed">
              <li>Deliver platform services</li>
              <li>Authenticate users</li>
              <li>Improve search relevance</li>
              <li>Generate analytics and reports</li>
              <li>Provide customer support</li>
              <li>Detect fraud or misuse</li>
              <li>Maintain platform security</li>
              <li>Improve AI performance</li>
            </ul>
          </section>

          {/* COOKIES */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Cookies & Tracking Technologies
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              We may use:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Essential cookies</li>
              <li>Analytics cookies</li>
              <li>Performance cookies</li>
              <li>Session cookies</li>
            </ul>

            <p className="mt-4 text-slate-600">
              Users may manage cookie preferences through browser settings.
            </p>
          </section>

          {/* DATA SHARING */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Data Sharing
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              We do not sell personal information.
            </p>

            <p className="text-slate-600 leading-relaxed mb-4">
              We may share data with:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Cloud infrastructure providers</li>
              <li>Analytics providers</li>
              <li>Authentication providers</li>
              <li>Payment processors</li>
              <li>Customer-authorized integrations</li>
            </ul>
          </section>

          {/* SECURITY */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Data Security
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              SearchSphere implements industry-standard safeguards including:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Encryption in transit and at rest</li>
              <li>Role-based access control</li>
              <li>Audit logging</li>
              <li>Infrastructure monitoring</li>
              <li>Secure API authentication</li>
            </ul>
          </section>

          {/* RETENTION */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Data Retention
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              We retain data only as long as necessary to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Deliver contracted services</li>
              <li>Meet legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
            </ul>
          </section>

          {/* TRANSFERS */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              International Transfers
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Your information may be processed in multiple jurisdictions where
              our infrastructure providers operate.
            </p>
          </section>

          {/* RIGHTS */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Your Rights
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Depending on applicable law, users may request:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Access to personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Data deletion</li>
              <li>Data portability</li>
              <li>Restriction of processing</li>
            </ul>

            <p className="mt-4 text-slate-600">
              Requests may be submitted to:
              {" "}
              <span className="font-medium">
                privacy@yourdomain.com
              </span>
            </p>
          </section>

          {/* COMPLIANCE */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Compliance
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              SearchSphere is designed to support:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>GDPR</li>
              <li>CCPA</li>
              <li>SOC 2 operational controls</li>
              <li>Enterprise data governance requirements</li>
            </ul>

            <p className="mt-4 text-sm text-slate-500 italic">
              Only include certifications you actually have.
            </p>
          </section>

          {/* CONTACT */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Contact
            </h2>

            <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
              <p className="font-semibold text-slate-900 text-lg">
                SearchSphere Privacy Team
              </p>

              <p className="mt-3 text-slate-600">
                privacy@yourdomain.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
