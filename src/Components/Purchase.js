import React from 'react'

function Purchase({ticket, setTicket}) {
  return (
    <>
        <div className="purchase">
            <h3>Dados Dos Ingressos</h3>
            {ticket.map((list)=>{
              return(
                <>
                  <div className='row'>
                    <div className="col">
                    <h4>{list.quantity}</h4>
                    {(()=>{
                      let inputs = []
                      for(let i = 0; i < list.quantity; i++){
                      inputs.push(
                        <>
                        <div class="input-group mb-3">
                          <input  type="text" class="form-control" placeholder='Nome do Ingressante'/>
                          <input  type="text" class="form-control" placeholder='CPF ou RG'/>
                        </div>
                        </>          
                        )
                      }
                      return inputs
                      
                    })()}
                    </div>
                    <div className="col">
                      <h5>Escolha a forma de pagamento</h5>

                    </div>
                  </div>
                </>
              )
            })}
        </div>
    </>
  )
}

export default Purchase