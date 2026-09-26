"use client"
import { gettokendata } from "@/apis/fungettoken/filetoken"
import { WishlistResponse } from "@/app/typs/wshlist";
import { useMutation, useQuery , useQueryClient  } from "@tanstack/react-query"
import { clearwhs } from "./Clearapiwhs";
import { toast } from 'react-toastify';
import Addtocart from "@/app/_Files/Addtocart";

export default function Wishlist() {
        const query = useQueryClient()

async function callapiwsh(): Promise<WishlistResponse> {
  const token = await gettokendata();

  if (!token) {
    throw new Error("not found");
  }

  try {
    const response = await fetch('/api/whilisthandler', {
      headers: {
        token: token,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const playod: WishlistResponse = await response.json();

    console.log("playod", playod);

    return playod;

  } catch (error) {
    throw new Error("error wsh");
  }
}

// clear

  async function handelclear(productId:string){
       const datatop =   mutate(productId)
    console.log(datatop);


    }


const {data , mutate} = useMutation({
  mutationFn:clearwhs,
      onSuccess: (data) => {
      toast.success(data.message);
      console.log("data", data.data);
      query.invalidateQueries({queryKey:['getwsh']})
    },

    onError: (error) => {
      toast.error(error.message);
    },

})


  const datada = useQuery<WishlistResponse>({
    queryKey: ['getwsh'],
    queryFn: callapiwsh
  })
  console.log("data" , datada.data);
  
  
  return (

    
    <main className="min-h-screen bg-gray-50 px-4 py-10 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            My Wishlist
          </h1>

          <p className="mt-2 text-gray-500">
            Save your favorite products and find them easily later.
          </p>
        </div>

        {/* Wishlist Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

          {/* Table Header */}
          <div className="hidden grid-cols-12 items-center border-b bg-gray-50 px-6 py-4 md:grid">
            <div className="col-span-5 text-sm font-semibold text-gray-500">
              Product
            </div>

            <div className="col-span-2 text-center text-sm font-semibold text-gray-500">
              Price
            </div>

            <div className="col-span-3 text-center text-sm font-semibold text-gray-500">
              Stock Status
            </div>

            <div className="col-span-2 text-center text-sm font-semibold text-gray-500">
              Actions
            </div>
          </div>
    {datada.data?.data.map((wsh)=>           <div key={wsh._id} className="grid grid-cols-1 gap-5 border-b p-6 md:grid-cols-12 md:items-center md:gap-4">

            <div className="col-span-5 flex items-center gap-5">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={wsh.imageCover}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  {wsh.title}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                {wsh.description}
                </p>
              </div>
            </div>

            <div className="col-span-2 text-center font-semibold text-gray-900">
              {wsh.price}
            </div>

            <div className="col-span-3 text-center">
              <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600">
                In Stock
              </span>
            </div>

            <div className="col-span-2 flex items-center justify-center gap-3">
              <Addtocart productId={ wsh._id} child={
<>
              <button className="rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
                Add to Cart
              </button>


</>


              } cls={"col-span-2 flex items-center justify-center gap-3"}/>

              <button onClick={()=>handelclear(wsh._id)} className="rounded-xl border border-gray-200 px-3 py-2.5 text-gray-500 transition hover:border-red-200 hover:text-red-500">
                ✕
              </button>
            </div>
          </div>
)}
          {/* Product 1 */}


        </div>
      </div>
    </main>
  );
}