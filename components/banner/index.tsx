import React, { useRef, useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Banner1 from './banner1'
import { api } from '../../services/api'

const banner = [
  {id:1, image:"/images/banner2.png"},
  {id:2, image:"/images/banner2.png"},
  {id:3, image:"/images/banner2.png"},
]

export default function Banner(){
  // const [banner, setBanner] = useState([])

  // useState(async ()=> {
  //     api.get('/banners/get-banners').then(response => {
  //         setBanner(response.data);
  //     })

  // })

    return(
        <Style>
            <Swiper
                cssMode={true}
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
              {
                banner.map((item:any, index)=> {
                  return(
                    <SwiperSlide key={index}>
                      <Banner1 
                        background={item.image}                            
                      /> 
                    </SwiperSlide>
                        
                  )
                })
              }
                  
            </Swiper>
        </Style>
    )
}

const Style = styled.section`
  
  padding: 41px 15px 48px;

  .swiper { 
      max-width:1148px;
      width: 100%;
      height:280px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-button-next{
    background: var(--primary-color);
    color: #fff;
    width: 30px;
    height: 68px;
    border-radius: 0px 4px 4px 0px;
    right: 0;

    &:after{
      font-size: 10px;
    }

    &:hover{
      background: var(--hover-color);
    }
  }

  .swiper-button-prev{
    background: var(--primary-color);
    color: #fff;
    width: 30px;
    height: 68px;
    border-radius: 4px 0 0 4px;
    left: 0;

    &:after{
      font-size: 14px;
    }

    &:hover{
      background: var(--hover-color);
    }
  }

  .swiper-pagination-bullet{
    border: 2px solid var(--primary-color);
    background: transparent;
  }

  .swiper-pagination-bullet-active{
    background: var(--primary-color);
  }
  
  @media(max-width:890px){
    padding: 41px 0 48px;
    .swiper-button-prev, .swiper-button-next{
      display: none;
    }
  }
`