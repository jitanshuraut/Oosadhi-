import React, { useState, useRef } from 'react';
import style from "../style/blog.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, EffectFade, EffectCreative, Pagination, Navigation } from "swiper";
import { useEffect } from 'react';

function Blog() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [show, setshow] = useState(2)
  const data = [
    {
      time: " OSAMA BIN LADEN  6 AUG,2002",
      head: "lORENlORENlOREN",
      para: " Odio, voluptatum saepe magnam, natus totam soluta maxime ipsa, provident deserunt quae placeat aliquid ipsam cumque harum. Odio voluptate dolorem dolore nihil.",
      img: "blog.png"
    },
    {
      time: " OSAMA BIN LADEN  6 AUG,2002",
      head: "lORENlORENlOREN",
      para: " Odio, voluptatum saepe magnam, natus totam soluta maxime ipsa, provident deserunt quae placeat aliquid ipsam cumque harum. Odio voluptate dolorem dolore nihil.",
      img: "blog.png"
    },
    {
      time: " OSAMA BIN LADEN  6 AUG,2002",
      head: "lORENlORENlOREN",
      para: " Odio, voluptatum saepe magnam, natus totam soluta maxime ipsa, provident deserunt quae placeat aliquid ipsam cumque harum. Odio voluptate dolorem dolore nihil.",
      img: "blog.png"
    },
    {
      time: " OSAMA BIN LADEN  6 AUG,2002",
      head: "lORENlORENlOREN",
      para: " Odio, voluptatum saepe magnam, natus totam soluta maxime ipsa, provident deserunt quae placeat aliquid ipsam cumque harum. Odio voluptate dolorem dolore nihil.",
      img: "blog.png"
    },
    {
      time: " OSAMA BIN LADEN  6 AUG,2002",
      head: "lORENlORENlOREN",
      para: " Odio, voluptatum saepe magnam, natus totam soluta maxime ipsa, provident deserunt quae placeat aliquid ipsam cumque harum. Odio voluptate dolorem dolore nihil.",
      img: "blog.png"
    },
  ]
  useEffect(() => {
    if (window.innerWidth < 425) {
      setshow(1)
    }

  }, [])
  return (

    <>
      <Swiper
        speed={1000}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        slidesPerView={show}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={style.mySwiper}
      >

        {data.map((ele) => {
          return (<SwiperSlide>
            <div className={style.blog_container}>
              <img src={ele.img} alt="" className={style.blog_box_img} />
              <div className={style.blog_inbox}>
                <h3 className={style.blog_inbox_h3}>
                  {ele.time}
                </h3>
                <h1 className={style.blog_inbox_h1}>
                  {ele.head}
                </h1>
                <p className={style.bolg_inbox_p}>
                  {ele.para}
                </p>
              </div>
            </div>
          </SwiperSlide>)
        })}


        <div className={style.blog_buttons}>
          <div ref={prevRef} className={style.blog_button_in}><BsArrowLeft /></div>
          <div ref={nextRef} className={style.blog_button_in}><BsArrowRight /></div>
        </div>
      </Swiper>
    </>
  )
}

export default Blog