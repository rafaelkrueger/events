import React, {useState, useEffect} from 'react'
import { BiSearch } from 'react-icons/bi'
import {Link} from 'react-router-dom'

function Carousel({eventos}) {

    const [pesquisa, setPesquisa] = useState("")
    const [current, setCurrent] = useState(0)
    const length = eventos.length

    setTimeout(()=>{
        if(current == length - 1){
            setCurrent(0)
        }else{
            setCurrent(current + 1)
        }
    }, 3000)

    return (
    <>
    {eventos === undefined?'':
    <>
    <div id="carousel-component">
        <section className='slider'>
            <Link>
            <img id="carousel-image"/>
            </Link>
        </section>
    </div>

    <div id="search-carousel">
    {pesquisa.length > 0?'':<span id="span-input-search">{<BiSearch/>}</span>}
    <input className="input-large" onChange={(e)=>setPesquisa(e.target.value)}  id="search-event" placeholder="Pesquise um evento"/>
    </div>
    </>
    }
    </>
    )
}

export default Carousel