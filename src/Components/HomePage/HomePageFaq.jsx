import React, { useState } from 'react'
import './HomePageFaq.css'
import Faq from "react-faq-component";

const data = {
    
    
    rows: [
        {
            title: "How much does it cost?",
            content: "It is free to claim a listing on Nodig.com. We have various packages with additional benefits to further scale your business. (Link to membership listings page)",
        },
        {
            title: "How do I become a Nodig Verified installer?",
            content:
                "Once you have registered and claimed your listing, you will be asked to submit all relevant material to our registration team. We will confirm within 2 working days if you registration has been successful and if it hasn’t our dedicated account managers will work with your business to fix this.",
        },
        {
            title: "I am new to trenchless repair- is Nodig right for me?",
            content: "There is no minimum trading history required to list your services on our website, however, to become a no dig verified installer you will be required to show at least 2 years of successful trading history or completed at least XX jobs via our website.",
        },
        {
            title: "How do reviews work?",
            content: "It is free to claim a listing on Nodig.com. We have various packages with additional benefits to further scale your business.",
        },
        {
          title: "How much does it cost?",
          content: "It is free to claim a listing on Nodig.com. We have various packages with additional benefits to further scale your business.",
      },
    ],
};

const styles = {
    bgColor: '#F5F6F6',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'black',
    // rowContentColor: 'grey',
    // arrowColor: "red",
    rowTitleTextSize: '32px',
    rowContentTextSize: '17px',
   

    
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};


const HomePageFaq = () => {
  return (
    <div>
        <div className="main-HomePageFaq">
        <div className="inside-HomePageFaq">
          <div className="head-HomePageFaq">FAQs</div>
          <div className="group-parent1">
          <Faq
                data={data}
                styles={styles}
                config={config}
            />
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default HomePageFaq