import React from "react";
import countryCSS from './../Countries/Country.module.css'

import Countryimg1  from './../../assets/Country1.jpg'
import Countryimg2  from './../../assets/Country2.jpg'
import Countryimg3  from './../../assets/Country3.jpg'
import Countryimg4  from './../../assets/Country4.jpg'
import Countryimg5  from './../../assets/Country5.jpg'
import {Splide , SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

function Country () {
    return (
        <div className={countryCSS.country_container}>
            <Splide
                options={
                    {
                        type: 'loop',
                        perPage:5,
                        focus:'center',
                        pagination:false ,
                        arrows:false,
                        drag:'free',
                        autoScroll:{
                            speed: 1,
                        },
                        breakpoints:{
                            1024:{
                                perPage:4
                            },
                            900:{
                                perPage:3
                            },
                            768:{
                                perPage:2
                            },
                            500:{
                                perPage:1
                            }
                        }
                    }

                }
                extensions={{AutoScroll}}
            >
                <SplideSlide>
                    <div className={countryCSS.country_card}>
                        <img src={Countryimg1} alt="country-img" />
                        <p>Europe <span>9 Tour</span></p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={countryCSS.country_card}>
                        <img src={Countryimg2} alt="country-img" />
                        <p>Asia <span>9 Tour</span></p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={countryCSS.country_card}>
                        <img src={Countryimg3} alt="country-img" />
                        <p>Europe <span>9 Tour</span></p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={countryCSS.country_card}>
                        <img src={Countryimg4} alt="country-img" />
                        <p>Argentina <span>4 Tour</span></p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={countryCSS.country_card}>
                        <img src={Countryimg5} alt="country-img" />
                        <p>Africa <span>5 Tour</span></p>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Country