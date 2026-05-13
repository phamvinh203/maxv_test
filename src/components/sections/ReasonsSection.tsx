import { reasonCards } from "@/constants/sectionData";

function ReasonsSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 section-padding-sm" id="ly-do-lua-chon">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots text-blue-300 opacity-30" />

      <div className="relative maxv-container">
        {/* Section Header */}
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Tại sao doanh nghiệp nên lựa chọn{" "}
            <span className="text-gradient-primary">Maxv Accounting</span>?
          </h2>
        </div>

        {/* Reason Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasonCards.map((item, index) => (
            <article
              className="group relative flex min-h-[360px] flex-col items-center rounded-3xl bg-white/80 backdrop-blur-sm px-8 py-10 text-center shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              key={item.title}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 transition-all duration-500 group-hover:from-purple-500/10 group-hover:via-pink-500/5 group-hover:to-purple-500/10" />

              {/* Number Badge */}
              <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-3xl font-extrabold leading-none text-white shadow-lg group-hover:scale-105 transition-all duration-300">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="max-w-[280px] text-base leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-200">
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

export default ReasonsSection;
