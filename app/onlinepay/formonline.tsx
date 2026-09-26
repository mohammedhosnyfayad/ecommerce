
"use client";

import { Controller, useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Cashpay } from "@/actions/paycash";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { onlinepay } from "@/actions/paymentonline";

export default function PayOnlinepage({ CartId }: { CartId: string }) {
      const rout = useRouter()





  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
        details: "",
        phone: "",
        city: "",
        postalCode: "",

    },
  });

async  function handelsbmiutfunconline(data: any)  {
    
          const dataonlinepay =  await  onlinepay(data,  CartId)
          console.log(dataonlinepay);
          
   if(dataonlinepay.status === "success"){
        // toast.success("done pay")
               window.location.href=dataonlinepay.session.url
      
   } else {
            // toast.success("error")

   }
    
  }

  return (

<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
  <div className="w-full max-w-2xl rounded-2xl border bg-white p-6 shadow-sm md:p-8">

    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5m-16.5 3.75h3m-3 3h5.25M6.75 5.25h10.5a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3Z"
            />
          </svg>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Online Payment
          </h1>

          <p className="text-sm text-gray-500">
            Secure checkout
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Enter your shipping information to continue with your online payment.
      </p>
    </div>

    <form
      onSubmit={handleSubmit(handelsbmiutfunconline)}
      className="space-y-5"
    >

      {/* Details */}
      <Controller
        name="details"
        control={control}
        render={({ field }) => (
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Address Details
            </label>

            <Input
              {...field}
              placeholder="Enter your full address"
            />
          </div>
        )}
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Phone
              </label>

              <Input
                {...field}
                type="tel"
                placeholder="01000000000"
              />
            </div>
          )}
        />

        {/* City */}
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <div className="space-y-2">
              <label className="text-sm font-medium">
                City
              </label>

              <Input
                {...field}
                placeholder="Cairo"
              />
            </div>
          )}
        />

      </div>

      {/* Postal Code */}
      <Controller
        name="postalCode"
        control={control}
        render={({ field }) => (
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Postal Code
            </label>

            <Input
              {...field}
              placeholder="12345"
            />
          </div>
        )}
      />

      <button
        type="submit"
        className="mt-4 h-11 w-full rounded-lg bg-green-600 font-semibold text-white transition hover:bg-green-700"
      >
        Continue to Online Payment
      </button>

    </form>
  </div>
</div>

  );
}

