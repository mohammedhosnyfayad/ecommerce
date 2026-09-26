"use client"
import { SessionProvider } from "next-auth/react";



    export function Proiversession({children}){

        return(
                    <SessionProvider>


            {children}
        </SessionProvider>

        )
    }