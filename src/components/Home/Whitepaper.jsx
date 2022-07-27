import React from "react";

export default function Whitepaper() {
    return <>
        <section className="our_white_papper">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 whitepapper_col">
                        <h1 className="our_whitepapper_title" data-aos="fade-up" data-aos-duration="1000">
                            Our Whitepaper
                        </h1>
                        <p className="white_papper_dec"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            Our goal is to create an open market through blockchain technology where accommodation providers directly meet guests. We believe blockchain marketplaces for accommodation services are the future, and we want to be one of the first providers of this possibility. Accommodation providers can increase coverage for their services and decrease prices for guests as redundant intermediaries are cut off.
                        </p>
                        <div className="buttons">
                            <a href="#!" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450" className="Btn__ white_papper_btn text-white">Download Whitepaper<img src="assets/images/white_arrow.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="our_ehiter_papper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                            <img src="assets/images/nft_img_02.webp" alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}