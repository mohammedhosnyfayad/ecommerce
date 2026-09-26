"use client";

import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { forgetpasswordapi } from "@/actions/forgetpassword/forgetpasswordfn";
import { resetcodefunc } from "@/actions/forgetpassword/forgetpasswordfn";
import { resatpassowrdend } from "@/actions/forgetpassword/forgetpasswordfn";
import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify'
import {  useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from "react";

export default function ForgotPassword() {
    const [success , issuccess] = useState(false)
    const [codesuccess , setcodesuccess] = useState(false)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });


// resetcode

  const { control:resetControl, handleSubmit:resetHandleSubmit } = useForm({
    defaultValues: {
      resetCode: "",
    },
  });




  //resetpassword

  const { control:resetpassword, handleSubmit:handelresetpassword } = useForm({
    defaultValues: {
      email: "",
      newPassword: "",
    },
  });


 async function handelresetpasswordfunc(data) {
    const fayad = await resatpassowrdend(data)
     console.log("end" ,fayad);

  }



 async function onSubmitFUNC(data) {
    console.log(data);
  const msgforget = await   funcforgetpassword(data)
  
  }
 async function handelresetcode(resetCode) {
    console.log(resetCode);
  const msgresetcode = await   resetcodefunction(resetCode)

  
  }

  const {data:dataforgetpassword , mutate:funcforgetpassword} =  useMutation({
    mutationFn:forgetpasswordapi,
    mutationKey:['forgetpassword'],
        onSuccess:(data)=>{
          toast.success(data.message)
          issuccess(true)

        },
        onError:(data)=>{
                    toast.error(data.message)

        }
      
    })
  const {data:resetcodefuncdata , mutate:resetcodefunction} =  useMutation({
    mutationFn:resetcodefunc,
    mutationKey:['resetcodefunction'],
        onSuccess:(status)=>{
            setcodesuccess(true)
          toast.success(status.status)
                const sus =  status.status
                    console.log("sus:", sus);

        },
        onError:(status)=>{
                    toast.error("code is not true")
    console.log("msgresetcode:", status);

        }
      
    })
console.log(codesuccess);



  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-5">

      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center p-10 mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Forgot Password?
          </h1>

          <p className="text-sm text-gray-500 mt-3">
            Enter your email and well send you a reset code.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmitFUNC)}>

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <Input
                  {...field}
                  type="email"
                  placeholder="Email"
                  className="w-full px-8 py-4 rounded-lg font-medium text-black bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />

                {fieldState.error && (
                  <p className="text-red-500 text-xs mt-2">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />


          {/* Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-black text-white py-4 rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
          >
            Send Reset Code
          </button>

        </form>

        {/* Back */}
        <div className="text-center mt-6">
          <button
            type="button"
            className="text-sm text-gray-500 hover:text-black transition"
          >
            ← Back to Login
          </button>
        </div>
    
        <form className={success ?"mt-15" : "hidden"} onSubmit={resetHandleSubmit(handelresetcode)}>
          <h1 className="text-3xl m-5 text-center font-semibold tracking-tight text-gray-900">
            enter TheCode?
          </h1>
                      <Controller
            name="resetCode"
            control={resetControl}
            render={({ field, fieldState }) => (
                
              <div>
                <Input
                  {...field}
                  onChange={function (e) {
  field.onChange(e.target.value.replace(/\s/g, ""));
}}
                  type="text"
                  placeholder="Email"
                  className="w-full px-8 py-4 rounded-lg font-medium text-black bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />

                {fieldState.error && (
                  <p className="text-red-500 text-xs mt-2">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />


          {/* Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-black text-white py-4 rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
          >
            Send  Code
          </button>

        </form>


{/* // END */}
        <form className={codesuccess  ?" mt-15" : "hidden"} onSubmit={handelresetpassword(handelresetpasswordfunc)}>

          <Controller
            name="email"
            control={resetpassword}
            render={({ field, fieldState }) => (
                
              <div>
                <Input
                  {...field}

                  type="text"
                  placeholder="Email"
                  className="w-full px-8 py-4 rounded-lg font-medium text-black bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />

                {fieldState.error && (
                  <p className="text-red-500 text-xs mt-2">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="newPassword"
            control={resetpassword}
            render={({ field, fieldState }) => (
                
              <div>
                <Input
                  {...field}

                  type="password"
                  placeholder="Email"
                  className="w-full px-8 py-4 rounded-lg font-medium text-black bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />

                {fieldState.error && (
                  <p className="text-red-500 text-xs mt-2">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />


          {/* Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-black text-white py-4 rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
          >
            Send  Code
          </button>

        </form>

      </div>

    </div>
  );
}