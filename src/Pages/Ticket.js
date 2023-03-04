import React from "react";
import Navbar from "../Components/Navbar";
import Purchase from "./Purchase";
import Footer from "../Components/Footer";

function Ticket({ ticket, setTicket, user, setUser }) {
  return (
    <>
      <Navbar />
      <Purchase
        ticket={ticket}
        setTicket={setTicket}
        user={user}
        setUser={setUser}
      />
      <Footer />
    </>
  );
}

export default Ticket;
