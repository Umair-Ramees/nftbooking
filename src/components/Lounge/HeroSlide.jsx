import React from "react";

export default function HeroSlide() {
    return <>
        <section className="hero_section NFT_lounge">
            <div id="heroslider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="assets/images/lounge_slider_01.webp" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images/lounge_slider_01.webp" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images/lounge_slider_01.webp" alt="Third slide" />
                </div>
                </div>
                <a className="carousel-control-prev navigation__" href="#heroslider" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next navigation__" href="#heroslider" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>

                <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12 col-lg-6">
                        <h1 className="title pt-lg-5 pt-sm-3 mt-4"  data-aos="fade-up" data-aos-duration="1000">
                            Collect Unique NFT Travel Cards for Minting
                        </h1>
                        <p className="header_desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            NFT Lounge is a 5000 unique NFT Travel cards collection, granting real-life travel benefits and shares from the marketplace.
                        </p>
                        <p className="header_desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                            Join the future of Web3 Travel and be an early founder of NFTbooking
                        </p>
                        <div className="buttons">
                            <a href="#!" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450" className="Btn__" data-toggle="modal" data-target="#exampleModalCenter">Mint Now <img src="assets/images/arrow.png" className="hover_none" alt="" /><img src="assets/images/white_arrow.png" alt="" className="hover_block" /></a>
                            <a href="#!" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="Btn__">Benifits</a>
                        </div>

                            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content p-4">
                                    <div className="modal-header pb-0">
                                    <h5 className="modal-title mint_now_modal" id="exampleModalLongTitle">Make your Mint Now?</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div className="modal-body pt-0 pb-0">
                                        <p className="header_desc pt-0 mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                            NFT Lounge is a 5000 unique NFT Travel cards collection, granting real-life travel benefits and shares from the marketplace.
                                        </p>
                                    </div>
                                    <div className="modal-footer justify-content-center mt-4">
                                        <div className="buttons">
                                            <a href="#!"className="Btn__">Mint Now <img src="assets/images/arrow.png" className="hover_none" alt="" /><img src="assets/images/white_arrow.png" alt="" className="hover_block" /></a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
}