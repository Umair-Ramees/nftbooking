import React from "react";

export default function Hero() {
    return <>
        <section className="NFT_booking_hero">
          <div className="img">
              <div id="carouselExampleControls" className="carousel slide pointer-event" data-ride="carousel" data-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-step="1">
                      <img className="d-block w-100" src="assets/images/NFT_img.webp" alt="First slide" />
                    </div>
                    <div className="carousel-item" data-step="2">
                      <img className="d-block w-100" src="assets/images/NFT_img.webp" alt="Second slide" />
                    </div>
                    <div className="carousel-item" data-step="3">
                      <img className="d-block w-100" src="assets/images/NFT_img.webp" alt="Third slide" />
                    </div>
                    <div className="carousel-item" data-step="4">
                      <img className="d-block w-100" src="assets/images/NFT_img.webp" alt="Forth slide" />
                    </div>
                  </div>
                
                </div>
              {/* <!-- <img src="assets/images/NFT_img.webp" alt="" className="w-100"> --> */}
          </div>
          <div className="container padding-170">
              <div className="row mobile_row">
                  <div className="col-md-6">
                      <h1 className="title_">Exclusive NFTBOOKING ROADMAP</h1>
              <div className="progress-part ">
                <div className="progress my-2"></div>
                <div className="progress-bar progress-bar-success progress-bar-style" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="5"></div>
              </div>
                  </div>
        
                  <div className="col-md-6 d-flex justify-content-end align-items-end">
                      <div className="slider_navigation">
                          <a className="carousel-control-prev_0 pr-5" href="#carouselExampleControls" role="button" data-slide="prev">
                              <img src="assets/images/left_svg.svg" alt="" />
                              <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next_0" href="#carouselExampleControls" role="button" data-slide="next">
                            <img src="assets/images/right_svg.svg" alt="" />
                              <span className="sr-only">Next</span>
                            </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
}