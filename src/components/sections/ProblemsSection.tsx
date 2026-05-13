import { accountingProblems } from "@/constants/sectionData";

function ProblemsSection() {
  return (
    <section className="bg-white px-4 py-20" id="van-de-ke-toan">
      <div className="maxv-container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Những vấn đề kế toán & doanh nghiệp đang gặp phải
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Problem List */}
          <div className="space-y-4">
            {accountingProblems.map((item, index) => (
              <article
                key={index}
                className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50/50"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-gray-700">{item}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Video */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/DcRmx9KwS0w"
                title="MaxV Accounting - Những vấn đề kế toán & doanh nghiệp đang gặp phải"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemsSection;