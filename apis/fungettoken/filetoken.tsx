"use server"
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export  async function gettokendata(){
    const cookis = await cookies()
    const Nametoken = cookis.get("next-auth.session-token")?.value
    const valuetoken = await decode({
        secret:process.env.NEXTAUTH_SECRET!,
        token:Nametoken
    })

    return valuetoken?.token
}