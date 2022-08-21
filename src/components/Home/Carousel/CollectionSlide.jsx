import React from "react"; 

export default function CollectionSlide({src}) {
    return <>
        <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1000">
            <div className="slides_box">
                <a href="#!">
                    <img src={src} className="w-100" alt="Tour Travelings California" />
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
    </>
}
