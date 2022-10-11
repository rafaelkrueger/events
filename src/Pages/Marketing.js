import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Information from '../Components/Information'
import {Link} from 'react-router-dom'

function Marketing() {
  return (
    <>
        <Navbar/>
            <div className='marketing'>
                <div className='marketing-title'>
                <h3 id="marketing-top">Divulgue e Venda seus <strong id="strong-styling">ingressos</strong> conosco!</h3>
                <p id="marketing-description">Faça com que sua empresa deslanche em vendas do seu evento! Publiquue você mesmo aqui e venda seus ingressos!</p>
                <Link to="/register" id="marketing-button" className='btn btn-large'>Começar Agora!</Link>
                </div>
            </div>
            <Information/>
        <Footer/>
    </>
  )
}

export default Marketing