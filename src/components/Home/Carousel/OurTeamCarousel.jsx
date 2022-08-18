
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide from "./TeamSlide";

const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 4000, min: 3000 },
  //   items: 5
  // },
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        // <div className="carousel-button-group">
        //     <div className="row">
        //         <div className="col-md-7 pr-lg-0">
        //             <h1 className="our_whitepapper_title" data-aos="fade-up" data-aos-duration="1000">
        //                 Our Team
        //             </h1>
        //             <p className="white_papper_dec" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        //                 We have Best Team for Working on NFT with Travelling you can contact with him thought social media also:
        //             </p>
        //         </div>
        //         <div className="col-md-5">
        //             <div className="team_navigaation">
        //                 <div className="swiper-button-prevteam"><i className="fa-solid fa-chevron-left" onClick={() => previous()}></i></div>
        //                 <div className="swiper-button-nexteam"><i className="fa-solid fa-chevron-right" onClick={() => next()}></i></div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
      <div className="carousel-button-group"> 
        <div className="swiper-button-prevteam"><i className="fa-solid fa-chevron-left" onClick={() => previous()}></i></div>
        <div className="swiper-button-nexteam"><i className="fa-solid fa-chevron-right" onClick={() => next()}></i></div>

        {/* <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <ButtonTwo onClick={() => next()} />
        <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
      </div>
    );
  };

export default function OurTeamCarousel() {
    const teams = [
        {name: "Danilo Mazza", role: "CEO", img: "assets/images/team/Danilo Mazza.jpg"},
        {name: "David Alba", role: "CTO", img: "assets/images/team/David Alba.jpg"},
        {name: "Aimine Ali Pacha", role: "COO", img: "assets/images/team/Aimine Ali Pacha.jpg"},
        {name: "Marcello Mazza", role: "Operations Manager", img: "assets/images/team/Marcello Mazza.jpg"},
        {name: "Fredrik Bergem", role: "Financial Advisor", img: "assets/images/team/Fredrik Bergem.jpg"},
        {name: "Alessio Giannetti", role: "Discord Admin", img: "assets/images/team/Alessio Giannetti.jpg"},
        {name: "Giuseppe", role: "Video Maker", img: "assets/images/team/Giuseppe.jpg"},
        {name: "Bamise Oluwaseun", role: "Social Media Manager", img: "assets/images/team/Bamise Oluwaseun.jpg"},
    ]
    return <>
        {/* <div className="row">
            <div className="col-md-7 pr-lg-0">
                <h1 className="our_whitepapper_title" data-aos="fade-up" data-aos-duration="1000">
                    Our Team
                </h1>
                <p className="white_papper_dec" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    We have Best Team for Working on NFT with Travelling you can contact with him thought social media also:
                </p>
            </div>
            <div className="col-md-5">
                <div className="team_navigaation">
                    <div className="swiper-button-prevteam"><i className="fa-solid fa-chevron-left"></i></div>
                    <div className="swiper-button-nexteam"><i className="fa-solid fa-chevron-right"></i></div>
                </div>
            </div>
        </div> */}
        <Carousel
            responsive={responsive}
            renderButtonGroupOutside={true} 
            customButtonGroup={<ButtonGroup />}
        >
            {/* <Slide img="assets/images/team/Team-01.webp" name="Danilo" role="CEO"/> */}
            {teams.map((team) =>
                <Slide key={team.name} img={team.img} name={team.name} role={team.role}/>
            )}
        </Carousel>
    </>
}
