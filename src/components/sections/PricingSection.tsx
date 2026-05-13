import { pricingPlans } from "@/constants/sectionData";
import { Button } from "@/components/ui/button";

function PricingSection() {
  return (
    <section className="bg-blue-50 px-4 py-20" id="bao-gia">
      <div className="maxv-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bảng báo giá phần mềm kế toán Maxv Accounting
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <article
              className="flex flex-col rounded-xl border bg-white p-6 shadow-sm"
              key={plan.title}
            >
              <div className="mb-6 border-b pb-4">
                <h3 className="text-lg font-semibold text-gray-900">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.subtitle}</p>
              </div>
              <div className="flex-1 space-y-3">
                {plan.rows.map(([label, price]) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{label}</span>
                    <strong className="text-gray-900">{price}</strong>
                  </div>
                ))}
              </div>
              <Button className="mt-6 w-full" variant="outline" asChild>
                <a href="#dang-ky">Đăng ký ngay</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;