"use client";

import { useState, useEffect } from "react";
import { featureGroups } from "@/constants/sectionData";
import { X } from "lucide-react";

function FeaturesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [currentTitle, setCurrentTitle] = useState("");

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
    <section className="bg-white px-4 py-20" id="tinh-nang">
      <div className="maxv-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tính năng phần mềm Maxv Accounting
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureGroups.map((group, index) => (
            <article
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              key={group.title}
            >
              <div className="border-b p-4">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{group.title}</h3>
                </div>
              </div>
              <div
                className="aspect-video cursor-pointer overflow-hidden"
                onClick={() => openModal(group.image, group.title)}
                title="Click để xem hình ảnh lớn hơn"
              >
                <img
                  src={group.image}
                  alt={group.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <ul className="p-4">
                {group.items.map((item) => (
                  <li key={item} className="mb-2 flex items-start gap-2 text-sm text-gray-600">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {modalOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          role="presentation"
        >
          <div className="relative max-h-[90vh] max-w-4xl overflow-auto rounded-lg bg-white p-4">
            <button
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              onClick={closeModal}
              aria-label="Đóng"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="space-y-4">
              <img
                src={currentImage}
                alt={currentTitle}
                className="w-full rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900">{currentTitle}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturesSection;