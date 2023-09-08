import React from 'react'
import './AboutPageHeader.css'
import { useNavigate } from 'react-router-dom'

const AboutPageHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="main-AboutHeader">
            <div className="About-navbar">
                <div className="each-nav-About">
                    <div className="home-logo">
                    <img src="Logo (2).png" alt="" />
                    </div>
                    
                </div>
                <div className="each-nav-About">
                    <div className="each-nav-opt-About">
                    <p onClick={() => {
                navigate('/')
              }}>Home</p>
                    <p>About</p>
                    <p onClick={() => {
                navigate('/search')
              }}>Search</p>
                    </div>
                </div>
                <div className="each-nav-About">
                    <div className="Aboutheader-btns">
                            <div className="AboutHeader-signUp" onClick={() => {
                                navigate('/home')
                            }} >
                            <p style={{marginTop:"0.5rem"}}>BECOME A VERIFIED INSTALLER</p>
                            </div>
                        <div className="AboutHeader-login">
                        <p>INSTALLER LOG IN</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPageHeader