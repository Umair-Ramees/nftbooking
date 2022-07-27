import React from "react";

import HeroSection from "./HeroSection";
import OurTeam from "./OurTeam";
import ReleventCollection from "./ReleventCollection";
import Whitepaper from "./Whitepaper";
import Header from "./Header";
import Footer from "../Footer";
// import { Helmet } from "react-helmet";

export default function Home() {
    return <>
        <Header />
        <HeroSection />
        <Whitepaper />
        <OurTeam />
        <ReleventCollection />
        <Footer />
    </>
}