import React,{useEffect, useState} from 'react'
import axios from "axios"

const Card = () => {
    let[card,setCard]=useState([])

    useEffect(()=>{
    axios.get("http://localhost:8000/")
    .then((res)=>setCard(res.data))
    .catch((err)=>console.log(`Error is ${err}`))
    },[])
  
  return (
  <>
  <div className='cards'>

    {card.map((card)=>{
        return(
            <>
    <div className="card card-container" style={{height:"350px",width:"22rem"}} key={card.id}>     
    <img src={card.Image} className="card-img-tops" alt="..."/>
    <div className="card-body">
  
   <div className='after-image'>
  <span className="badge text-bg-danger">{card.Position}</span>
  <span>{card.By}</span>
  </div>

    <h5 >{card.Title}</h5>
    <p className='perception'>{card.Perception}</p>
    <hr/>

    <div className='after-image'>
    <p>21 dec 2022</p>
    <a href="#" className="btn btn-success button">Enroll now</a>
    </div>
  </div>
  </div>
            </>
        )
    })}
  </div>
  </>
  )
}

export default Card
