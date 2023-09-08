import React from 'react'
import AboutPageHeader from './AboutPageHeader'
import AboutPageHero from './AboutPageHero'
import AboutPageWelcome from './AboutPageWelcome'
import AboutPageVerified from './AboutPageVerified'
import AboutPageArticles from './AboutPageArticles'
import AboutPageHowItWorks from './AboutPageHowItWorks'
import CompanyPageFooter from '../CompanyPage/CompanyPageFooter'

const AboutPage = () => {
  return (
    <div>
      <AboutPageHeader />
      <AboutPageHero />
      <AboutPageWelcome />
      <AboutPageHowItWorks />
      <AboutPageVerified />
      <AboutPageArticles />
      <CompanyPageFooter />
    </div>
  )
}

export default AboutPage