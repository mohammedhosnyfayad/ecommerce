import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const token = await getToken({
        req: req
    });

    if (!token) {
        return NextResponse.json({ message: "Login frist", status: 401 });
    }

    const userToken = token.token as string;

    const response = await fetch(
        `https://ecommerce.routemisr.com/api/v1/categories/${id}`
    );

    if (!response.ok) {
        return NextResponse.json({ message: "Login frist", status: 401 });
    }

    const payload = await response.json();

    console.log("STATUS:", response.status);
    console.log("APIpayload:", payload);

    return NextResponse.json(payload);
}