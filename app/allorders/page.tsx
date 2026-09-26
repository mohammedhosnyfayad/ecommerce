"use client"
import { gettokendata } from "@/apis/fungettoken/filetoken"
import { useQuery } from '@tanstack/react-query';

export default function getorders() {
    async function getordersfunct(){
      const token = await gettokendata();
    
      if (!token) {
        throw new Error("not found");
      }
    
      try {
        const response = await fetch('/api/allorders', {
          headers: {
            "Content-Type": "application/json"
          }
        });
    
        if (!response.ok) {
          throw new Error(response.statusText);
        }
    
        const playod = await response.json();
    
        console.log("playod", playod);
    
        return playod;
    
      } catch (error) {
        throw new Error("error wsh");
      }
    }


    const datashow = useQuery({
        queryFn:getordersfunct,
            queryKey: ["getorders"],

    })

    console.log(datashow.data);
    
    
  return (

<div className="min-h-screen bg-gray-50 px-4 py-10">
  <div className="mx-auto max-w-6xl">

    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        My Orders
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        Track and manage all your orders
      </p>
    </div>

    <div className="space-y-5">

      {datashow?.data?.map(function (order: any) {

        return (
          <div
            key={order._id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-bold text-gray-900">
                    Order #{order.id}
                  </h2>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {order.isPaid ? "Paid" : "Pending"}
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="text-xs text-gray-500">
                  Total Amount
                </p>

                <p className="mt-1 text-xl font-bold text-gray-900">
                  {order.totalOrderPrice} EGP
                </p>
              </div>

            </div>

            <div className="my-5 h-px bg-gray-100" />

            <div className="space-y-4">

              {order.cartItems.map(function (item: any) {

                return (
                  <div
                    key={item._id}
                    className="flex items-center gap-4"
                  >

                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src={item.product.imageCover}
                        alt={item.product.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {item.product.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Quantity: {item.count}
                      </p>
                    </div>

                    <p className="font-medium text-gray-900">
                      {item.price * item.count} EGP
                    </p>

                  </div>
                );
              })}

            </div>

            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">

              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">
                  Payment:
                </span>{" "}
                {order.paymentMethodType === "cash"
                  ? "Cash on Delivery"
                  : "Online Payment"}
              </p>


            </div>

          </div>
        );

      })}

    </div>

  </div>
</div>
  )
}
