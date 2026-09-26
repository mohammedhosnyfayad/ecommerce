"use client";
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { apisignin } from '@/app/_Files/CallApi/callregsirt';

export default function page() {  
  const router = useRouter()

    const sch = z.object({
    name : z.string().nonempty().min(3 , " title is upp to 5 letters").max(30, "title lower 30 letters"),
    email: z.string().min(1, "Email is required").email("Invalid email") ,
     // date: z.coerce.date().refine((val)=>{
    //   const valueuser = val.getFullYear()
    //   const year = new Date().getFullYear()
    //   const res = year - valueuser
    //     return res >= 20
    // } , "You must be at least 20 years old"),
    phone: z.string().nonempty(),
    password: z.string().nonempty(),
    rePassword: z.string().nonempty()
  }  ).refine((pasw)=>{
      if(pasw.password === pasw.rePassword){
        return true
      } else {
        return false
      }
    },{
            message: "Passwords do not match",
            path: ["rePassword"], // Highlights the repassword field

    })

  const {handleSubmit , control,} = useForm({
    defaultValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",
      phone:"",
    },
    resolver:zodResolver(sch),
    mode:"onBlur"
  })

  function senddata(data: any){
    console.log(data);
    apisignin(data)
    // router.push(`/login`)
    
  }

  return (
    <div className="min-h-screen  text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            {/* <Image src="https://drive.google.com/uc?export=view&id=1MFiKAExRFF0-2YNpAZzIu1Sh52J8r16v" className="w-mx-auto" /> */}
          </div>
          <div className="mt-8 flex flex-col items-center">
            <div className="w-full flex-1 mt-4">
            <h1 className='font-bold text-center text-4xl'>Sign Up</h1>
              <div className="my-8 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or Sign Up with Cartesian E-mail
                </div>
              </div>
              <form onSubmit={handleSubmit(senddata)} action="">
              <div className="mx-auto max-w-xs">
                {/* Name */}
                
{/* Name */}
<Controller 
  name="name"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
      <Input className='m-2'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your name"
        autoComplete="name"
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

{/* Email */}
<Controller
  name="email"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
      <Input  className='m-2'
        {...field}
        id={field.name}
        type="email"
        aria-invalid={fieldState.invalid}
        placeholder="Enter your email"
        autoComplete="email"
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

{/* Phone */}
<Controller
  name="phone"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
      <Input className='m-2'
        {...field}
        id={field.name}
        type="tel"
        aria-invalid={fieldState.invalid}
        placeholder="Enter your phone number"
        autoComplete="tel"
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

{/* Password */}
<Controller
  name="password"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
      <Input className='m-2'
        {...field}
        id={field.name}
        type="password"
        aria-invalid={fieldState.invalid}
        placeholder="Enter your password"
        autoComplete="new-password"
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

{/* Re-enter Password */}
<Controller
  name="rePassword"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Re-enter Password</FieldLabel>
      <Input className='m-2'
        {...field}
        id={field.name}
        type="password"
        aria-invalid={fieldState.invalid}
        placeholder="Re-enter your password"
        autoComplete="new-password"
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
                {/* Register Button */}
                <button className="mt-5 tracking-wide font-semibold bg-green-400 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy={7} r={4} />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">
                    Create Account
                  </span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by Cartesian Kinetics
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>
                  and its
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz")' }}>
          </div>
        </div>
      </div>
    </div>
  )
}
