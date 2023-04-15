import React from "react";
import "./Sidebar.css";
import { BiSitemap, BiFoodMenu, BiMoney, BiUser } from "react-icons/bi";
import { AiOutlineMessage, AiOutlinePlusCircle } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

function Sidebar({ params, empresa, sidebarOpen, closeSidebar, setDashboard }) {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={empresa == undefined ? "..." : empresa.logo} alt="logo" />
          <h1>{empresa == undefined ? "..." : empresa.name}</h1>
        </div>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <a
            href={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              setDashboard(0);
            }}
          >
            <BiSitemap color="white" className="icons-style" />
            Home
          </a>
        </div>
        <h2>Admin</h2>
        <div className="sidebar__link">
          <Link
            to={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              setDashboard(1);
            }}
          >
            <BiFoodMenu color="white" className="icons-style" />
            Eventos
          </Link>
        </div>
        <div className="sidebar__link">
          <Link
            to={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              setDashboard(2);
            }}
          >
            <AiOutlinePlusCircle color="white" className="icons-style" />
            Criar Evento
          </Link>
        </div>
        <div className="sidebar__link">
          <Link
            to={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              setDashboard(3);
            }}
          >
            <FiUserCheck color="white" className="icons-style" />
            Clientes
          </Link>
        </div>
        <div className="sidebar__link">
          <Link
            to={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              setDashboard(4);
            }}
          >
            <BiMoney color="white" className="icons-style" />
            Afiliados
          </Link>
        </div>
        <h2>Plataforma</h2>
        <div className="sidebar__link">
          <Link
            to={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              setDashboard(5);
            }}
          >
            <BiUser color="white" className="icons-style" />
            Usuários
          </Link>
        </div>
        <div className="sidebar__link">
          <Link
            to={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              setDashboard(6);
            }}
          >
            Política de Privacidade
          </Link>
        </div>
        <hr />
        <div className="sidebar__logout">
          <Link to="/">Log Out</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
