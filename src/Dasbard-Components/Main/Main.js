import React, {useState, useEffect} from 'react'
import './Main.css'

export default function Main({empresa}) {
  return (
  <>
      <div className='main' style={{width:"100%"}}>
          <h3 style={{width:"100%"}}>Você tem um total de {empresa.events.length} eventos</h3>
          <div className="container" id="eventos-dashboard">
            {empresa.events == undefined?'':empresa.events.map((list)=>{
              return(
                <>
                  {
                  <div class="card" style={{width: "18%", height:"18%"}} id="card-event-dashboard">
                    <img class="card-img-top" src={list.image} id="image-eventos-dashboard"/>
                    <div class="card-body">
                      <h5 class="card-title">{list.name}</h5>
                      <p class="card-text">{list.description}</p>
                      <a href="#" class="btn btn-primary">Ver Publicação</a>
                    </div>
                  </div>
                  }                  
                </>
              )
            })}
          </div>
      </div>
  </>
  )
}
