import React from 'react'
import './HomePage.css'

const HomeHeader = () => {
  return (
    <div>
        <div className="main-HomeHeader">
            <div className="home-navbar">
                <div className="each-nav">
                    <div className="home-logo">
                    <img src="Logo (2).png" alt="" />
                    </div>
                    
                </div>
                <div className="each-nav">
                    <div className="each-nav-opt">
                    <p>Home</p>
                    <p>Page1</p>
                    <p>Page2</p>
                    </div>
                </div>
                <div className="each-nav">
                    <div className="homeheader-btns">
                            <div className="homeHeader-signUp">
                            <p>Sign Up</p>
                            </div>
                        <div className="homeHeader-login">
                        <p>Log In</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeHeader