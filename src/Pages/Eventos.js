import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Events from '../Components/Events'
import { BiSearch } from 'react-icons/bi'
import {Link} from 'react-router-dom'
import Api from '../Api'


function Eventos() {

    const [eventos, setEventos] = useState([])

    useEffect(()=>{
      Api.get("http://localhost:8080/all-events")
      .then((res)=>{
        setEventos(res.data)
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    })

    const [pesquisa, setPesquisa] = useState("")

  return (
    <>
        <Navbar/>
        <div className='eventos'>
            <h3 className='eventos-title'>Essa é nossa lista de <strong>eventos</strong> mais recentes</h3>
            <div id="search-carousel">
            {pesquisa.length > 0?'':<span id="span-input-search">{<BiSearch/>}</span>}
            <input className="input-large" onChange={(e)=>setPesquisa(e.target.value)}  id="search-event" placeholder="Pesquise um evento"/>
            </div>
            <Events eventos={eventos}/>
        </div>
        <Footer/>
    </>
  )
}

export default Eventos