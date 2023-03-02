import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Events from "../Components/Events";
import Api from "../Api";

function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    Api.get("/all-events")
      .then((res) => {
        setEventos(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Navbar />
      <Events eventos={eventos} />
      <Footer />
    </>
  );
}

export default Eventos;
