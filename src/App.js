import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Eventos from "./Pages/Eventos";
import EventId from "./Pages/EventId";
import Marketing from "./Pages/Marketing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Empresa from "./Pages/Empresa";
import Dashboard from "./Dasbard-Components/Dashboard";
import Profile from "./Pages/Profile";
import Ticket from "./Pages/Ticket.js";

function App() {
  const [newuser, setnewUser] = useState({
    logo: "",
    name: "",
    empresa: "",
    user: "",
    email: "",
    cellphone: "",
    cpf: "",
    password: "",
    url: "",
    logged: false,
  });

  const [ticket, setTicket] = useState([]);

  const [user, setUser] = useState({
    name: "",
    user: "",
    email: "",
    cellphone: "",
    cpf: "",
    password: "",
    logged: false,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/eventos" element={<Eventos user={user} />} />
        <Route
          path="/eventos/:idEvent"
          element={
            <EventId user={user} ticket={ticket} setTicket={setTicket} />
          }
        />
        <Route path="/create-event" element={<Marketing user={user} />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/register"
          element={
            <Register
              user={user}
              setUser={setUser}
              newuser={newuser}
              setnewUser={setnewUser}
            />
          }
        />
        <Route
          path="/register/empresa"
          element={
            <Empresa user={user} newuser={newuser} setnewUser={setnewUser} />
          }
        />
        <Route
          path="/profile"
          element={<Profile user={user} setUser={setUser} />}
        />
        <Route
          path="/purchase"
          element={
            <Ticket
              user={user}
              setUser={setUser}
              ticket={ticket}
              setTicket={setTicket}
              newuser={newuser}
              setnewUser={setnewUser}
            />
          }
        />
        {/*UX para empresa*/}
        <Route path="/admin/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
