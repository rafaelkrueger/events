import React, {useState, useEffect} from 'react'
import {useParams  } from "react-router-dom";
import NavbarDashboard from './NavbarDashboard/NavbarDashboard'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import CRUD from './CRUD/CRUD';
import Api from '../Api'

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [dashboard, setDashboard] = useState(0)
    const [empresa, setEmpresa] = useState()
    const params = useParams()

    useEffect(()=>{
        Api.get(`http://localhost:8080/empresa/${params.id}`)
            .then((res)=>{
                console.log(res.data)
                setEmpresa(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
      })
    
    
    const openSidebar = () =>{
        setSidebarOpen(true)
    }
  
    const closeSidebar = () =>{
        setSidebarOpen(false)
    }
  
  return (
    <>
        <div className='dashboard'>
            <NavbarDashboard sidebarOpen={sidebarOpen} openSidebar={openSidebar} closeSidebar={closeSidebar} empresa={empresa}/>
            <div className='row'>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} empresa={empresa} dashboard={dashboard} setDashboard={setDashboard} />
            {dashboard == 1?<Main empresa={empresa}/>:''}
            {dashboard == 2?<CRUD empresa={empresa}/>:''}
            </div>
        </div>
    </>
  )
}

export default Dashboard