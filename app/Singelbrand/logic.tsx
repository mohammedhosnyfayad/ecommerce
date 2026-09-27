"use client";

import React, { useEffect, useState } from "react";

type Brand = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export default function Logic({ id }: { id: string }) {
  const [brand, setBrand] = useState<Brand | null>(null);

  useEffect(function () {
    async function getdata() {
      const response = await fetch(`/api/getsingelbrand/${id}`);

      const data = await response.json();

      console.log("datanow:", data.data);

      setBrand(data.data);
    }

    getdata();
  }, [id]);

  if (!brand) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-green-600"></div>
          <p className="text-gray-500">Loading brand...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Brand Card */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

          {/* Top Section */}
          <div className="relative flex min-h-[320px] items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 p-10">
            <div className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 shadow-sm">
              Brand
            </div>

            <img
              src={brand.image}
              alt={brand.name}
              className="max-h-52 max-w-[80%] object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Brand Info */}
          <div className="border-t border-gray-100 p-6 sm:p-10">

            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {brand.name}
              </h1>

              <p className="mt-2 text-gray-500">
                {brand.slug}
              </p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Brand ID
                </p>

                <p className="break-all text-sm font-medium text-gray-700">
                  {brand._id}
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Slug
                </p>

                <p className="text-sm font-medium text-gray-700">
                  {brand.slug}
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Created At
                </p>

                <p className="text-sm font-medium text-gray-700">
                  {new Date(brand.createdAt).toLocaleDateString("en-US")}
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Last Updated
                </p>

                <p className="text-sm font-medium text-gray-700">
                  {new Date(brand.updatedAt).toLocaleDateString("en-US")}
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}