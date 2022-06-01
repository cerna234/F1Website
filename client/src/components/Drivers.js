import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";







function Drivers() {

  const [driversList, Drivers] = useState([]);
  const [allDriversList, allDrivers] = useState([]);


  useEffect( ()=> {
  axios.get( "http://localhost:3002/Drivers/TopDrivers").then( (response) => {
      Drivers(response.data);
  })


  axios.get("http://localhost:3002/Drivers").then( (response) => {
      allDrivers(response.data);
  })




},[])
const name = "LandingCar"

  
  return (
    <div>
      <div className="DriversHeadingContainer">
        <div className="DriverTextContainer">

        <h2>2022 TOP DRIVERS</h2>
        </div>
     
      <div className="DriverStripe"></div>

      </div>
    
    
    
    <div className='Drivers'>
     
      
     {driversList.map( (value,key) => {
       return(
         <div className='Driver'>
           <div  className='DriverImageContainer' >
             
          
           </div>

           <div className='DriverInfo'>
              <h2>{value.Name}</h2>
              <p>{value.Team}</p>
        
           </div>

           
         
         </div>
       )
     })}

     
        
    </div>

    <div className="TopTenDriversContainer">

     <div className="TopTenDrivers">
   
       {allDriversList.map( (value,key) => {
        return(

          <Link to="/drivers">
           <div className="driverlistContainer">
            <div className="driverListText">
              <h2>{value.Name}</h2>
              <p>{value.Team}</p>

            </div>

            <div className="driverStatContainer" >
                <p className="DriverStat">{value.DriverRank } PTS</p>
            </div>
          </div>
          </Link>
         
        )
       })}

     </div>
    </div>

    <p>View All Drivers</p>

    </div>
  )
}

export default Drivers