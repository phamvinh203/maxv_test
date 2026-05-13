import { solutionCards } from "@/constants/sectionData";

function SolutionsSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100 section-padding" id="giai-phap">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-grid text-blue-200 opacity-20" />

      <div className="relative maxv-container">
        {/* Section Header */}
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Giải quyết vấn đề{" "}
            <span className="text-gradient-primary">đơn giản</span>{" "}
            bằng phần mềm <span className="text-gradient-primary">Maxv Accounting</span>{" "}
          </h2>
        </div>

        {/* Solution Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutionCards.map((item, index) => (
            <article
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              key={item.title}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 transition-all duration-500 group-hover:from-blue-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-500/10" />

              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-white p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
                {/* Image Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                {/* Icon Badge */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md group-hover:scale-105 transition-all duration-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <h3 className="mb-3 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-200">
                  {item.text}
                </p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SolutionsSection;
