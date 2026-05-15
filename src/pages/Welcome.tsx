import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles, Filter, BarChart3, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "AI-Powered Smart Search",
    description:
      "Boost conversions with intelligent search, autocomplete, and attribute-aware results.",
    icon: <Search className="w-14 h-14" />,
  },
  {
    title: "Intent-Based Discovery",
    description:
      "Understand customer intent with typo-tolerant and semantic search.",
    icon: <Sparkles className="w-14 h-14" />,
  },
  {
    title: "Advanced Filters",
    description:
      "Dynamic facets and filters that work across any product catalog.",
    icon: <Filter className="w-14 h-14" />,
  },
  {
    title: "Analytics & Insights",
    description:
      "Track top searches, no-result queries, and improve conversions.",
    icon: <BarChart3 className="w-14 h-14" />,
  },
];

export default function Welcome() {
  const [current, setCurrent] = useState(0);

  const navigate = useNavigate();

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent((prev) => prev + 1);
      return;
    }

    localStorage.setItem("welcome_completed", "true");

    navigate("/");
  };

  const handleSkip = () => {
    localStorage.setItem("welcome_completed", "true");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-4xl">
        <div className="bg-white border border-slate-200 rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900">
                SearchSphere
              </h1>

              <p className="text-slate-500 mt-2 text-lg">
                Smart AI Search & Discovery
              </p>
            </div>

            <button
              onClick={handleSkip}
              className="text-slate-500 hover:text-slate-900 transition font-medium"
            >
              Skip
            </button>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col items-center text-center py-10">
            <div className="bg-slate-100 text-slate-900 p-7 rounded-3xl mb-10 shadow-sm">
              {slides[current].icon}
            </div>

            <h2 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
              {slides[current].title}
            </h2>

            <p className="text-slate-600 text-xl leading-relaxed max-w-2xl">
              {slides[current].description}
            </p>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mb-10">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index ? "w-12 bg-slate-900" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>

          {/* FOOTER */}
          <div className="flex justify-between items-center">
            <p className="text-slate-400 text-sm font-medium">
              {current + 1} / {slides.length}
            </p>

            <button
              onClick={handleNext}
              className="bg-slate-900 hover:bg-black text-white px-7 py-3.5 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              {current === slides.length - 1 ? "Get Started" : "Next"}

              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
