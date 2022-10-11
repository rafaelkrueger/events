import React, {useState, useEffect} from 'react'
import {GrMenu} from 'react-icons/gr'
import {AiOutlineMenu, AiOutlineUser} from 'react-icons/ai'
import {Link} from 'react-router-dom'

  function Navbar() {

    const [screen, setScreen] = useState(window.outerWidth)
    const [navbar, setNavbar] = useState("")


return (
<>
<nav class="navbar navbar-expand-lg" id="nav-component">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/" onClick={(e)=>{
      e.preventDefault()
    }}>{screen > 600?<h3>Logo</h3>:<AiOutlineMenu onClick={(e)=>{
      e.preventDefault()
      if(navbar == "responsive"){
        setNavbar("")
      }else{
        setNavbar("responsive")
      }
    }} />}</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id={`navbar-content-${navbar}`}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Link class="nav-link active" id="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" id="nav-link" to="/eventos">Eventos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" id="nav-link" to="/create-event">Criar evento</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" id="nav-link" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" id="nav-link" to="/register">Cadastrar</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" id="nav-link" to="/profile"><AiOutlineUser/></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar