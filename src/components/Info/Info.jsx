import React from 'react'
import style from './Info_Styled.css'
import { HiOutlineLocationMarker } from "react-icons/hi";


function Info() {
    return (
        <div className="info--container">
            <h5 className="info--navy-blue info--date">Wed, Nov 24th, 2021 ・ 6:00 CEST</h5>
            <h2 className="info--dark-blue">Sustainabiltiy in Product Design</h2>
            <h3 className="info--dark-blue info-align-location">
                <HiOutlineLocationMarker size="25px" color="#132152"/>
                <span>Oslo</span></h3>
        </div>
    )
}

export default Info
