import React from 'react'
import PeopleDancing from '../Images/people-dancing.png'
import { FaTicketAlt } from 'react-icons/fa'
import { MdPayment } from 'react-icons/md'
import {Link} from 'react-router-dom'

function Information() {
  return (
    <>
        <div className='information-component'>
            <div className='row' id="information-grid">
                <div className='col'>
                   <h3 className='information-title'><FaTicketAlt id="ticket-infomation"/>- Venda ingressos do seu evento conosco!</h3>
                    <p className='information-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <h3 className='information-title'><MdPayment id="ticket-infomation"/> - Amplie o número de vendas!</h3>
                    <p className='information-description'>Nosso sistema conta com uma vasta variedade de opções de pagamento para seu cliente, acompanhe a quantidade de venda simultaneamente</p>
                    <Link to="/register" id="information-button" className='btn btn-large'>Publicar Evento</Link>
                </div>
                <div className='col'>
                  <img className='people-dancing' src={PeopleDancing}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Information