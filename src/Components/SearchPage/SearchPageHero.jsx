import React from 'react'
import './SearchPageHero.css'

const SearchPageHero = () => {
  return (
    <div>
        <div className="main-SearchPageHero">
            <div className="inside-SearchPageHero">
                
            <div className="search-search-bar">
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
            </div>
            {/* <div>
                <p className='SearchPageHero-p1'>Top Companies</p>
                <p className='SearchPageHero-p2'>Near Locations</p>
            </div> */}
        </div>
    </div>
  )
}

export default SearchPageHero