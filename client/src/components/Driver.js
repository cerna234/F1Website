import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Driver() {

    let {id} = useParams();

    const [driverInfo, setDriverInfo] = useState({});
   
  

    useEffect( () => {
        axios.get(`http://localhost:3002/Drivers/driverById/${id}`).then( (response) => {
          setDriverInfo(response.data);
         
           
        }, []).catch(error => {
          console.log(error.response)
        })

    },[])




   
  return (
    <div className='driverPage'>
       
    <div className='driverPageImageContainer'>
      <div className='driverPageImage'>
          <img className='DriverPageImg' src={driverInfo.Imageurl}/>
            
        
      </div>

      <p>{driverInfo.Name}</p>
    </div>
    <div className='driverPageInfo'>
      info
    </div>
   

    </div>
  )
}

export default Driver