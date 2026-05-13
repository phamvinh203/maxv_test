import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const packageOptions = new Set([
  "Dùng thử trước (15 ngày)",
  "Gói 05 công ty",
  "Gói 10 công ty",
  "Gói 20 công ty",
  "Gói doanh nghiệp",
]);

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const name = getString(body.name);
    const phone = getString(body.phone);
    const email = getString(body.email).toLowerCase();
    const selectedPackage = getString(body.package);

    if (!name || name.length < 2) {
      return NextResponse.json(
        { message: "Vui lòng nhập họ và tên hợp lệ." },
        { status: 400 },
      );
    }

    if (!/^[0-9+\-\s()]{8,20}$/.test(phone)) {
      return NextResponse.json(
        { message: "Vui lòng nhập số điện thoại hợp lệ." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Vui lòng nhập địa chỉ email hợp lệ." },
        { status: 400 },
      );
    }

    if (!packageOptions.has(selectedPackage)) {
      return NextResponse.json(
        { message: "Vui lòng chọn gói sản phẩm hợp lệ." },
        { status: 400 },
      );
    }

    const registration = await prisma.registration.create({
      data: {
        name,
        phone,
        email,
        package: selectedPackage,
      },
      select: {
        id: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        message: "Đăng ký thành công. Maxv sẽ liên hệ hỗ trợ bạn trong thời gian sớm nhất.",
        registration,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Register API error:", error);

    return NextResponse.json(
      { message: "Không thể gửi đăng ký lúc này. Vui lòng thử lại sau." },
      { status: 500 },
    );
  }
}
