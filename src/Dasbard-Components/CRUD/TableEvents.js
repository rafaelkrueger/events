import React, {useState, useEffect} from 'react'
import './TableEvents.css'
import Api from '../../Api'

function TableEvents({empresa}) {
  return (
    <>  
        <div className='table table-dark table-hover' id="table-events">
            <table className='table'>
            <thead>
                <tr>
                <th scope="col">Nome Evento</th>
                <th scope="col">Data</th>
                <th scope="col">Vendidos</th>
                <th scope="col">DELETAR</th>
                </tr>
            </thead>
            <tbody>
                {empresa.events == undefined?<h3>Crie um evento para começar!</h3>:empresa.events.map((list)=>{
                    return(
                        <>
                            <tr>
                                <td>{list.name}</td>
                                <td>{toString(Date(list.data))} - {list.hour}</td>
                                <td>dsad</td>
                                <td><button onClick={()=>{
                                    console.log(list._id)
                                    Api.post("http://localhost:8080/delete-event", {empresa:empresa._id,id:list._id})
                                    .then((res)=>{
                                        console.log(res.data)
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                    })
                                }} className='btn-large btn-danger'>DELETAR</button></td>
                            </tr>
                        </>
                    )
                })}
            </tbody>
            </table>
        </div>
    </>
  )
}

export default TableEvents