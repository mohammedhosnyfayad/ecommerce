
"use client";

import { Controller, useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Cashpay } from "@/actions/paycash";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ShippingAddress({CartId}) {
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

async  function handelsbmiutfunc(data)  {
    
          const dataCashpay =  await  Cashpay(data,  CartId)
   if(dataCashpay.status === "success"){
        toast.success("done pay")
                rout.push(`/`)

   } else {
            toast.success("error")

   }
    
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-2xl border bg-white p-6 shadow-sm md:p-8">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Shipping Address
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Enter your shipping information
          </p>
        </div>

        <form onSubmit={handleSubmit(handelsbmiutfunc)} className="space-y-5">

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
            className="mt-4 bg-black h-11 w-full"
          >
            Continue to Checkout
          </button>

        </form>
      </div>
    </div>
  );
}

