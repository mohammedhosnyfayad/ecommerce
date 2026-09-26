import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { email } from "zod";
import { async } from './../_Files/CallApi/callregsirt';
import axios from "axios";

export const auth : NextAuthOptions = {
    providers:[
        Credentials({
            name:"mylogin",

            credentials:{
                password:{label:"password" , type:"text"},
                email:{label:"email" , type:"email"},
            },
            async authorize(credentials) {
                    
                const resp = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin' , {
                    method:"POST",
                    headers:{
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email:credentials?.email,
                        password:credentials?.password,
                    })


                })
           
                    const Alldata = await resp.json()

    console.log("USER FROM API:", Alldata.user);


                    return {
                        id:Alldata.user.id,
                        name:Alldata.user.name,
                        email:Alldata.user.email,
                        token:Alldata.token
                    }
                    
    
            }
        })
        
    ],
    callbacks:({
        jwt({user, token}){

            if(user){
                token.id = user.id
                token.token = user.token
            }
return token
        },

       session({session , token}){
        if(token){
            session.id = token.id
        }

        return session
       } 
    }),
    
    
    
    pages:{
        signIn:`/login`
    }
} 