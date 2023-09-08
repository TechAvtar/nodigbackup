import React from 'react'
import './SearchPageListing.css'
import MapSearchListing from './MapSearchListing'
import SearchPageEachComp from './SearchPageEachComp'
import SideCompInfo from './SideCompInfo'


const SearchPageListing = () => {
  return (
    <div>
         <div className="whole-listing">
            {/* <div className="maps">
                <MapSearchListing />
            </div> */}
       
       <div>
            <MapSearchListing />
        </div>
        <div className="main-SearchPageListing">
        

        <SearchPageEachComp />
        <SearchPageEachComp />
        <SearchPageEachComp />
        <SearchPageEachComp />
        <SearchPageEachComp />
        <SearchPageEachComp />
        
        </div>
        
        <div>
            <SideCompInfo />
        </div>

        </div>
    </div>
  )
}

export default SearchPageListing