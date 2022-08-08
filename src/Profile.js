import React from "react";
import { Image } from "antd";
import 'antd/dist/antd.css'
import './index.css'
import linkedInPicKomal from './Image/linkedInPicKomal.jpg'

export default function Profile() {
    return (
        <>
            <div className="profile_div">
                <Image className="jpg_img"  src={ linkedInPicKomal }  preview={false} />
                <label className="label_name"> Komal Wath </label> <br />
                <label className="label_tag"> Your Friendly Neighbourhood Software Developer </label>
            </div>
        </>
    )
}