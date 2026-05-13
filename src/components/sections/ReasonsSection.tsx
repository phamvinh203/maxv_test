import { reasonCards } from "@/constants/sectionData";

function ReasonsSection() {
  return (
    <section className="bg-white px-4 py-16" id="ly-do-lua-chon">
      <div className="maxv-container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-normal text-[#062f5f] sm:text-4xl lg:text-[42px]">
            Tại sao doanh nghiệp nên lựa chọn Maxv Accounting?
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasonCards.map((item, index) => (
            <article
              className="flex min-h-[405px] flex-col items-center rounded-2xl border border-[#d9edf8] bg-white px-10 py-12 text-center shadow-[0_8px_22px_rgba(7,135,207,0.08)] transition-shadow hover:shadow-[0_12px_28px_rgba(7,135,207,0.14)]"
              key={item.title}
            >
              <div className="mb-12 flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#087fbd] text-[32px] font-extrabold leading-none text-white shadow-[0_10px_18px_rgba(7,135,207,0.24)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-10 text-[26px] font-extrabold leading-tight text-[#0b2b54]">
                {item.title}
              </h3>
              <p className="max-w-[300px] text-[18px] font-medium leading-[1.75] text-[#4b5b70]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReasonsSection;
