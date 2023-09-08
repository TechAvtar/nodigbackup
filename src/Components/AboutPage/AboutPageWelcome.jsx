import React from 'react'
import './AboutPageWelcome.css'

const AboutPageWelcome = () => {
  return (
    <div>
        <div className="main-AboutPageWelcome" style={{marginTop:"5rem"}}>
            <div className="inside-AboutPageWelcome">
                <p className='head-AboutPageWelcome'>Welcome to <span style={{color:"#48B1A3"}}>NoDig.com</span></p>
                <div style={{width:"841px",paddingLeft:"25rem"}}>
                <p className="AboutPageWelcome-c1">
                Welcome to Nodig.com, the no1 online destination for homeowners in the United States seeking verified trenchless repair services. Our platform connects you with a curated selection of trusted and Nodig Verified contractors specializing in the latest trenchless technologies
                </p>
                <p className="AboutPageWelcome-c2">
                Say goodbye to the hassle of traditional repair methods and discover a more efficient, cost-effective, and environmentally-friendly approach to fixing your underground infrastructure.
                </p>
                </div>
                <div className="btn-AboutPageWelcome">
                    <p>About Us</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPageWelcome