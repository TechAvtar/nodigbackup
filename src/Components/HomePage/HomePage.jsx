import React from 'react'
import HomeHeader from './HomeHeader'
import HomePageHeroUp from './HomePageHeroUp'
import './HomePage.css'
import HomePageHeroMid from './HomePageHeroMid'
import HomePageHeroDown from './HomePageHeroDown'
import HomePageHowItWorks from './HomePageHowItWorks'
import HomePageFeatures from './HomePageFeatures'
import HomePageMembersSay from './HomePageMembersSay'
import HomePageFaq from './HomePageFaq'
import HomePageMembershipLev from './HomePageMembershipLev'
import HomePageRegForm from './HomePageRegForm'
import CompanyPageFooter from '../CompanyPage/CompanyPageFooter'

const HomePage = () => {
  return (
    <div>
        <div className='background-homeHero'>
        <HomeHeader />
        <HomePageHeroUp />
        </div>
        <HomePageHeroMid />
        <HomePageHeroDown />
        <HomePageHowItWorks />
        <HomePageMembersSay />
        <HomePageFeatures />
        <HomePageMembershipLev />
        <HomePageFaq />
        
        <HomePageRegForm />
        <CompanyPageFooter />
    </div>
  )
}

export default HomePage