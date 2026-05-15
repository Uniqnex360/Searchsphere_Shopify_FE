import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

const tabs = [
  {
    title: "Personal Information",
    subtitle: "Fill in your personal details and contact information.",
    items: [
      {
        title: "Create Your Profile",
        description: "Fill in your personal details and contact information.",
        action: "Profile",
      },
      {
        title: "Provide Documentation",
        description: "Submit required documents, such as your ID or resume.",
        action: "Documentation",
      },
      {
        title: "Emergency Contacts",
        description: "Add emergency contacts for safety measures.",
        action: "Emergency Contacts",
      },
    ],
  },
  {
    title: "Company Policies",
    subtitle: "Review and accept company guidelines.",
    items: [
      {
        title: "Accept Policies",
        description: "Read and acknowledge company policies.",
        action: "View",
      },
    ],
  },
  {
    title: "Workspace",
    subtitle: "Set up your workspace preferences.",
    items: [
      {
        title: "Configure Workspace",
        description: "Set up your working environment.",
        action: "Setup",
      },
    ],
  },
  {
    title: "Confirmation & Feedback",
    subtitle: "Final review before completing onboarding.",
    items: [
      {
        title: "Review Details",
        description: "Confirm all information is correct.",
        action: "Review",
      },
      {
        title: "Privacy Policy",
        description: "Read how your data is collected and used.",
        action: "Open",
        route: "/privacy-policy",
      },
      {
        title: "Terms & Conditions",
        description: "Review the terms of use and service agreement.",
        action: "Open",
        route: "/terms-conditions",
      },
    ],
  },
];

export default function Welcome() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleFinish = () => {
    localStorage.setItem("welcome_completed", "true");
    navigate("/");
  };
  //@ts-ignore
  const handleItemClick = (item) => {
    if (item.route) {
      navigate(item.route);
      return;
    }

    // fallback behavior for non-routed items
    console.log("Clicked:", item.title);
  };

  const isLastTab = activeTab === tabs.length - 1;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-5xl">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
          {/* HEADER */}
          <div className="bg-slate-900 text-white p-8 relative">
            <button
              onClick={handleFinish}
              className="absolute right-6 top-6 text-slate-300 hover:text-white"
            >
              ✕
            </button>

            <p className="text-xs uppercase tracking-widest text-slate-400">
              Welcome to SearchSphere
            </p>

            <h1 className="text-3xl font-bold mt-2">
              Smarter Search. Better Discovery. Higher Conversions.
            </h1>

            <p className="text-slate-300 mt-2 max-w-2xl">
              Unlock AI-powered search, semantic discovery, personalized
              recommendations, and real-time insights—built for modern commerce
              teams.
            </p>

            {/* TABS */}
            <div className="flex gap-6 mt-6 text-sm border-b border-slate-700 pb-3">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`pb-2 transition ${
                    activeTab === i
                      ? "text-white border-b-2 border-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* BODY */}
          <div className="p-10">
            {/* TAB HEADER */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900">
                {tabs[activeTab].title}
              </h2>
              <p className="text-slate-500">{tabs[activeTab].subtitle}</p>
            </div>

            {/* LIST */}
            <div className="space-y-4">
              {tabs[activeTab].items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition"
                >
                  {/* LEFT */}
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT ACTION */}
                  <button
                    onClick={() => handleItemClick(item)}
                    className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium hover:bg-green-200 transition"
                  >
                    {item.action}
                  </button>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="mt-10 flex justify-end">
              <button
                onClick={() =>
                  isLastTab ? handleFinish() : setActiveTab((p) => p + 1)
                }
                className="bg-slate-900 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-black transition"
              >
                {isLastTab ? "Finish Setup" : "Next"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
