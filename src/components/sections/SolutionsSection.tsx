import { solutionCards } from "@/constants/sectionData";

function SolutionsSection() {
  return (
    <section className="bg-white px-4 py-20" id="giai-phap">
      <div className="maxv-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Giải quyết vấn đề đơn giản bằng phần mềm Maxv Accounting
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutionCards.map((item) => (
            <article
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              key={item.title}
            >
              <div className="aspect-video overflow-hidden bg-blue-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;