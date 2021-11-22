import React from 'react'
import Attendee from './Attendee'
import './Attendees_Styled.css'


function Attendees() {
    const images = [
        {
            id: 1,
            link: "/images/image_1.png",
            left: "0px",
        }, 
        {
            id: 2, 
            link: "/images/image_2.png",
            left: "38px",
        }, 
        {
            id: 3, 
            link: "/images/image_3.png",
            left: "75px",
        }
    ]

    return (
        <div className="attendees--container">
            {images.map(image => <Attendee key={image.id} link={image.link} left={image.left}/>)}
            <p className="attendees-text">+23</p>
        </div>
    )
}

export default Attendees
