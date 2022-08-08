import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
    return (
        <>
            <nav>

                {/* 1st my name */}
                <div className="navbar_name_div">
                    <h2>
                        <span>K</span>omal
                        <span>W</span>ath
                    </h2>
                </div>


                {/* 2nd menu part */}
                <div className="navbar_menu_part">
                    <Link className="navbar_link" to="#scroll" smooth > About Me </Link>

                    <Link className="navbar_link" to="#portfolio" smooth > Portfolio </Link>

                    <Link className="navbar_link" to="#below" smooth > Contact </Link>
                </div>

            </nav>
        </>
    )
}