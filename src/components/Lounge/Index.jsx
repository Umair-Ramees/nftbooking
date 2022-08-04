import React from "react";
import HeroSlide from "./HeroSlide";
import Benifits from "./Benifits";
import LoungeRoad from "./LoungeRoad";
import ReleventCollection from "./ReleventCollection";
import Header from "./Header";
import Footer from "../Footer"

export default function Lounge(){
    return <>
        <div className="grid_bg position_y">
            <Header />
            <HeroSlide />
            <Benifits />
            <LoungeRoad />
            <ReleventCollection />
            <Footer />
        </div>
    </>
}