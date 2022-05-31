import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react";






function Drivers() {

  const [driversList, Drivers] = useState([]);


  useEffect( ()=> {
  axios.get( "http://localhost:3002/Drivers/TopDrivers").then( (response) => {
      Drivers(response.data);
  })
},[])
const name = "LandingCar"

  
  return (
    <div>
    <h2>TOP DRIVERS</h2>
    
    
    <div className='Drivers'>
     
        
     {driversList.map( (value,key) => {
       return(
         <div className='Driver'>
           <div  className='DriverImageContainer' >
             
          
           </div>

           <div className='DriverInfo'>
           <p> Team: {value.Team}</p>
           <h2>{value.Name}</h2>
           <p>Number: {value.Number}</p>
           <h2>Nationality: {value.Nationality}</h2>
         
        
           </div>

           
         
         </div>
       )
     })}

     
        
    </div>

    <p>View All Drivers</p>

    </div>
  )
}

export default Drivers