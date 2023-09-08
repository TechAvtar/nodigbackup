import React, { useState } from 'react'
import './AppointmentModal.css'

const AppointmentModal = () => {
    const[app1,setapp1] = useState(true)
  return (
    <div>
        {(app1) ? (<div className="main-AppointmentModal">
            <div className="inside-AppointmentModal">
              <div className="top-AppointmentModal">
              <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
                setapp1(false)
              }} width="32" height="32" viewBox="0 0 32 32" style={{cursor:"pointer"}} fill="none">
  <g clip-path="url(#clip0_107_1591)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0001 17.8853L23.5428 25.428C23.7942 25.6709 24.131 25.8053 24.4806 25.8022C24.8302 25.7992 25.1646 25.659 25.4118 25.4118C25.6591 25.1645 25.7993 24.8301 25.8023 24.4805C25.8054 24.1309 25.671 23.7941 25.4281 23.5427L17.8854 16L25.4281 8.45733C25.671 8.20586 25.8054 7.86906 25.8023 7.51946C25.7993 7.16987 25.6591 6.83545 25.4118 6.58824C25.1646 6.34103 24.8302 6.2008 24.4806 6.19777C24.131 6.19473 23.7942 6.32912 23.5428 6.572L16.0001 14.1147L8.45742 6.572C8.20482 6.33512 7.86997 6.20582 7.52373 6.21144C7.17749 6.21706 6.84701 6.35717 6.60224 6.60212C6.35746 6.84707 6.21758 7.17765 6.21221 7.52389C6.20683 7.87014 6.33637 8.2049 6.57342 8.45733L14.1148 16L6.57209 23.5427C6.44474 23.6657 6.34317 23.8128 6.27329 23.9755C6.20341 24.1381 6.16663 24.3131 6.16509 24.4901C6.16355 24.6672 6.19729 24.8427 6.26433 25.0066C6.33137 25.1705 6.43037 25.3193 6.55556 25.4445C6.68075 25.5697 6.82962 25.6687 6.99348 25.7358C7.15735 25.8028 7.33292 25.8365 7.50996 25.835C7.687 25.8335 7.86196 25.7967 8.02463 25.7268C8.1873 25.6569 8.33443 25.5553 8.45742 25.428L16.0001 17.8853Z" fill="#48B1A3"/>
  </g>
  <defs>
    <clipPath id="clip0_107_1591">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>
              </div>
              <div className="bottom-AppointmentModal">
                <p className="head-AppointmentModal">Appointment</p>
                <div className="col1-AppointmentModal">
                    <input type="text" className="email-AppointmentModal" placeholder='Name*' required />
                    <input type='email' className="email-AppointmentModal" placeholder='Email' required />
                    
                </div>

                <div className="col1-AppointmentModal">
                    <input type="number" className="email-AppointmentModal" placeholder='MM/DD/YYYY' />
                    <input type='number' className="email-AppointmentModal" placeholder='00:00 AM' />
                    
                </div>

                <div className="col1-AppointmentModal">
                    <textarea type="text" className="email-AppointmentModal" style={{width:"43rem",height:"10rem",padding:"0.5rem"}} placeholder='Write here...' />
                </div>
                <div className="col1-AppointmentModal">
                    <div className="submitBtn-appointmentModal">
                        <p>Submit </p>
                    </div>
                    
                </div>
              </div>
                
            </div>
        </div>) : (<></>)}
    </div>
  )
}

export default AppointmentModal