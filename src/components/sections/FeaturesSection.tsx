"use client";

import { useState, useEffect } from "react";
import { featureGroups } from "@/constants/sectionData";
import { X } from "lucide-react";
import Image from "next/image";

function FeaturesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [currentTitle, setCurrentTitle] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  const openModal = (image: string, title: string) => {
    setCurrentImage(image);
    setCurrentTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
    setCurrentTitle("");
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 section-padding" id="tinh-nang">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots text-blue-300 opacity-30" />

      <div className="relative maxv-container">
        {/* Section Header */}
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Tính năng phần mềm{" "}
            <span className="text-gradient-primary">Maxv Accounting</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureGroups.map((group, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <article
                key={group.title}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-blue-500/5 transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`} />

                {/* Card Content */}
                <div className="relative p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="mb-3 flex items-center gap-3">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-sm font-bold text-white shadow-md transition-all duration-300 ${
                        isHovered ? "scale-105" : ""
                      }`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`relative mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner transition-all duration-500 cursor-pointer ${
                      isHovered ? "shadow-2xl" : ""
                    }`}
                    onClick={() => openModal(group.image, group.title)}
                    title="Click để xem hình ảnh lớn hơn"
                  >
                    <Image
                      src={group.image}
                      alt={group.imageAlt}
                      fill
                      className={`h-full w-full object-cover transition-all duration-700 ${
                        isHovered ? "scale-105" : "scale-100"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay on Hover */}
                    <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-blue-600 shadow-2xl transition-all duration-500 ${
                        isHovered ? "scale-100" : "scale-75"
                      }`}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-200"
                      >
                        <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 text-white transition-all duration-300 ${
                          isHovered ? "scale-105" : ""
                        }`}>
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="flex-1 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </article>
            );
          })}
        </div>
      </div>

      {/* Enhanced Modal */}
      {modalOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          role="presentation"
        >
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-3xl bg-white p-2 shadow-2xl animate-in zoom-in duration-300">
            {/* Enhanced Close Button */}
            <button
              className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={closeModal}
              aria-label="Đóng"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6 p-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200">
                <Image
                  src={currentImage}
                  alt={`Phân hệ ${currentTitle.toLowerCase()} - phần mềm kế toán Maxv Accounting`}
                  fill
                  className="w-full object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{currentTitle}</h3>
                </div>
                <p className="text-slate-600">
                  Chi tiết tính năng và giao diện của phân hệ {currentTitle.toLowerCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturesSection;
