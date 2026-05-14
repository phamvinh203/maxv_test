import type { Metadata, MetadataRoute } from "next";
import { faqItems, pricingPlans } from "@/constants/sectionData";

const normalizeSiteUrl = (url?: string) => {
  if (!url) {
    return "https://mvacc.maxv.vn";
  }

  const withProtocol = /^https?:\/\//i.test(url) ? url : `https://${url}`;

  return withProtocol.replace(/\/+$/, "");
};

const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL,
);

export const siteConfig = {
  name: "Maxv Accounting",
  companyName: "Công ty CP PM Maxv Việt Nam",
  url: siteUrl,
  title: "Maxv Accounting - Phần mềm kế toán online cho doanh nghiệp",
  description:
    "Maxv Accounting - Phần mềm kế toán online hàng đầu cho doanh nghiệp vừa và nhỏ. Kết nối hóa đơn điện tử, báo cáo thuế tự động theo Thông tư 133 & 200, làm việc từ xa. Dùng thử miễn phí!",
  ogImage:
    "https://maxv.vn/wp-content/uploads/2022/08/Laptop-Maxv-Accounting-1200x820-3-01-min.png",
  keywords: [
    "phần mềm kế toán",
    "phần mềm kế toán online",
    "Maxv Accounting",
    "kế toán doanh nghiệp",
    "kế toán đám mây",
    "hóa đơn điện tử",
    "báo cáo thuế",
    "phần mềm kế toán doanh nghiệp vừa và nhỏ",
    "phần mềm kế toán thông tư 133",
    "phần mềm kế toán thông tư 200",
    "phần mềm kế toán xây dựng",
    "phần mềm kế toán sản xuất",
    "kế toán online",
    "quản lý tài chính doanh nghiệp",
    "báo cáo tài chính online",
    "phần mềm kế toán cho dịch vụ kế toán",
  ],
  contact: {
    email: "SoftMaxv@gmail.com",
    phone: "+84382325225",
    hotline: "0382 325 225",
    address:
      "Tầng 2, số 180 phố Hoàng Ngân, Phường Yên Hòa, Thành phố Hà Nội, Việt Nam",
  },
  sameAs: [
    "https://www.facebook.com/www.maxv.vn",
    "https://www.tiktok.com/@maxv.vn",
    "https://www.youtube.com/@PhanMemKeToanMaxv",
  ],
  pages: [
    {
      path: "/",
      title: "Phần mềm kế toán online Maxv Accounting | Đám mây, Hóa đơn điện tử, TT 133 & 200",
      description:
        "Maxv Accounting - Phần mềm kế toán online cho doanh nghiệp vừa và nhỏ. Hỗ trợ hóa đơn điện tử, báo cáo thuế theo Thông tư 133 & 200, làm việc từ xa, quản lý nhiều công ty. Dùng thử miễn phí!",
      changeFrequency: "monthly",
      priority: 1,
    },
  ],
} as const;

export const getSiteUrl = (path = "/") => new URL(path, siteConfig.url).toString();

export function buildBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.companyName, url: siteConfig.url }],
    creator: siteConfig.companyName,
    publisher: siteConfig.companyName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "software",
    other: {
      "geo.region": "VN",
      "geo.placename": "Hà Nội",
    },
  };
}

export function buildPageMetadata(path = "/"): Metadata {
  const page = siteConfig.pages.find((item) => item.path === path) ?? siteConfig.pages[0];

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: getSiteUrl(page.path),
      languages: {
        "vi-VN": getSiteUrl(page.path),
        "x-default": getSiteUrl(page.path),
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: getSiteUrl(page.path),
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 820,
          alt: "Giao diện phần mềm kế toán Maxv Accounting",
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [siteConfig.ogImage],
    },
  };
}

export function buildRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: getSiteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}

export function buildSitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return siteConfig.pages.map((page) => ({
    url: getSiteUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}

export function buildStructuredData() {
  const lowestPublishedPrice =
    pricingPlans
      .flatMap((plan) => plan.rows.map(([, price]) => Number(price.replace(/\D/g, ""))))
      .filter((price) => price > 0)
      .sort((a, b) => a - b)[0] ?? 0;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.url,
      logo: "https://maxv.vn/wp-content/uploads/2024/04/Logo-Maxv-200x60-New-01.png",
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.contact.address,
        addressLocality: "Hà Nội",
        addressCountry: "VN",
      },
      sameAs: siteConfig.sameAs,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: "vi-VN",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: siteConfig.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: siteConfig.url,
      image: siteConfig.ogImage,
      description: siteConfig.description,
      featureList: [
        "Kế toán tổng hợp",
        "Kế toán tiền",
        "Kế toán bán hàng",
        "Kế toán mua hàng",
        "Hàng tồn kho",
        "Tài sản cố định",
        "Báo cáo thuế GTGT",
        "Hóa đơn điện tử",
        "Giá thành dự án",
        "Giá thành sản xuất",
        "Báo cáo Thông tư 133",
        "Báo cáo Thông tư 200",
      ],
      offers: {
        "@type": "Offer",
        price: String(lowestPublishedPrice),
        priceCurrency: "VND",
        url: getSiteUrl("/#bao-gia"),
        availability: "https://schema.org/InStock",
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.companyName,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Maxv Accounting - Phần mềm kế toán online cho doanh nghiệp",
      description:
        "Giới thiệu các vấn đề kế toán doanh nghiệp thường gặp và giải pháp phần mềm kế toán online Maxv Accounting.",
      thumbnailUrl: "https://img.youtube.com/vi/DcRmx9KwS0w/maxresdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/DcRmx9KwS0w",
      uploadDate: "2022-12-01",
      publisher: {
        "@type": "Organization",
        name: siteConfig.companyName,
        logo: {
          "@type": "ImageObject",
          url: "https://maxv.vn/wp-content/uploads/2024/04/Logo-Maxv-200x60-New-01.png",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Giới thiệu", item: `${siteConfig.url}/#gioi-thieu` },
        { "@type": "ListItem", position: 2, name: "Vấn đề kế toán", item: `${siteConfig.url}/#van-de-ke-toan` },
        { "@type": "ListItem", position: 3, name: "Giải pháp", item: `${siteConfig.url}/#giai-phap` },
        { "@type": "ListItem", position: 4, name: "Tính năng", item: `${siteConfig.url}/#tinh-nang` },
        { "@type": "ListItem", position: 5, name: "Bảng giá", item: `${siteConfig.url}/#bao-gia` },
        { "@type": "ListItem", position: 6, name: "FAQ", item: `${siteConfig.url}/#faq` },
      ],
    },
  ];
}
