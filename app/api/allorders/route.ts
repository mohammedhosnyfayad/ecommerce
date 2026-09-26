import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export async function GET(req: NextRequest) {
    const token = await getToken({
        req: req
    });

    console.log("tokenreq", token);

    if (!token) {
        return NextResponse.json({ message: "Login frist", status: 401 });
    }

    const userToken = token.token as string;
    const decoded = jwtDecode<{ id: string }>(userToken);

    console.log("USER ID:", decoded.id);

    const response = await fetch(
        `https://ecommerce.routemisr.com/api/v1/orders/user/${decoded.id}`
    );

    if (!response.ok) {
        return NextResponse.json({ message: "Login frist", status: 401 });
    }

    const payload = await response.json();

    console.log("STATUS:", response.status);
    console.log("APIpayload:", payload);

    return NextResponse.json(payload);
}