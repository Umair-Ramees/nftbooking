import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LoungeSlide from "./LoungeSlide";

const responsive = {
        //   superLargeDesktop: {
        //     // the naming can be any, depends on you.
        //     breakpoint: { max: 4000, min: 3000 },
        //     items: 2
        //   },
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

const ButtonGroup = ({ next, previous}) => {
  return (
    <div className="carousel-button-group">
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
                <div className="swiper-button-prevour" onClick={() => previous()} ><i className="fa-solid fa-chevron-left"></i></div>
                <div className="swiper-button-nextour" onClick={() => next()} ><i className="fa-solid fa-chevron-right"></i></div>
            </div>
        </div>
      </div>
    </div>
  );
};


export default function LoungeCollection() {
    const tours =[
        {src:"assets/images/Tour_Travelings_California.webp"},
        {src:"assets/images/Tour_Travelings_California_1.webp"},
        {src:"assets/images/Tour_Travelings_California_2.webp"},
    ]
    return <>
        <Carousel             
          renderButtonGroupOutside={true} 
          customButtonGroup={<ButtonGroup />}
          responsive={responsive}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
          {tours.map((tour) =>
              <LoungeSlide src={tour.src} />
          )}
        </Carousel>;
    </>
}


