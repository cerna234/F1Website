import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

function CircuitComponent() {

    const [circuitsList,setCircuits] = useState([]);


    useEffect( () => {
        axios.get("http://localhost:3002/Circuits").then( (response) => {
            setCircuits(response.data);
        })
    }, [])


    
  return (
    <div className='circuitsContainer'>
       {circuitsList.map( (value, key) => {



        return(
           <div key={key} className='circuitContainer'>
                <div className='circuitContainerInner'>
                    <div className='circuitInfoContainer'>
                        <div className='imageContainerCircuits'>

                            <div className='circuitTitleContainer'>
                                <h2 className='circuitTitle'>{value.CircuitName}</h2>
                                <h3 className='circuitTitleSub'>2022</h3>

                            </div>
                            
                            <img className='circuitImage' src={value.CircuitIMG}/>

                        </div>
                        <div className='circuitInfo'>
                            <div className='circuitInfoInner'>
                                <p>{value.CircuitIMG}</p>
                                <p>fv</p>
                            </div>
                            <p>date</p>


                        </div>

                    </div>
                </div>
           </div>
        )
       })}
    </div>
  )
}

export default CircuitComponent


