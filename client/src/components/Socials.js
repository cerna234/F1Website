import React from 'react'
import {  FaFacebookF,FaTwitter,FaYoutube,FaInstagram, FaGooglePlay } from "react-icons/fa";


function Socials() {
  return (
    <div className='Socials'>
        <div className='socialsInnerLeft'>
            <div>
            <p>DOWNLOAD THE OFFICAL F1 APP</p>
            </div>
           
            <a ><img className='appLinks' src="https://www.formula1.com/etc/designs/fom-website/images/svg/google-play-badge.svg"></img></a>
            <a ><img className='appLinks' src="https://www.formula1.com/etc/designs/fom-website/images/svg/download-on-the-app-store-apple.svg"></img></a>
           
            

        </div>
        <div className='socialsInner'>

        <a className='socialsLink'><FaFacebookF/></a>
        <a className='socialsLink'><FaTwitter/></a>
        <a className='socialsLink'><FaInstagram/></a>
        <a className='socialsLink'><FaYoutube/></a>
         
        </div>
    </div>
  )
}

export default Socials