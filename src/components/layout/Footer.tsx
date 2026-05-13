import Image from "next/image";

const policyLinks = [
  "Giới thiệu",
  "Sơ đồ Website",
  "Hướng dẫn sử dụng",
  "Điều khoản sử dụng",
  "Chính sách bảo mật",
  "Chính sách thanh toán",
];

function Footer() {
  return (
    <footer className="border-t border-[#eef2f6] bg-white text-[#101828]">
      <div className="bg-[radial-gradient(circle,#e8edf3_1px,transparent_1px)] [background-size:32px_32px]">
        <div className="maxv-container px-4 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Company Info */}
            <section>
              <h3 className="mb-6 inline-block border-b border-[#e5e7eb] pb-4 text-base font-extrabold uppercase text-black">
                CÔNG TY CP PM MAXV VIỆT NAM
              </h3>
              <div className="space-y-4 text-[15px] leading-relaxed text-black">
                <p>
                  <strong>Trụ sở chính:</strong> Tầng 2, số 180 phố Hoàng Ngân,
                  Phường Yên Hòa, Thành phố Hà Nội, Việt Nam.
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:SoftMaxv@gmail.com"
                    className="text-[#1a73e8] transition-colors hover:text-[#0b57d0]"
                  >
                    SoftMaxv@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Hotline:</strong> 0382 325 225 | 0862 325 225
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.maxv.vn"
                    className="text-[#1a73e8] transition-colors hover:text-[#0b57d0]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.maxv.vn
                  </a>
                </p>
                <p>
                  <strong>Thời gian:</strong> 08:30 - 17:30{" "}
                  <strong>Thứ 2 - Thứ 7</strong>
                </p>
              </div>
            </section>

            {/* Policy Links */}
            <section>
              <h3 className="mb-6 inline-block border-b border-[#e5e7eb] pb-4 text-base font-extrabold uppercase text-black">
                THÔNG TIN & CHÍNH SÁCH
              </h3>
              <nav
                className="flex flex-col space-y-4 text-[15px] text-[#101828]"
                aria-label="Thông tin và chính sách"
              >
                {policyLinks.map((link) => (
                  <a
                    href="#"
                    key={link}
                    className="transition-colors hover:text-[#1a73e8]"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </section>

            {/* Social Media */}
            <section>
              <h3 className="mb-6 inline-block border-b border-[#e5e7eb] pb-4 text-base font-extrabold uppercase text-black">
                MẠNG XÃ HỘI
              </h3>

              <div className="mb-4 flex gap-2">
                <a
                  href="https://www.facebook.com/www.maxv.vn?ref=embed_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-[3px] bg-[#385898] text-white transition-colors hover:bg-[#2f477a]"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://www.tiktok.com/@maxv.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-[3px] bg-black text-white transition-colors hover:bg-[#202020]"
                  aria-label="TikTok"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.321 5.562a5.122 5.122 0 0 1-3.117-1.03A5.145 5.145 0 0 1 14.333.93h-3.172v13.823a2.927 2.927 0 1 1-2.006-2.78V8.744a6.104 6.104 0 1 0 5.178 6.03V7.763a8.275 8.275 0 0 0 4.988 1.62V5.562z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@PhanMemKeToanMaxv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-[3px] bg-[#ff0000] text-white transition-colors hover:bg-[#d90000]"
                  aria-label="YouTube"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>

              <Image
                className="h-12 w-auto"
                src="https://maxv.vn/wp-content/uploads/2022/08/DMCA_logo-grn-btn150w.png"
                alt="DMCA Protected"
              />
            </section>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#2778d6] py-4 text-center text-[15px] leading-relaxed text-white">
        <p>
          Giấy chứng nhận Đăng ký Kinh doanh số 0106200129, cấp tại Chi cục
          Thuế Quận Cầu Giấy.
        </p>
        <p>Copyright 2013 © maxv.vn . All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
