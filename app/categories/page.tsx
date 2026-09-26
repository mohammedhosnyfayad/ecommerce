"use client";

import { useQuery } from "@tanstack/react-query";

export default function Categories() {
  async function getCategories() {
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/categories");

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  }

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="container mx-auto m-10 px-4">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {data?.data?.map(function (category: any) {
          return (
            <div
              key={category._id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-40 items-center justify-center bg-gray-50 p-6">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="border-t border-gray-100 px-4 py-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-green-600">
                  {category.name}
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  {category.slug}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}