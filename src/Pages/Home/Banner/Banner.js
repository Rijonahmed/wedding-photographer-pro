import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./BannerStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation, Parallax } from "swiper";

const Banner = () => {
    return (
        <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}

      parallax={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg h-auto"
        style={{
          "background-image":
            "url(https://magikkairosevents.files.wordpress.com/2015/11/featured.jpg)",
        }}
        data-swiper-parallax="-23%"
      ></div>


      


            <SwiperSlide >
              <div className="flex justify-around items-center">
                <div>
                  <div className="title text-red-600 font-bold" data-swiper-parallax="-300">
                   <p>kire</p>
                  </div>
                  <div className="subtitle" data-swiper-parallax="-200">
                    Subtitle
                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <p>
                      hello
                    </p>
                  </div>
                </div>
                <img className="max-w-xs max-h-max" src="https://servizine.com/wp-content/uploads/2021/03/wedding-photography-png-picture-799891-wedding-photography-png-wedding-photographer-png-1224_1032.png" alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="flex justify-around items-center">
                <div>
                  <div className="title text-red-600 font-bold" data-swiper-parallax="-300">
                   <p>kire</p>
                  </div>
                  <div className="subtitle" data-swiper-parallax="-200">
                    Subtitle
                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <p>
                      hello
                    </p>
                  </div>
                </div>
                <img className="max-w-xs" src="https://nebula.wsimg.com/59a198e9191491db1a4197b9abca7ccc?AccessKeyId=FC1F703DEF9C578B9342&disposition=0&alloworigin=1" alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="flex justify-around items-center">
                <div>
                  <div className="title text-red-600 font-bold" data-swiper-parallax="-300">
                   <p>kire</p>
                  </div>
                  <div className="subtitle" data-swiper-parallax="-200">
                    Subtitle
                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <p>
                      hello
                    </p>
                  </div>
                </div>
                <img className="max-w-xs" src="https://www.weddingphotographe.com/wp-content/uploads/2020/03/morocco-wedding-photographer.png" alt="" />
              </div>
            </SwiperSlide>

       







    </Swiper>
    );
};

export default Banner;