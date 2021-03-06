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

    try{
      axios.get( "https://formula-one-web-app.herokuapp.com/Drivers/TopDrivers").then( (response) => {
        Drivers(response.data);
    })

    }catch(error){
        console.log(error);
    }
 


 

},[])




  
  return (
    <div>
      <div className="DriversHeadingContainer">
        <div className="DriverTextContainer">

        <h2 className='titleHeading' style={{color:"white"}}>2022 TOP DRIVERS <br/></h2>
       
        </div>
     
      

      </div>
    
    
    
    <div className='Drivers'>
 
     {driversList.map( (value,key) => {
       return(
         <div key={key} className='Driver'>
           <div  className='DriverImageContainer' >
             <img className='DriverImg' src={value.Imageurl}></img>
            
          
           </div>
           <div style={{backgroundColor:value.teamColor}} className='slit'>
               

               </div>
          

           <div className='DriverInfo'>

             <div className='DriverInfoInner'>
             <h2>{value.Name}</h2>
             <div style={{width:"100%",display:"flex", justifyContent:'space-between'}}>
             <p style={{color:"rgba(171, 170, 170, 0.774)",fontWeight:"bold",fontFamily:"'Orbitron', sans-serif"}}>{value.Number}</p>
             <p style={{color:"rgba(171, 170, 170, 0.574)",fontWeight:"bold",fontFamily:"'Orbitron', sans-serif"}}>{value.Country}</p>
             

             </div>
             
            
              
          

             </div>
             
        
           </div>

           
         
         </div>
       )
     })}

     
        
    </div>

    
    <DriversComponent url="https://formula-one-web-app.herokuapp.com/Drivers/TopTen"/>
    <div className='allDriversButtonContainer'>
    <Link className='AllDriversButton' to="/allDrivers">All Drivers</Link>

    </div>

   

    </div>
  )
}

export default Drivers