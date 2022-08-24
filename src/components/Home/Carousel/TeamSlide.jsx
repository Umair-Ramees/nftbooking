import React from "react";
// import userEvent from "@testing-library/user-event";

export default function Slide({img, name, role}) {
    return <>
        <div className="swiper-slide">
            <div className="Team_box">
                <img src={img} className="w-100" alt="" />
                <h3 className="team_title">{name}</h3>
                <h3 className="team_desination"> {role} </h3>
                <ul className="footer_ul team_social">
                    <li><a href="#!"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="#!"><i className="fa-brands fa-twitter-square"></i></a></li>
                    <li><a href="#!"><i className="fa-brands fa-facebook-square"></i></a></li>
                </ul>
            </div>
        </div>
    </>
}