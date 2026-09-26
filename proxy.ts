import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import React from 'react'

export default async function proxy(req:NextRequest) {
    const pathName = req.nextUrl.pathname
    const routepages= ['/cart' , '/wishlist' ]
    const authpages=[`/login` , '/regsirt']

    const mytoken = await getToken({
        req:req,
        secret:process.env.NEXTAUTH_SECRET,
        secureCookie: process.env.NODE_ENV === 'production'
        
    })

    const acsestoken =  mytoken?.token
    if(!acsestoken && routepages.some((path)=> pathName.startsWith(path))){
        return NextResponse.redirect(new URL(`/login`, req.url) )
    }
    if(acsestoken && authpages.some((path)=> pathName.startsWith(path))){
        return NextResponse.redirect(new URL(`/`, req.url) )
    }
    return NextResponse.next();
}
