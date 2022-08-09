import React from "react";
import { Row, Col, Input, Button } from 'antd'
import 'antd/dist/antd.min.css'
import './index.css'

export default function Below_file() {

    const { TextArea } = Input
    return (
        <>
            <div className='below_container' id="below">
                <Row className='below_complete_row'>

                    <Col className="quickID_col" sm={12}>
                        <h1> Quick ID </h1>

                        <Row> <h3> Phone: 8411068827 </h3> </Row>
                        <Row> <h3> Email: komalwath301@gmail.com </h3> </Row>
                        <Row> <h3> Skype: Komal Wath </h3> </Row>
                    </Col>


                    <Col className="getInTouch_col" sm={12}>
                        <h1> Get In Touch </h1>

                        <Row className="below_name_email">
                            <Input placeholder='Name' />
                            <Input placeholder='Email' />
                        </Row>

                        <Row className='subject_style'>
                            <Input placeholder='Subject' />
                        </Row> &emsp;

                        <Row className="below_textarea">
                            <TextArea placeholder="Message" />
                        </Row> 

                        <Row className="below_button"> <Button> Submit </Button> </Row>
                    </Col>

                </Row>
            </div>
        </>
    )
}