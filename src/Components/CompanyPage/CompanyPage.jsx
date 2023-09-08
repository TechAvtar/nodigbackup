import React from 'react'
import './CompanyPage.css'
import AboutPageHeader from '../AboutPage/AboutPageHeader'
import SearchPageHero from '../SearchPage/SearchPageHero'
import CompanyPageMain from './CompanyPageMain'
import CompanyPageFooter from './CompanyPageFooter'
import AppointmentModal from './AppointmentModal'

const CompanyPage = () => {
  return (
    <div style={{zIndex:"-2"}}>
        <AboutPageHeader />
        <SearchPageHero />
        <CompanyPageMain />
        <CompanyPageFooter />
        {/* <AppointmentModal /> */}
    </div>
  )
}

export default CompanyPage