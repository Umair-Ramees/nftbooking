import React from "react"

export default function Header () {
    return <>
        <section className="newslatter">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="newlatter_title" data-aos="fade-up" data-aos-duration="1000">Prepare yourself and let's explore the beauty of the world with NFT</h1>
                        <p className="news_desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Join our newsletter and get coupons up to 20%</p>
                        <form action="" className="newsletter_form" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                            <input type="text" placeholder="Enter your email" className="form-control news_inputs" />
                            <a href="#!" className="newsletter_btn">Join our newsletter</a>
                        </form>
                    </div> 
                </div>
            </div>
        </section>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="assets/images/Logo.png" alt="logo" data-aos="fade-up" data-aos-duration="1000" />
                        <p className="footer_desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">We always provide the best NFT service’s for our users</p>
                        <ul className="footer_ul" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
                            <li><a href="#!"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="#!"><i className="fa-brands fa-twitter-square"></i></a></li>
                            <li><a href="#!"><i className="fa-brands fa-facebook-square"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6 col-lg-3">
                        <h3 className="footer_sun_title" data-aos="fade-up" data-aos-duration="1000">Products</h3>
                        <ul className="footer_nav">
                            <li><a href="#!" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Whitepaper</a></li>
                            <li><a href="#!" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Roadmap</a></li>
                            <li><a href="#!" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">NFT Launge</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6 col-lg-3">
                        <h3 className="footer_sun_title" data-aos="fade-up" data-aos-duration="1000">About Us</h3>
                        <ul className="footer_nav">
                            <li><a href="#!" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Team</a></li>
                            <li><a href="#!"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Jobs</a></li>
                            <li><a href="#!"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">Connect Waller</a></li>
                            <li><a href="#!">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row pt-lg-5 pt-sm-3">
                    <div className="col-md-12 text-center">
                        <span className="copyright_desc">©2022 NFT BOOKING. All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    </>
}