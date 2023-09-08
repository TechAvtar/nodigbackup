import React from 'react'
import './HomePageMembershipLev'

const Levels = ({name,description,index,color,textColor}) => {
   
  return (
    <div>
       <div className="tile-icons-parent2" style={{backgroundColor:color,color:textColor}} key={index}>
            {/* <img className="tile-icons5" alt="" src="/tile-icons2.svg" /> */}
            <div className="verified-badge">
              <img className="new-2-icon" alt="" src="/verified--1@2x.png" />
            </div>
            <div className="basic" style={{color:textColor}}>{name}</div>
        
            {description.map((item, index) => (
          <div className='full-use-of' style={{color:textColor}} key={index}>{item}</div>
        ))}
            
            <div className="buttons1">
              <div className="button-base2" >
              <div className="text8">Learn More</div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Levels
