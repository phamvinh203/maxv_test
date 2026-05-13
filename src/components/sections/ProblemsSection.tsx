import { accountingProblems } from "@/constants/sectionData";

function ProblemsSection() {
  return (
    <section className="relative bg-white section-padding" id="van-de-ke-toan">
      <div className="maxv-container">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl whitespace-nowrap">
            Những{" "}
            <span className="text-gradient-primary">vấn đề</span>{" "}
            kế toán & doanh nghiệp đang gặp phải
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Problem List */}
          <div className="space-y-2">
            {accountingProblems.map((item, index) => (
              <article
                key={index}
                className="group flex items-start gap-4 rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:bg-red-50/30 hover:shadow-md"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-sm font-bold text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-200">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Video */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div className="aspect-[16/10]">
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
        </div>
      </div>
    </section>
  );
}

export default ProblemsSection;
