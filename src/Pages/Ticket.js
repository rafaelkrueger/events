import React from 'react'
import Navbar from '../Components/Navbar'
import Purchase from '../Components/Purchase'
import Footer from '../Components/Footer'

function Ticket({ticket, setTicket}) {
  return (
    <>
        <Navbar/>
        <Purchase ticket={ticket} setTicket={setTicket}/>
        <Footer/>
    </>
  )
}

export default Ticket