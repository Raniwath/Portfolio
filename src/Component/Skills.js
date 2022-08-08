import React from "react";
import 'antd/dist/antd.css'
import '../index.css'
import { Row, Col } from "antd";
import { DiHtml5, DiCss3, DiJavascript1, DiReact } from "react-icons/di";


export default function Skills() {
    return (
        <>
            <div className="skills_div">
                <h1> Skills </h1>
                <Row>

                    <Col className="skill_column_cls">
                        <h1> <DiHtml5 className="Scrolling_page_icon" style={{color:'orangered'}} /> </h1>
                        <h6> HTML5 </h6>
                    </Col>

                    <Col className="skill_column_cls">
                        <h1> <DiCss3 className="Scrolling_page_icon" style={{color:'rgb(30, 180, 221)'}} /> </h1>
                        <h6> CSS3 </h6>
                    </Col>

                    <Col className="skill_column_cls">
                        <h1> <DiJavascript1 className="Scrolling_page_icon" style={{color:'yellow'}} /> </h1>
                        <h6> JavaScript </h6>
                    </Col>

                    <Col className="skill_column_cls">
                        <h1> <DiReact className="Scrolling_page_icon" style={{color:'blue'}} /> </h1>
                        <h6> React JS </h6>
                    </Col>
                </Row>
            </div>
        </>
    )
}