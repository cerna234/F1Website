import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DriversComponent from './DriversComponent';



function Drivers() {

  const [driversList, Drivers] = useState([]);
  

  const navigate = useNavigate();


  useEffect( ()=> {
  axios.get( "http://localhost:3002/Drivers/TopDrivers").then( (response) => {
      Drivers(response.data);
  })


 

},[])




  
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

    
    <DriversComponent url="http://localhost:3002/Drivers/TopTen"/>
   
   

    </div>
  )
}

export default Drivers