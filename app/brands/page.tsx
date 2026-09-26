import Image from "next/image";
import Link from "next/link";

export default async function Brands() {
  const response = await fetch("http://localhost:3000/api/brands", {
    cache: "no-store",
  });

  const data = await response.json();
console.log("data:", data.data);

  return (
<div className="container mx-auto m-10 px-4">
  <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
    {data?.data?.map(function (brand: any) {
      return (
        <div
          key={brand._id}
          className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex h-40 items-center justify-center bg-gray-50 p-6">
            <img
              src={brand.image}
              alt={brand.name}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="border-t border-gray-100 px-4 py-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-green-600">
              {brand.name}
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              {brand.slug}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>  );
}