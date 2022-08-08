import React from "react";
import { Carousel } from "antd";

import AboutMe from "./Component/AboutMe";
import Experience from "./Component/Experience";
import Skills from "./Component/Skills";
import Hobbies_Intrests from "./Component/Hobbies_Intrests";


export default function Scrolling_page() {
    return (
        <>
            <div className="scrolling_page_div" id="scroll">
                <Carousel autoplay effect="fade" className="carousel">

                    <AboutMe />
                    <Experience />
                    <Skills />
                    <Hobbies_Intrests />

                </Carousel>
            </div>
        </>
    )
} 