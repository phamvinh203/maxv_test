import { registerBenefits } from "@/constants/sectionData";
import { Button } from "@/components/ui/button";

function RegisterSection() {
  return (
    <section className="bg-white px-4 py-20" id="dang-ky">
      <div className="maxv-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Đăng ký Maxv Accounting
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Benefits Card */}
          <div className="rounded-xl border bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                01
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Lợi ích khi đăng ký</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {registerBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-gray-600">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-blue-600"
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
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3">
              <Button variant="outline" className="w-full" asChild>
                <a href="tel:0382325225">Liên hệ: 0382 325 225</a>
              </Button>
              <Button className="w-full" asChild>
                <a href="#dang-ky">Dùng thử ngay</a>
              </Button>
            </div>
          </div>

          {/* Registration Form */}
          <form className="rounded-xl border bg-white p-8 shadow-sm" id="dang-ky-form">
            <div className="mb-6 flex items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                02
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Thông tin đăng ký</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Họ và tên*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nhập họ và tên của bạn"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                  Số điện thoại*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Địa chỉ Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Nhập địa chỉ email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="package" className="mb-2 block text-sm font-medium text-gray-700">
                  Chọn gói sản phẩm*
                </label>
                <select
                  id="package"
                  name="package"
                  defaultValue=""
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
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
              <Button type="submit" className="w-full" size="lg">
                Đăng ký ngay
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;