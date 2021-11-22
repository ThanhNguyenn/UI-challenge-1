import React from 'react'

//importing style
import style from './Page_Styled.css'

//importing other components 
import Button from '../Button/Button'
import Attendees from '../Attendees/Attendees'
import Info from '../Info/Info'


function Page() {
    return (
        <div className='page page-border-radius'>
           <div className='page--container page-border-radius'>
               <Info />
               <Attendees />
               <Button />
           </div>
        </div>
    )
}

export default Page
