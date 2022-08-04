import React from "react";
import LoungeCollection from "../Home/Carousel/LoungeCollection";

export default function ReleventCollection() {
    return <>
        <section className="Our_Best_Relevent">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 pr-lg-0">
                        <h1 className="our_best_title"data-aos="fade-up" data-aos-duration="1000">
                            Our Best NFT Collections
                        </h1>
                        <p className="our_best_desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                        </p>
                    </div>
                    <div className="col-md-2">                
                        <div className="our_navigaation">
                            <div className="swiper-button-prevour"><i className="fa-solid fa-chevron-left"></i></div>
                            <div className="swiper-button-nextour"><i className="fa-solid fa-chevron-right"></i></div>
                        </div>
                    </div>
                </div>
                <LoungeCollection />
                {/* <div className="swiper ourBestswiper">
                
                    <div className="swiper-wrapper">
                    
                    </div>
                    
                </div> */}
            </div>
        </section>
    </>
}