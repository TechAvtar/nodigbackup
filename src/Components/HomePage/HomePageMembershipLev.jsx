import React,{useState} from 'react'
import './HomePageMembershipLev.css'
import data from './membership.json'
import Levels from './Levels';



const HomePageMembershipLev = () => {
    const [dataa, setDataa] = useState([data]);
  return (
    <div>
        <div className="main-HomePageMembershipLev" style={{marginTop:"7rem"}}>
            <div className="inside-HomePageMembershipLev">
                <p className='head-HomePageMembershipLev'>Membership Levels</p>
                <div className="frame-parent">
        {data.map((item) => (
         <Levels name={item.name} description={item.description} color={item.color} textColor={item.textColor} />
          ))}
          </div>
            </div>

        </div>
    </div>
  )
}

export default HomePageMembershipLev