
 import React from 'react'
 import './CompanyPageMain.css'
import CompanyPageLeft from './CompanyPageLeft'
import CompanyPageRight from './CompanyPageRight'
import CompanyPageGallery from './CompanyPageGallery'
 
 const CompanyPageMain = () => {
   return (
     <div>
        <div className="main-CompanyPageMain">
            <div className="left-CompanyPage">
                <CompanyPageLeft />

            </div>
            <div className="right-CompanyPage">
                <CompanyPageRight />
            </div>
            {/* <div>
                <CompanyPageGallery />
            </div> */}
        </div>
     </div>
   )
 }
 
 export default CompanyPageMain