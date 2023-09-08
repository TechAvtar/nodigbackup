import React from 'react'
import './AboutPageHero.css'

const AboutPageHero = () => {
  return (
    <div>
        <div className="main-AboutPageHero">
            <div className="inside-AboutPageHero">
                <div className="logo-AboutPageHero">
                    <img src="Verified Badge (1).png" alt="" />
                </div>
                <div className="head-AboutPageHero">
                    <p className='head-AboutPageHero-p1'>Find a Verified Trenchless Contractor</p>
                    <p className='head-AboutPageHero-p2'>Welcome to Nodig.com, the no1 online destination for homeowners in the United States seeking verified trenchless repair services.</p>
                </div>
                <div className="about-search-bar">
          <div className="about-magnifying-glass-glass-search-parent">
            <img
              className="about-magnifying-glass-glass-search-icon"
              alt=""
              src="/about-magnifyingglassglasssearchmagnifying.svg"
            />
            <div className="about-how-can-we"><input type="text" className='about-input-zip-code' placeholder='How can we help' /></div>
          </div>
          <div className="about-location-compass-1-arrow-comp-parent">
            <img
              className="about-location-compass-1-arrow-comp-icon"
              alt=""
              src="/about-locationcompass1arrowcompasslocationgpsmapmapspoint.svg"
            />
            <div className="about-how-can-we">
              <input type="text" className='about-input-zip-code' placeholder='Enter your ZIP code' />
            </div>
          </div>
          <div className="about-buttons">
            <div className="about-buttons1">
              <div className="about-text">SEARCH</div>
            </div>
          </div>
          </div>
          <div className="about-service-icons">
          <div className="about-tile-icons-parent">
            <img className="about-tile-icons" alt="" src="/about-tile-icons.svg" />
            <b className="about-title">
              <p className="about-trenchless">{`Trenchless `}</p>
              <p className="about-trenchless">Sewer Repair</p>
            </b>
          </div>
          <div className="about-tile-icons-parent">
            <img className="about-tile-icons" alt="" src="/about-tile-icons1.svg" />
            <b className="about-title">
              <p className="about-trenchless">{`sEWER `}</p>
              <p className="about-trenchless">iNSPECTION</p>
            </b>
          </div>
          <div className="about-tile-icons-parent">
            <img className="about-tile-icons" alt="" src="/about-tile-icons2.svg" />
            <b className="about-title">
              <p className="about-trenchless">{`dRAIN `}</p>
              <p className="about-trenchless">cLEANING</p>
            </b>
          </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPageHero