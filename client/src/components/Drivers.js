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


  axios.get("http://localhost:3002/Drivers/TopTen").then( (response) => {
      allDrivers(response.data);
  })




},[])
const name = "LandingCar"

const link = "https://i.insider.com/628ba121b9dbb40018cb3fba?width=700";

  
  return (
    <div>
      <div className="DriversHeadingContainer">
        <div className="DriverTextContainer">

        <h2>2022 TOP DRIVERS</h2>
        </div>
     
      

      </div>
    
    
    
    <div className='Drivers'>
 
     {driversList.map( (value,key) => {
       return(
         <div className='Driver'>
           <div  className='DriverImageContainer' >
             <img className='DriverImg' src={value.Imageurl}></img>
            
          
           </div>
           <div style={{backgroundColor:value.teamColor}} className='slit'>
               

               </div>
          

           <div className='DriverInfo'>

             <div className='DriverInfoInner'>
             <h2>{value.Name}</h2>
              <p>{value.Team}</p>
          

             </div>
             
        
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
              <div style={{backgroundColor:value.teamColor}} className='teamColor'></div>
              <h2 >{value.Name}</h2>
              <p >{value.Team}</p>

            </div>

            <div className="driverStatContainer" >
                <p className="DriverStat">{value.Points} PTS</p>
                
            </div>
          </div>
          </Link>
         
        )
       })}

     </div>
    </div>

    <Link to="/drivers">View All Drivers</Link>

    </div>
  )
}

export default Drivers