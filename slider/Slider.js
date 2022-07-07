import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import style from "../style/slider.module.css"
import { Pagination, Autoplay } from "swiper";


function Slider() {
  const data_banner = [
    {
      img: "download.jfif"
    },
    {
      img: "download.jfif"
    },
    {
      img: "download.jfif"
    },
    {
      img: "download.jfif"
    },
    {
      img: "download.jfif"
    },
    {
      img: "download.jfif"
    },
  ]
  return (
    <>
      <div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className={style.mySwiper}
        >
          {
            data_banner.map((ele) => {
              return (<SwiperSlide
                className={style.slider_box}>
                <img src={ele.img} alt="" className={style.slider_img} />
              </SwiperSlide>)
            })
          }


        </Swiper>
      </div>
    </>
  )
}

export default Slider