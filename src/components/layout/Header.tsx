"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const landingLinks = [
  { label: "Giải pháp", href: "#giai-phap" },
  { label: "Tính năng", href: "#tinh-nang" },
  { label: "Bảng giá", href: "#bao-gia" },
  { label: "FAQ", href: "#faq" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="maxv-container">
        <div className="flex h-16 items-center justify-between">
          <a
            className="flex items-center space-x-2"
            href="#top"
            aria-label="Maxv"
            onClick={closeMenu}
          >
            <img
              src="https://maxv.vn/wp-content/uploads/2024/04/Logo-Maxv-200x60-New-01.png"
              alt="MAXV"
              className="h-10 w-auto"
            />
          </a>

          <nav
            className="hidden md:flex md:items-center md:gap-6"
            aria-label="Điều hướng trang"
          >
            {landingLinks.map((item) => (
              <a
                className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button size="sm" asChild>
              <a href="#dang-ky" onClick={closeMenu}>
                Dùng thử ngay
              </a>
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            type="button"
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 pb-4 pt-2" aria-label="Điều hướng trang">
              {landingLinks.map((item) => (
                <a
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <Button size="sm" asChild className="w-full">
                <a href="#dang-ky" onClick={closeMenu}>
                  Dùng thử ngay
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;