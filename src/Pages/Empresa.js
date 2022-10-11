import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Ticket from '../Images/ticket.png'
import {useNavigate} from 'react-router-dom'
import Api from '../Api'

function Empresa({newuser, setnewUser}) {
  const navigate = useNavigate()

  const convertBase64 = (file) =>{
    return new Promise((resolve, reject)=>{
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)

        fileReader.onload = () =>{
            resolve(fileReader.result)
        }

        fileReader.onerror = (error)=>{
            reject(error)
        }
    })
}

  return (
    <>
        <Navbar/>
        <div className="empresa">
          <div className="col">
          <img src={Ticket} id="image-empresa" />
          <button className='btn btn-large btn-danger' id="start-btn" onClick={()=>{
            console.log(newuser)
            Api.post("http://localhost:8080/register-empresa", {    
            logo:"",
            logo:newuser.logo,
            name:newuser.name,
            empresa:newuser.empresa,
            user:newuser.user,
            email:newuser.email,
            cellphone:newuser.cellphone,
            cpf:newuser.cpf,
            password:newuser.password,
            url:newuser.url,
            })
            .then((response)=>{
              console.log(response)
            })
            .catch((err)=>{
              console.log(err)
            })
          }}>COMEÇAR AGORA!</button>
          </div>
          <div className="col">
          <h3 className='empresa-title'>Ultimos passos para nós começarmos!</h3>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Nome Empresa</span>
            <input type="text" class="form-control" placeholder="Empresa" onChange={(e)=>{
              setnewUser({...newuser, empresa:e.target.value})
            }} />
          </div>
          <br/>
          <div class="input-group flex-nowrap">
            <input type="file" class="form-control" placeholder="Username" onChange={async (e)=>{
                  const file = e.target.files[0]
                  const base64 = await convertBase64(file)
                  console.log(base64) 
                  setnewUser({...newuser, logo:base64})                   
              }} />
          </div>
          <br/>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">URL</span>
            <input type="text" class="form-control" placeholder="URL com informações" onChange={(e)=>{
              setnewUser({...newuser, url:e.target.value})
            }} />
          </div>
          </div>
        </div>


        <Footer/>
    </>
  )
}

export default Empresa