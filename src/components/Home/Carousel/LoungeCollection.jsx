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

// const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
//   const { carouselState: { currentSlide } } = rest;
//   return (
//     <div className="carousel-button-group"> // remember to give it position:absolute
//       {/* <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
//       <ButtonTwo onClick={() => next()} />
//       <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
//     </div>
//   );
// };


export default function LoungeCollection() {
    const tours =[
        {src:"assets/images/Tour_Travelings_California.webp"},
        {src:"assets/images/Tour_Travelings_California_1.webp"},
        {src:"assets/images/Tour_Travelings_California_2.webp"},
    ]
    return <>
        <Carousel responsive={responsive}>
            {tours.map((tour) =>
                <LoungeSlide src={tour.src} />
            )}
        </Carousel>;
    </>
}


