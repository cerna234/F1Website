import React from 'react'
import Landing from '../components/Landing'
import Drivers from '../components/Drivers'
import Partners from "../components/Partners"
import Socials from "../components/Socials"
import DriversComponent from '../components/DriversComponent'


function Home() {
  return (
    <div className="homePage">
      
  

      <Landing/>
      <Drivers/>
      <Socials/>
      <Partners/>
    


    </div>
  )
}

export default Home