import React from 'react'
import style from "../style/service.module.css"
function Services() {
   const data = [
      {
         para: "I need you to hold on Heaven is a place not too far away We all know I should be the one To say we all make mistakes we all make mistakes",
         img: "pro.png",
         titel: "Ayurveda Doctors",
         background:"bg.png"

      },
      {
         para: "I need you to hold on Heaven is a place not too far away We all know I should be the one To say we all make mistakes we all make mistakes",
         img: "pro.png",
         titel: "HomeoPathy Doctors",
         background:"bg.png"
      },
      {
         para: "I need you to hold on Heaven is a place not too far away We all know I should be the one To say we all make mistakes we all make mistakes",
         img: "pro.png",
         titel: "Yoga Trainers",
         background:"bg.png"
      },
      {
         para: "I need you to hold on Heaven is a place not too far away We all know I should be the one To say we all make mistakes we all make mistakes",
         img: "pro.png",
         titel: "Diet Planners",
         background:"bg.png"
      }
   ]

   return (
      <>
         <div style={{ 'backgroundColor': "#F8F4F3", "padding": "10px 0px 20px 00px" }}>
            <h2 className={style.service_FEATURES}>BEST FEATURES</h2>
            <h1 className={style.service_head}>Services</h1>
            <div className={style.service_container}>

               {
                  data.map((ele) => {
                     return (<div className={style.service_box} style={{ "backgroundImage": `url(${ele.background})` }}>
                        <img src={ele.img} alt="" className={style.service_box_img} />
                        <h2 className={style.service_box_head}>{ele.titel}</h2>
                        <p className={style.service_box_p}>{ele.para}
                        </p>
                        <button className={style.service_btn}>Read more</button>
                     </div>)
                  })
               }
            </div>
         </div>
      </>
   )
}


export default Services