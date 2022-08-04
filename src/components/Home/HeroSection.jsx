import React from "react";

export default function HeroSection() {
    return <>
        <section className="hero_section nft_booking_hero">
            <img src="assets/images/simple_banner.webp" alt="" className="w-100 mobile_img_banner" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12 col-lg-6">
                        <div className=" widht_90">
                        <a href="#!" className="smart_booking"><i className="fa-solid fa-circle"></i><span>Smart Booking</span></a>
                        <h1 className="title text_color mt-4"  data-aos="fade-up" data-aos-duration="1000">
                            The easiest way to find your travel services from all chains
                        </h1>
                        <p className="header_desc text_color" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            NFTBooking introduces a new way of booking travel services with functionalities that never occurred in the travel industry, using non-fungible tokens (NFTs) to generate, book and trade travel services , hotel rooms, flights ,activities and events tickets.
                        </p>

                        <div className="tour_liser">
                            <div className="row">
                                <div className="col-4 col-md-4 col-sm-4 col-lg-4 col-xl-4" data-aos="fade-up" data-aos-duration="1000">
                                    <h3 className="tour_slider_title"><span className="counting" data-count="200">200</span>+</h3>
                                    <p className="tour_slide_desc"> Tours</p>
                                </div>
                                <div className="col-4 col-md-4 col-sm-4 col-lg-4 col-xl-4"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                    <h3 className="tour_slider_title"><span className="counting" data-count="20">20</span>k</h3>
                                    <p className="tour_slide_desc"> Bidings Listing</p>
                                </div>

                                <div className="col-4 col-md-4 col-sm-4 col-lg-4 col-xl-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
                                    <h3 className="tour_slider_title"><span className="counting" data-count="1000">1000</span>+</h3>
                                    <p className="tour_slide_desc">Growing Artists</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* <!-- <div className="col-md-12 col-sm-12 col-12 col-lg-5 ml-auto margin_mobile"></div> --> */}
                </div>
            </div>
        </section>
    </>
}