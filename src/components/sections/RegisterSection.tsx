"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { registerBenefits } from "@/constants/sectionData";
import { Button } from "@/components/ui/button";

function RegisterSection() {
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          package: formData.get("package"),
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Không thể gửi đăng ký.");
      }

      event.currentTarget?.reset();
      setStatus({
        type: "success",
        message:
          result.message ||
          "Đăng ký thành công. Maxv sẽ liên hệ hỗ trợ bạn trong thời gian sớm nhất.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Không thể gửi đăng ký lúc này. Vui lòng thử lại sau.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 section-padding" id="dang-ky">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots text-blue-300 opacity-30" />

      <div className="relative maxv-container">
        {/* Section Header */}
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Đăng ký{" "}
            <span className="text-gradient-primary">Maxv Accounting</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Benefits Card */}
          <div className="group relative rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-left-8 duration-1000">
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 transition-all duration-500 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5" />

            {/* Header */}
            <div className="relative mb-6 flex items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-xl font-bold text-white shadow-lg">
                01
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900">Lợi ích khi đăng ký</h3>
              </div>
            </div>

            {/* Benefits List */}
            <ul className="relative space-y-4">
              {registerBenefits.map((benefit, index) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-slate-700"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-md">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Contact Buttons */}
            <div className="relative mt-8 space-y-3">
              <Button
                variant="outline"
                className="w-full bg-slate-50 hover:bg-blue-50 transition-all duration-300"
                asChild
              >
                <a href="tel:0382325225">
                  Liên hệ: 0382 325 225
                </a>
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-md hover:shadow-blue-500/25 transition-all duration-300"
                asChild
              >
                <a href="#dang-ky-form">
                  Dùng thử ngay
                </a>
              </Button>
            </div>

          </div>

          {/* Registration Form */}
          <form
            className="group relative rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200"
            id="dang-ky-form"
            onSubmit={handleSubmit}
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 transition-all duration-500 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5" />

            {/* Header */}
            <div className="relative mb-6 flex items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 text-xl font-bold text-white shadow-lg">
                02
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900">Thông tin đăng ký</h3>
                <p className="text-sm text-slate-600 mt-1">Điền thông tin để được hỗ trợ miễn phí</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="relative space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                  Họ và tên*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nhập họ và tên của bạn"
                  className="w-full rounded-xl bg-slate-50 px-4 py-3 text-sm focus:bg-white focus:shadow-md focus:outline-none transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                  Số điện thoại*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  className="w-full rounded-xl bg-slate-50 px-4 py-3 text-sm focus:bg-white focus:shadow-md focus:outline-none transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                  Địa chỉ Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Nhập địa chỉ email"
                  className="w-full rounded-xl bg-slate-50 px-4 py-3 text-sm focus:bg-white focus:shadow-md focus:outline-none transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="package" className="mb-2 block text-sm font-semibold text-slate-700">
                  Chọn gói sản phẩm*
                </label>
                <select
                  id="package"
                  name="package"
                  defaultValue=""
                  className="w-full rounded-xl bg-slate-50 px-4 py-3 text-sm focus:bg-white focus:shadow-md focus:outline-none transition-all duration-200"
                  required
                >
                  <option value="" disabled>
                    Chọn gói sản phẩm
                  </option>
                  <option>Dùng thử trước (15 ngày)</option>
                  <option>Gói 05 công ty</option>
                  <option>Gói 10 công ty</option>
                  <option>Gói 20 công ty</option>
                  <option>Gói doanh nghiệp</option>
                </select>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-md hover:shadow-orange-500/25 transition-all duration-300"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Đang gửi..." : "Đăng ký ngay"}
              </Button>
              {status.type !== "idle" && (
                <p
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-700"
                  }`}
                  role="status"
                >
                  {status.message}
                </p>
              )}
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
