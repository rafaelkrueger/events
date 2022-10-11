import React from 'react'
import './NavbarDashboard.css'
import { AiOutlineMenu } from 'react-icons/ai'

function NavbarDashboard({sidebarOpen, closeSidebar, openSidebar, empresa}) {
  return (
    
    <div className='navbar-dashboard'>
        <div className='nav_icon' onClick={()=>{
            if(sidebarOpen){
                closeSidebar()                
            }else{
                openSidebar()
            }
        }}>
            <AiOutlineMenu color="white"/>
        </div>
    </div>
  )
  
}

export default NavbarDashboard