import React, { useEffect, useState,useRef} from 'react'
// import axios from 'axios'
import axios from 'axios'
import './HomePageRegForm.css'


// import { addCompany } from '../../services/review.service'
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2UyM2EzNmExN2NjNTFmNDE2MDJhMyIsImlhdCI6MTY5MTc0Mjc0MSwiZXhwIjoxNjk0MzM0NzQxfQ.wlTfERtSY9vSgLzYp4YdrpigPID4_9nFlVqnWEs_0eY";

// console.log(accessToken)
const config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}
// const config = {
//   headers: { Authorization: `Bearer ${token}` }
// };


const HomePageRegForm = () => {

//   const navigate = useNavigate()
  const [fname,setfname] = useState("")
  const [bname,setbname] = useState("")
  const [email,setemail] = useState("")
  const [phone,setphone] = useState("")
  const [password,setPassword] = useState("")
  const [confirmation,setconfirmation] = useState(false)
  const [id,setId] = useState()
    // useEffect(() => {
  //   addCompany()
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fname);
    console.log(bname);
    console.log(email);
    console.log(phone);
    console.log(password);

    var pwd_expression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    var letters = /^[a-zA-Z][a-zA-Z ]*$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// var mobnum = /(0|91)?[6-9][0-9]{9}/;
