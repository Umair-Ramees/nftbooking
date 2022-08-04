import React from "react";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Header from "./Header";
import Footer from "../Footer";

export default function Road() {
    return <>
        <div className="grid_bg position_y">
            <Header />
            <Hero />
            <Roadmap />
            <Footer />
        </div>
    </>
}