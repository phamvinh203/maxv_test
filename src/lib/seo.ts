import type { Metadata, MetadataRoute } from "next";
import { faqItems, pricingPlans } from "@/constants/sectionData";

const normalizeSiteUrl = (url?: string) => {
  if (!url) {
    return "https://maxv-test.vercel.app";
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
    "Maxv Accounting là phần mềm kế toán online trên nền điện toán đám mây, hỗ trợ hóa đơn điện tử, báo cáo thuế, quản trị tài chính và làm việc từ xa cho doanh nghiệp vừa và nhỏ.",
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
      title: "Maxv Accounting - Phần mềm kế toán online cho doanh nghiệp",
      description:
        "Phần mềm kế toán online Maxv Accounting hỗ trợ doanh nghiệp vừa và nhỏ làm việc từ xa, quản lý hóa đơn điện tử, báo cáo thuế và tài chính trên nền điện toán đám mây.",
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
  };
}

export function buildPageMetadata(path = "/"): Metadata {
  const page = siteConfig.pages.find((item) => item.path === path) ?? siteConfig.pages[0];

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
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
  const lowestPublishedPrice = pricingPlans
    .flatMap((plan) => plan.rows.map(([, price]) => Number(price.replace(/\D/g, ""))))
    .filter((price) => price > 0)
    .sort((a, b) => a - b)[0];

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
  ];
}
