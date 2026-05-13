"use client";

import { useState } from "react";
import { faqItems } from "@/constants/sectionData";
import { ChevronDown } from "lucide-react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 section-padding" id="faq">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots text-blue-300 opacity-30" />

      <div className="relative maxv-container">
        {/* Section Header */}
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Câu hỏi thường gặp về{" "}
            <span className="text-gradient-primary">Maxv Accounting</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-3xl space-y-4 animate-in fade-in duration-1000 delay-200">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-500 ${
                  isOpen
                    ? "shadow-2xl shadow-blue-500/20"
                    : "hover:shadow-md"
                }`}
                key={item.question}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Gradient Overlay on Open */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-blue-500/5 transition-opacity duration-300 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`} />

                {/* Question Button */}
                <button
                  className="relative flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50/50"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold shadow-md transition-all duration-300 ${
                      isOpen ? "scale-105" : ""
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <span className="pr-4 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 flex-shrink-0 text-slate-500 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pl-12">
                      <p className="text-slate-700 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}

export default FAQSection;
