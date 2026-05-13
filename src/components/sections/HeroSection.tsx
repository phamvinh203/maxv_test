import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 px-4 py-20 md:py-32" id="gioi-thieu">
      <div className="maxv-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-semibold text-blue-600">
                Maxv Accounting #2025
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Phần mềm kế toán online Maxv Accounting
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Maxv Accounting là phần mềm kế toán online trên nền điện toán đám mây
              dành cho doanh nghiệp vừa và nhỏ. Kế toán và chủ doanh nghiệp có thể
              làm việc, quản lý từ xa mà hiệu quả công việc vẫn như làm tại công ty.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#bao-gia">Xem bảng giá</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#dang-ky">Dùng thử ngay</a>
              </Button>
            </div>
          </div>
          <div className="relative lg:mt-0" aria-hidden="true">
            <img
              src="https://maxv.vn/wp-content/uploads/2022/08/Laptop-Maxv-Accounting-1200x820-3-01-min.png"
              alt="Phần mềm kế toán Maxv Accounting"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;