import React from "react";
import 'antd/dist/antd.css'
import '../index.css'
import { Col, Row, Image } from "antd";


export default function Hobbies_Intrests() {
    return (
        <>
            <div className="hobby_div">
                <h1> Hobbies & Intrests </h1>

                <Row>

                    <Col className="hobbies_column">
                        <Image width={150} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fmJvKB2ycXBOUTPxuaIaNSiCo5WB6wH1sQ&usqp=CAU' preview={false} />
                        <h3> Dancing </h3>
                    </Col>

                    <Col className="hobbies_column">
                        <Image width={150} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrVsbqx_MX-aXhwpjXR89GqYhlwnYsqHegXA&usqp=CAU" preview={false} />
                        <h3> Listning Music </h3>
                    </Col>

                    <Col className="hobbies_column" >
                        <Image width={150} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlElUS3OS885DKL3s-g36KqqqKBvF3KZkpIQ&usqp=CAU" preview={false} />
                        <h3> Gymming </h3>
                    </Col>

                    <Col className="hobbies_column">
                        <Image width={150} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61Ka0M4UL5hDgMj8ccZp7vAGa5fgz1TKB6A&usqp=CAU" preview={false} />
                        <h3> Explor New Places </h3>
                    </Col>

                </Row>

            </div>
        </>
    )
}