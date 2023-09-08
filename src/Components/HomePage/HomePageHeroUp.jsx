import React from 'react'
import './HomePageHeroUp.css'

const HomePageHeroUp = () => {
  return (
    <div>
        <div className="main-HomePageHeroUp">
            <div className="inside-main-HomePageHeroUp">
        <div className="HomePageHeroUp-left">
            <p>Grow <span style={{color:"#27ADE2"}}>your</span> business</p>
            <div className='HomePageHeroUp-left-btn'>
                <p>Text Goes Here</p>
            </div>

        </div>
        <div className="HomePageHeroUp-mid">
            <div className="img-HomePageHeroUp-mid">
                <img src="Verified Badge.png" alt="" />
            </div>

        </div>
        <div className="HomePageHeroUp-right">
            <p className='HomePageHeroUp-right-p1'>Increase your visibility and get more leads.</p>
            <p className="HomePageHeroUp-right-p2">NoDig.com is the world’s largest and most comprehensive Sewer & Drain directory.</p>

        </div>
        </div>
        </div>
    </div>
  )
}

export default HomePageHeroUp