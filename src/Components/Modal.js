import React, {useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


function Modal({evento, setModal, modal, ticket, setTicket}) {

  const navigate = useNavigate()

  return (

    <>
    {evento == undefined?'':
        <div className="buy-modal" style={{display:modal}}>
        <div className="buy-modal-content">
            <p><AiOutlineClose onClick={()=>{
              setModal("none")
            }}/></p>
            <h3>{/*evento != undefined?evento[0].name:''*/}</h3>
            <hr/>
            <div className="buy-modal-list">
                {evento.ingresso.map((list)=>{
                  return(
                    <>
                    <div className="buy-modal-list-item">
                      <div className='buy-modal-list-left'>
                      <h5 className='buy-modal-sub'>{list.type}</h5>
                      <h6>{list.price} - {list.lote}º Lote</h6>
                      </div>
                      <input onChange={(e)=>{
                        setTicket([...ticket, {type:list.type, quantity:e.target.value, valor:list.price}])
                      }} type="number" id="buy-modal-ticket-number"/>
                    </div>
                    </>
                  )
                })}
            </div>
            <div className="buy-modal-price">
              <div className='buy-modal-price-button'>
                <button onClick={()=>{
                  navigate("/purchase")
                }} className="btn btn-large btn-primary" id="buy-modal-button">COMPRAR</button>                
              </div>
            </div>
        </div>
        </div>
    }
    </>
  )
}

export default Modal