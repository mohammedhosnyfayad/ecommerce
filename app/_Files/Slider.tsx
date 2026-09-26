"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

type SlideType = {
 pagelist:string[]   
}

export default function Slider({pagelist}:SlideType) {
  return (
        <Swiper
        loop={true}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >


    {pagelist.map((src , index)=> <SwiperSlide key={index}>

               <Image
          src={src}
          alt="Hero"
          width={1920}
          height={700}
          className="w-full h-200 object-cover"
        />


      </SwiperSlide>)}
      
    </Swiper>

  )
}