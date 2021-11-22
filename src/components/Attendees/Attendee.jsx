import React from 'react'
import './Attendees_Styled.css'


function Attendee({link,left}) {
    return (
        <>
            <img style={{ position: 'absolute', left: `${left}` }} src={link} alt='Cannot find image' />
        </>
    )
}

export default Attendee
