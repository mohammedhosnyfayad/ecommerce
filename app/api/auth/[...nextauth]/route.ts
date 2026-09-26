import { auth } from "@/app/nextAuth/authopthion";
import NextAuth from "next-auth";

const hander = NextAuth(auth)


export {hander as POST, hander as GET}