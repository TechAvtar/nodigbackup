import React from 'react'
import './CompanyPageFooter.css'
import CompanyPageFooterEachCol from './CompanyPageFooterEachCol'
import CompanyPageFooterEachColNew from './CompanyPageFooterEachColNew'

const CompanyPageFooter = () => {
  return (
    <div>
        <div className="main-CompanyPageFooter">
            <div className="inside-CompanyPageFooter">
                <CompanyPageFooterEachCol />
                <CompanyPageFooterEachColNew />
                <img src="Logo (3).png" className='logo-footer' alt="" />
                <CompanyPageFooterEachColNew />
                <CompanyPageFooterEachColNew />
            </div>
        </div>
    </div>
  )
}

export default CompanyPageFooter