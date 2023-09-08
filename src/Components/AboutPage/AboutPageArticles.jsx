import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './AboutPageArticles.css'

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2UyM2EzNmExN2NjNTFmNDE2MDJhMyIsImlhdCI6MTY5MTc0Mjc0MSwiZXhwIjoxNjk0MzM0NzQxfQ.wlTfERtSY9vSgLzYp4YdrpigPID4_9nFlVqnWEs_0eY";

console.log(accessToken)
const config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}


const AboutPageArticles = () => {
    const [data,setdata] = useState([])
  useEffect(() => {
                axios.get("https://nodig-backend.onrender.com/articles", config)
                .then((res) => {
                  console.log(res.data)
                  setdata(res.data)
                }).catch((err) => {
                  // alert("Failed")
                })
              },[])
  return (
    <div>
        <div className="main-AboutPageArticles" style={{marginTop:"8rem"}}>
            <div className="inside-AboutPageArticles">
                <p className="head-AboutPageArticles">
                Our latest <span style={{color:"#48B1A3"}}>Articles</span>
                </p>
                <div className="all-AboutPageArticles">
                {data.map((item,index) => {
          if(index<3)
          return(
                    <div className="each-AboutPageArticles">
                        <img src="about-georgiadelotzebb8fenztmunsplash-2@2x.png" className='img-each-AboutPageArticles' alt="" />
                        <p className='each-AboutPageArticles-p1'>{item?.title}</p>
                        <p className="each-AboutPageArticles-p2"> {item?.description}</p>
                    </div>
                     )})}
                </div>
                <div className="btn-AboutPageArtticles">
                    <p>Go To All Articles</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPageArticles