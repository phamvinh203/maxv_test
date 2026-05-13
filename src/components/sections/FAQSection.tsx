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
    <section className="bg-blue-50 px-4 py-20" id="faq">
      <div className="maxv-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Câu hỏi thường gặp về Maxv Accounting
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tìm hiểu thêm về phần mềm kế toán online Maxv Accounting
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqItems.map((item, index) => (
            <div
              className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all ${
                openIndex === index ? "border-blue-300 shadow-md" : ""
              }`}
              key={item.question}
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-lg font-semibold text-gray-900">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;