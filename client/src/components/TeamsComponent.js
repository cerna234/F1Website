import React from 'react'
import axios from "axios"
import { useEffect,useState } from 'react'

function Teams() {

  const [teams,setTeams] = useState([]);

  useEffect( () => {

    axios.get("http://localhost:3002/Drivers/teams").then( (response) => {
      setTeams(response.data);
    })

  },[])

  return (
    <div className='teamComponent'>
      {teams.map( (value,key) => {
        return(
          <div>
            <p>{value.teamName}</p>
            <p>{value.id}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Teams