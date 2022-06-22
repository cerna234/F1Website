import React from 'react'
import axios from "axios"
import { useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";

function Teams() {

  const [teams,setTeams] = useState([]);


  const navigate = useNavigate();

  useEffect( () => {

    axios.get("http://localhost:3002/Drivers/teams").then( (response) => {
      setTeams(response.data);
    })

  },[])

  return (
    <div className='teamComponent'>
      {teams.map( (value,key) => {
        return(
          <div className='teamContainer' >
            <div className='innerTeamContainer' onClick= {() => {navigate(`/Drivers/teamById/${value.id}`)}}>
              <div className='namePoints'>

                <div className='teamInner'>
                <p>{value.teamName}</p>
              
          
                

                </div>
                
              </div>
              <div className='teamDrivers'>
              <div className='teamInner'>
                <p>{value.Name}</p>
                <p>team Points</p>

                </div>
              </div>

              <div className='carImg'>
              car img

              </div>

            </div>
          </div>
         
        )
      })}

      
    </div>
  )
}

export default Teams