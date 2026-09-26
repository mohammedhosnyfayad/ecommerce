import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    // 1. الحصول على التوكن
    const token = await getToken({ req });

    // 2. التحقق من وجود التوكن (إضافة return وتحديد الـ status الحقيقي)
    if (!token || !token.token) {
        return NextResponse.json(
            { message: "Unauthorized access" },
            { status: 401 }
        );
    }

    try {
        // 3. إرسال الطلب إلى الطلب الخارجي
        const response = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
            headers: {
                token: token.token as string
            }
        });

        // 4. التحقق من نجاح استجابة السيرفر الخارجي
        if (!response.ok) {
            return NextResponse.json(
                { message: "Failed to fetch wishlist data from source" },
                { status: response.status }
            );
        }

        const payload = await response.json();

        // 5. إرجاع البيانات بنجاح
        return NextResponse.json(payload);

    } catch (error) {
        // 6. التعامل مع أخطاء الشبكة أو السيرفر
        return NextResponse.json(
            { message: "Internal Server Error", error: (error as Error).message },
            { status: 500 }
        );
    }
}