var mobnum = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ ;
var numRegex = /^[0-9]+$/
if(fname==="" && email==="" && password === "" && phone==="" && bname==="")
{
  alert("please fill all the fields");
}
else if(fname==='')
{
  alert('Please enter your Name');
}
else if(bname==='')
{
  alert('Please enter your business Name');
}
else if(!letters.test(fname))
{
  alert('Name field required only alphabet characters');
}
else if(!letters.test(bname))
{
  alert('Business Name field required only alphabet characters');
}
else if(email==='')
{
  alert('Please enter your email id');
}
else if (!filter.test(email))
{
  alert('Invalid email');
}
// else if(password.length != 10){
//   alert("Phone must be of 10 digits")
// }
else if (!numRegex.test(phone))
{
  alert('Invalid phone number');
}
else if(password==='')
{
  alert('Please enter Password');
}
else if(password.length < 8){
  alert("Password length should be minimum of 8 charaters and maximum of 20 charaters")
}
else if (!pwd_expression.test(password)){
  alert("Password must contain at least one digit ,at least one upper case alphabet ,at least one lower case alphabet ,at least one special character and must not contain a white space")
}
else if(confirmation === false)
{
  alert("Confirmation is not checked in" )
}
else{
  axios.post("https://nodig-backend.onrender.com/auth/local/register", {
                  username: fname,
                  email: email,
                  password: password
                }, config)                
                .then((res) => {  
                  if(res.status === 201 || res.status === 200){
                  alert("Registered Successfully")
                  axios.post("https://nodig-backend.onrender.com/companies", {
                    name: fname,
                    email: email,
                    contact: phone
                  }, config)
                  .then((res) => {
                    if(res.status === 201 || res.status === 200) {
                      // alert("Business Form Posted")
                      localStorage.setItem("businessId", res.data._id);
                    //   navigate('/dashboard');
                    }
                  })
                  // setId(res.data.data.id)
                  // console.log(id);
                  // axios.post("https://nodig-backend.onrender.com/content-manager/collection-types/plugins::users-permissions.user", {
                  //   username: fname, 
                  //   email: email,
                  //   password: password
                  // }, config) 
                  // .then((res) => {  
                  //   if (res.status === 201 || res.status === 200) {
                  //     alert("Registration Successful");
                  //     // Reset form fields if needed
                  //     axios.put(`https://nodig-backend.onrender.com/admin/users/${id}`, {
                  //       password: password
                  //     }, config)
                  //     .then((res) => {
                  //       if(res.status === 201 || res.status === 200) {
                  //         alert("Updated Password")
                  //         axios.put(`https://nodig-backend.onrender.com/admin/users/${id}`, {
                  //           isActive: true
                  //         }, config)
                  //         .then((res) => {
                  //           if(res.status === 201 || res.status === 200) {
                  //             alert("Updated Activeness")
                  //           }
                  //         })
                  //       }
                  //     })
                  //   }
                  // })
                  // .catch((err) => {
                  //   alert(err.message); // Log error for debugging
                  //   // alert("Registration Failed"); 
                  //   // Handle errors or show a user-friendly message
                  // });
                }
                }).catch((err) => {
                  // alert("Failed")
                  console.log(err.message); 
                })
                setPassword('')
                setbname('')
                setfname('')
                setemail('')
                setphone('')
                setconfirmation('')
  
    // axios.post("https://nodig-backend.onrender.com/content-manager/collection-types/plugins::users-permissions.user", {
    //   username: fname, // Assuming username is equivalent to the full name
    //   email: email,
    //   password: password
    // }, config)
    // .then((res) => {
    //   if (res.status === 201 || res.status === 200) {
    //     alert("Registration Successful");
    //     // Reset form fields if needed
    //   }
    // })
    // .catch((err) => {
    //   console.log(err.message); // Log error for debugging
    //   alert("Registration Failed"); 
    //   // Handle errors or show a user-friendly message
    // });
    // setPassword("")
    // setbname("")
    // setfname("")
    // setemail("")
    // setphone("")
    // setconfirmation("")
  }
  
  }
  return (
    <div>
        <div className="registration-form" id='with-hash-fragment'>
        <div className="become-nodig-verified" >Become NoDig Verified</div>
        <div className="group-parent">
          <div className="group-container">
            <img className="group-child" alt="" src="/group-3.svg" />
            <div className="lorem-ipsum-dolor-sit-amet-co-wrapper">
              <div className="lorem-ipsum-dolor">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis no strud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo conseq uat.
              </div>
            </div>
            <img
              className="down-arrow-grey2"
              alt=""
              src="/down-arrow--grey2.svg"
            />
            <div className="verified-badge4">
              <img className="new-2-icon" alt="" src="/verified--11@2x.png" />
            </div>
          </div>
          <div className="frame-group">
            <div className="component-2-parent">
              <div className="component-2">
                <div className="live-chat-tracking">Full name</div>
                <input type='text' className="input-field-base-rectangle1" value={fname} onChange={(e) => {
                  setfname(e.target.value)
                }} required />
              </div>
              <div className="component-2">
                <div className="live-chat-tracking">Business name</div>
                <input type='text' className="input-field-base-rectangle1" value={bname} onChange={(e) => {
                  setbname(e.target.value)
                }} required/>
              </div>
              <div className="component-2">
                <div className="live-chat-tracking">Email</div>
                <input type='email' className="input-field-base-rectangle1" value={email} onChange={(e) => {
                  setemail(e.target.value)
                }} required />
              </div>
              <div className="component-4">
                <div className="live-chat-tracking">Phone</div>
                <input  type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" style={{width:"240px"}} className="input-field-base-rectangle4" value={phone} onChange={(e) => {
                  setphone(e.target.value)
                }} required/>
              </div>
              <div className="component-5">
                <div className="live-chat-tracking">Password</div>
                <input type='password' className="input-field-base-rectangle4" value={password} onChange={(e) => {
                  setPassword(e.target.value)
                }} required />
              </div>
              <div className="component-13">
                <input type='checkbox' className="input-field-base-rectangle6" value={confirmation} onClick={(e) => {
                  setconfirmation(true)
                }} required />
                <div className="text18">
                  I confirm that I meet the criteria to become a NoDig Verified
                  installer
                </div>
                <img className="tile-icons9" alt="" src="/tile-icons3.svg" />
              </div>
            </div>
            <div className="buttons5">
              <div className="button-base2" 
              // onClick={() => {
              //   axios.post("https://nodig-backend.onrender.com/admin/users", {
              //     firstname: fname,
              //     lastname: "temporary",
              //     email: email,
              //     roles: ["64ccfd381598d14186c479e9"],
              //   }, config)                
              //   .then((res) => {
              //     if(res.status === 201 || res.status === 200)
              //     alert("Passed Successfully")

              //   }).catch((err) => {
              //     // alert("Failed")
              //     console.log(err.message); 
              //   })
                
              // }}
              onClick={handleSubmit}
              >
              <div className="text8" 
              // onClick={handleSubmit}
              >Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageRegForm


// https://nodig-backend.onrender.com/content-manager/collection-types/plugins::users-permissions.user