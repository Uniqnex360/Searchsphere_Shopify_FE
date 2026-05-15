import { useNavigate } from "react-router-dom";

export default function TermsConditions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-sm p-10 md:p-14">
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-slate-600 hover:text-slate-900 transition font-medium"
        >
          ← Back
        </button>

        {/* HEADER */}
        <div className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-5xl font-black tracking-tight text-slate-900">
            Terms & Conditions
          </h1>

          <p className="text-slate-500 mt-4 text-lg">
            Effective Date: 15-05-2026 <br />
            Last Updated: 15-05-2026
          </p>

          <p className="mt-6 text-slate-600 leading-relaxed text-lg">
            Welcome to <span className="font-semibold">SearchSphere</span>, a
            product operated by{" "}
            <span className="font-semibold">UniqNex360</span> ("Company," "we,"
            "our," or "us").
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            By accessing, using, registering for, or subscribing to
            SearchSphere, you agree to these Terms & Conditions ("Terms"). If
            you do not agree, please do not use the platform.
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-14">
          {/* 1 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              1. Platform Services
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              SearchSphere provides AI-powered search and product discovery
              tools for businesses.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Semantic search</li>
              <li>AI ranking optimization</li>
              <li>Personalized recommendations</li>
              <li>Product indexing</li>
              <li>Analytics & APIs</li>
              <li>Data enrichment workflows</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              2. Eligibility
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Must be at least 18 years old</li>
              <li>Authority to act on behalf of an organization</li>
              <li>Accurate registration details required</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              3. Account Registration
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Maintain accurate account information</li>
              <li>Keep credentials confidential</li>
              <li>Report unauthorized access immediately</li>
              <li>Responsible for account activity</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              4. License to Use
            </h2>

            <p className="text-slate-600 mb-4">
              We grant a limited, non-exclusive, revocable license for internal
              business use only.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>No reverse engineering</li>
              <li>No unauthorized API access</li>
              <li>No reselling without permission</li>
              <li>No security bypass attempts</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              5. Customer Data Ownership
            </h2>

            <p className="text-slate-600">
              You retain full ownership of your data including product catalogs,
              SKUs, metadata, and business content.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              6. Data Processing
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Search indexing & relevance optimization</li>
              <li>AI recommendations</li>
              <li>Analytics generation</li>
              <li>System monitoring</li>
            </ul>

            <p className="mt-4 text-slate-600">
              We do not use customer data to train public AI models without
              consent.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              7. Acceptable Use
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>No illegal or harmful content</li>
              <li>No malware or abuse</li>
              <li>No unauthorized system access</li>
              <li>No API abuse</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              8. Subscription & Payments
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Fees must be paid on time</li>
              <li>Non-refundable unless stated</li>
              <li>Late payment may suspend access</li>
              <li>Taxes are customer responsibility</li>
            </ul>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              14. Warranty Disclaimer
            </h2>

            <p className="text-slate-600">
              Services are provided “as is” without warranties of any kind,
              including merchantability or fitness for purpose.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              15. Limitation of Liability
            </h2>

            <p className="text-slate-600">
              We are not liable for indirect damages, data loss, or business
              interruption. Total liability is limited to fees paid in the last
              12 months.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              16. Suspension & Termination
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Violation of terms</li>
              <li>Fraud or abuse</li>
              <li>Security risks</li>
              <li>Non-payment</li>
            </ul>
          </section>

          {/* 19 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              19. Governing Law
            </h2>

            <p className="text-slate-600">
              These Terms are governed by the laws of [Insert State/Country].
              Disputes will be handled under the jurisdiction of [Insert Court].
            </p>
          </section>

          {/* CONTACT */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact</h2>

            <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
              <p className="font-semibold text-slate-900 text-lg">Legal Team</p>

              <p className="mt-3 text-slate-600">
                Email: legal@uniqnex360.com <br />
                Company: UniqNex360
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
