import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    <div className="carousel-button-group"> // remember to give it position:absolute
      {/* <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <ButtonTwo onClick={() => next()} />
      <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
    </div>
  );
};


export default function OurTeamCarousel() {
    return <>
        <div className="row">
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
        </div>
        <Carousel customButtonGroup={<ButtonGroup />} responsive={responsive}>
          <div className="swiper-slide">
              <div className="Team_box">
                  <img src="assets/images/team/Team-01.webp" className="w-100" alt="" />
                  <h3 className="team_title">Jorge Doe</h3>
                  <p className="team_desination">Product Manager</p>
                  <ul className="footer_ul team_social">
                      <li><a href="#!"><i className="fa-brands fa-linkedin"></i></a></li>
                      <li><a href="#!"><i className="fa-brands fa-twitter-square"></i></a></li>
                      <li><a href="#!"><i className="fa-brands fa-facebook-square"></i></a></li>
                  </ul>
              </div>
          </div>
          <div className="swiper-slide">
              <div className="Team_box">
                  <img src="assets/images/team/Team-01.webp" className="w-100" alt="" />
                  <h3 className="team_title">Jorge Doe</h3>
                  <p className="team_desination">Product Manager</p>
                  <ul className="footer_ul team_social">
                      <li><a href="#!"><i className="fa-brands fa-linkedin"></i></a></li>
                      <li><a href="#!"><i className="fa-brands fa-twitter-square"></i></a></li>
                      <li><a href="#!"><i className="fa-brands fa-facebook-square"></i></a></li>
                  </ul>
              </div>
          </div>
          <div className="swiper-slide">
              <div className="Team_box">
                  <img src="assets/images/team/Team-02.webp" className="w-100" alt="" />
                  <h3 className="team_title">Jorge Doe</h3>
                  <p className="team_desination">Product Manager</p>
                  <ul className="footer_ul team_social">
                      <li><a href="#!"><i className="fa-brands fa-linkedin"></i></a></li>
                      <li><a href="#!"><i className="fa-brands fa-twitter-square"></i></a></li>
                      <li><a href="#!"><i className="fa-brands fa-facebook-square"></i></a></li>
                  </ul>
              </div>
          </div>
          <div className="swiper-slide">
              <div className="Team_box">
                  <img src="assets/images/team/Team-03.webp" className="w-100" alt="" />
                  <h3 className="team_title">Jorge Doe</h3>
                  <p className="team_desination">Product Manager</p>
                  <ul className="footer_ul team_social">
                      <li><a href="#!"><i className="fa-brands fa-linkedin"></i></a></li>
                      <li><a href="#!"><i className="fa-brands fa-twitter-square"></i></a></li>
                      <li><a href="#!"><i className="fa-brands fa-facebook-square"></i></a></li>
                  </ul>
              </div>
          </div>
          <div className="swiper-slide">
              <div className="Team_box">
                  <img src="assets/images/team/Team-04.webp" className="w-100" alt="" />
                  <h3 className="team_title">Jorge Doe</h3>
                  <p className="team_desination">Product Manager</p>
                  <ul className="footer_ul team_social">
                      <li><a href="#!"><i className="fa-brands fa-linkedin"></i></a></li>
                      <li><a href="#!"><i className="fa-brands fa-twitter-square"></i></a></li>
                      <li><a href="#!"><i className="fa-brands fa-facebook-square"></i></a></li>
                  </ul>
              </div>
          </div>
          <div className="swiper-slide">
              <div className="Team_box">
                  <img src="assets/images/team/Team-05.webp" className="w-100" alt="" />
                  <h3 className="team_title">Jorge Doe</h3>
                  <p className="team_desination">Product Manager</p>
                  <ul className="footer_ul team_social">
                      <li><a href="#!"><i className="fa-brands fa-linkedin"></i></a></li>
                      <li><a href="#!"><i className="fa-brands fa-twitter-square"></i></a></li>
                      <li><a href="#!"><i className="fa-brands fa-facebook-square"></i></a></li>
                  </ul>
              </div>
          </div>
        </Carousel>;
    </>
}
