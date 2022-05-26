import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react";


function Drivers() {

  const [driversList, Drivers] = useState([]);

  axios.get( "http://localhost:3002/Drivers/").then( (response) => {
      Drivers(response.data);
  }, [] );

  
  return (
    <div className='Drivers'>
        
     {driversList.map( (value,key) => {
       return(
         <div>{value.Name}</div>
       )
     })}
        
    </div>
  )
}

export default Drivers