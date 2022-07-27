import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
        //   superLargeDesktop: {
        //     // the naming can be any, depends on you.
        //     breakpoint: { max: 4000, min: 3000 },
        //     items: 2
        //   },
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group"> // remember to give it position:absolute
      {/* <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <ButtonTwo onClick={() => next()} />
      <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
    </div>
  );
};


export default function Collection() {
    return <>
        <Carousel customButtonGroup={<ButtonGroup />} responsive={responsive}>
        <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1000">
            <div className="slides_box">
                <a href="#!">
                    <img src="assets/images/Our_Best_NFT_03.webp" className="w-100" alt="Tour Travelings California 3" />
                </a>
                <div className="content_box">   
                    <h3 className="slide_box_title">
                        Tour Travelings California
                    </h3>
                    <ul className="slide_ul">
                        <li>
                            <span>Current Bid</span>
                            <h4>3ETH ($14,147)</h4>
                        </li>
                        <li>
                            <span>Time Left</span>
                            <h4>8H 30M 21S</h4>
                        </li>
                    </ul>
                    <a href="#!" className="mint_now">Mint Now</a>
                </div>
            </div>
        </div>
        <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div className="slides_box">
                <a href="#!">
                    <img src="assets/images/Our_best_NFT_02.webp" alt="Tour Travelings California 1" className="w-100" />
                </a>
                <div className="content_box">   
                    <h3 className="slide_box_title">
                        Tour Travelings California
                    </h3>
                    <ul className="slide_ul">
                        <li>
                            <span>Current Bid</span>
                            <h4>3ETH ($14,147)</h4>
                        </li>
                        <li>
                            <span>Time Left</span>
                            <h4>8H 30M 21S</h4>
                        </li>
                    </ul>
                    <a href="#!" className="mint_now">Mint Now</a>
                </div>
            </div>
        </div>
        <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div className="slides_box">
                <a href="#!">
                    <img src="assets/images/Our_Best-NFT_01.webp" alt="Tour Travelings California 1" className="w-100" />
                </a>
                <div className="content_box">   
                    <h3 className="slide_box_title">
                        Tour Travelings California
                    </h3>
                    <ul className="slide_ul">
                        <li>
                            <span>Current Bid</span>
                            <h4>3ETH ($14,147)</h4>
                        </li>
                        <li>
                            <span>Time Left</span>
                            <h4>8H 30M 21S</h4>
                        </li>
                    </ul>
                    <a href="#!" className="mint_now">Mint Now</a>
                </div>
            </div>
        </div>
        </Carousel>;
    </>
}

