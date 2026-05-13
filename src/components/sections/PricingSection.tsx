import { pricingPlans } from "@/constants/sectionData";
import { Button } from "@/components/ui/button";

function PricingSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50/50 to-blue-50 section-padding" id="bao-gia">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-grid text-blue-300 opacity-20" />

      <div className="relative maxv-container">
        {/* Section Header */}
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Bảng báo giá{" "}
            <span className="text-gradient-primary">Maxv Accounting</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Lựa chọn gói phù hợp nhất với nhu cầu doanh nghiệp của bạn
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <article
              className="group relative flex flex-col rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              key={plan.title}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 transition-all duration-500 group-hover:from-blue-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-500/10" />

              {/* Plan Header */}
              <div className="relative mb-6 pb-4">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                  {plan.title}
                </h3>
                <p className="text-sm text-slate-600">{plan.subtitle}</p>
              </div>

              {/* Pricing Details */}
              <div className="relative flex-1 space-y-4">
                {plan.rows.map(([label, price], rowIndex) => (
                  <div
                    key={label}
                    className="flex items-center justify-between text-sm transition-colors duration-200"
                    style={{
                      transitionDelay: `${rowIndex * 50}ms`,
                    }}
                  >
                    <span className="text-slate-600 font-medium">{label}</span>
                    <strong className="text-base text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                      {price}
                    </strong>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="relative mt-6">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-md hover:shadow-blue-500/25 transition-all duration-300"
                  asChild
                >
                  <a href="#dang-ky">
                    Đăng ký ngay
                  </a>
                </Button>
              </div>

            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
}

export default PricingSection;
