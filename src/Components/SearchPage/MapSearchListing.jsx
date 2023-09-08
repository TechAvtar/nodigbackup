import React from 'react'
import './MapSearchListing.css'

const MapSearchListing = ({address}) => {
    const check = address
  return (
    <div>
        <div className="main-MapSearchListing">
         <div className='search-image-6-icon'><iframe width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Grand%20Iris%20Mishalgarhi%20Road,%20Ghaziabad,%20Uttar Pradesh+(Rudra)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
         </div>
    </div>
  )
}

export default MapSearchListing