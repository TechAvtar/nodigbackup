import React from 'react'
import AboutPageHeader from '../AboutPage/AboutPageHeader'
import SearchPageHero from './SearchPageHero'
import SearchPageFilter from './SearchPageFilter'
import SearchPageListing from './SearchPageListing'
import CompanyPageFooter from '../CompanyPage/CompanyPageFooter'

const SearchPage = () => {
  return (
    <div>
        <AboutPageHeader />
        <SearchPageHero />
        <div style={{display:"flex" , justifyContent:"center",flexDirection:"column" , alignItems:"center"}}>
                <p className='SearchPageHero-p1'>Top Companies</p>
                <p className='SearchPageHero-p2' style={{marginLeft:"-30rem"}}>Near Locations</p>
            </div>
            
        <SearchPageFilter />
        
        <SearchPageListing />
        <CompanyPageFooter />
    </div>
  )
}

export default SearchPage