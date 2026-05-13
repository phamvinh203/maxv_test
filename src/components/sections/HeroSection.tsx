import { Button } from "@/components/ui/button";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 section-padding" id="gioi-thieu">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots text-slate-300 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

      <div className="relative maxv-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content Side */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Maxv Accounting #2025
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Phần mềm kế toán online{" "}
                <span className="text-gradient-primary">
                  Maxv Accounting
                </span>
              </h1>
              <p className="text-lg text-slate-600 md:text-xl leading-relaxed max-w-2xl">
                Giải pháp kế toán trên nền điện toán đám mây dành cho doanh nghiệp vừa và nhỏ.
                <span className="hidden sm:inline">
                  {" "}Kế toán và chủ doanh nghiệp có thể làm việc, quản lý từ xa mà hiệu quả công việc vẫn như làm tại công ty.
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="flex-1 sm:flex-none bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                asChild
              >
                <a href="#bao-gia">
                  Xem bảng giá
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 sm:flex-none bg-slate-50 hover:bg-blue-50 transition-all duration-300"
                asChild
              >
                <a href="#dang-ky">
                  Dùng thử ngay
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                
                Dùng thử miễn phí
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                
                Làm việc online
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                
                Nhanh chóng & dễ dùng
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:mt-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200" aria-hidden="true">
            <div className="relative">
              {/* Background Decorations */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>

              {/* Main Image */}
              <Image
                src="https://maxv.vn/wp-content/uploads/2022/08/Laptop-Maxv-Accounting-1200x820-3-01-min.png"
                alt="Phần mềm kế toán Maxv Accounting"
                className="relative w-full rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-500"
              />

              
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

export default HeroSection;