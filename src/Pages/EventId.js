import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Modal from "../Components/Modal";
import { useParams } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { GiModernCity } from "react-icons/gi";
import Api from "../Api";

function EventId({ ticket, setTicket }) {
  const { idEvent } = useParams();
  const [evento, setEvento] = useState();
  const [modal, setModal] = useState("none");
  useEffect(() => {
    Api.get(`/specific-event/${idEvent}`)
      .then((res) => {
        setEvento(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Navbar />
      {evento == undefined ? (
        <h3 style={{ alignSelf: "center", margin: "10%" }}>
          Evento não encontrado!
        </h3>
      ) : (
        <div className="event-id">
          <div className="container">
            <div className="row" id="event-id-content">
              <div className="col" id="banner-event-id">
                <img src={evento.image} id="banner-event-id-image" />
              </div>
              <div className="col" id="ticket-event-id">
                <>
                  <h5 className="event-id-title">
                    <strong>{evento.name}</strong>
                  </h5>
                  <hr />
                  <h6 className="event-id-sub-title">
                    <MdDateRange className="event-id-icon" />
                    {evento.data}
                  </h6>
                  <h6 className="event-id-sub-title">
                    <BiTime className="event-id-icon" />
                    {evento.hour}
                  </h6>
                  <h6 className="event-id-sub-title">
                    <GoLocation className="event-id-icon" />
                    {evento.adress.rua + " - " + evento.adress.bairro}
                  </h6>
                  <h6 className="event-id-sub-title">
                    <GiModernCity className="event-id-icon" />
                    {evento.adress.cidade + ", " + evento.adress.estado}
                  </h6>
                </>
                <button
                  id="button-event-id"
                  className="btn btn-primary"
                  onClick={() => {
                    setModal("block");
                  }}
                >
                  Comprar Agora!
                </button>
              </div>
            </div>
            <Modal
              evento={evento}
              setModal={setModal}
              modal={modal}
              ticket={ticket}
              setTicket={setTicket}
            />
            <br />
            <br />
            <div className="row" id="event-id-description">
              <p>{evento.description}</p>
            </div>
            <div className="row" id="event-id-description">
              <h4>Localização do Evento</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.137267633411!2d-46.54741548523136!3d-22.981979284973676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec9960f07fe65%3A0x1256265d25bd7809!2sLi%20semijoias!5e0!3m2!1spt-BR!2sbr!4v1677780106568!5m2!1spt-BR!2sbr"
                style={{ borderRadius: "15px" }}
                title="Localização do evento"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default EventId;
