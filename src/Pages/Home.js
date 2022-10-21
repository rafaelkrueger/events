import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Information from "../Components/Information";
import Events from "../Components/Events";
import Footer from "../Components/Footer";
import Api from "../Api";

function Home({ user, setUser }) {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    Api.get("http://localhost:8080/all-events")
      .then((res) => {
        setEventos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Carousel eventos={eventos} />
      <Events eventos={eventos} />
      <Information />
      <Footer />
    </>
  );
}

export default Home;
