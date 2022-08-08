import { Row, Col, Image } from 'antd'
import React from 'react'
import 'antd/dist/antd.css'
import './index.css'

export default function Portfolio() {
    return (
        <>
            <div className='port_container' id='portfolio'>

                <Row className='port_h1'>
                    <h1> Portfolio </h1>
                </Row>

                <Row className='port_main_row'>

                    <Col className='port_col_img_1'>
                        <Image width={350} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWxphg3x0tGuY88BH64yNQ0ndDrBvJfOJsw&usqp=CAU' preview={false} />
                        <h2>GetSetDine</h2>
                    </Col>

                    <Col className='port_col_img_2'>
                        <Image width={350} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1oibrvm4poYyy1AXciWBy6zRm_0dUk9zFA&usqp=CAU' preview={false} />
                        <h2>Pizzeria</h2>
                    </Col>

                    <Col className='port_col_img_3'>
                        <Image width={350} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm31mkbF--Tk1jErfzy06nW5RL2fWSvzuIBA&usqp=CAU' preview={false} />
                        <h2>Fitness Life</h2>
                    </Col>
                </Row>
            </div>
        </>
    )
} 