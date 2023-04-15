import React, { useState, useEffect } from "react";
import "./Main.css";
import ModalMain from "./ModalMain";
import { Link } from "react-router-dom";

export default function Main({ empresa }) {
  const [modal, setModal] = useState("hidden");
  const [modalContent, setmodalContent] = useState({
    _id: "",
    name: "",
    image: "",
    description: "",
    data: "",
    hour: "",
    adress: [],
    ingresso: [],
  });

  return (
    <>
      <div className="main" style={{ width: "100%" }}>
        <h3 style={{ width: "100%" }}>
          Você tem um total de {empresa.events.length} eventos
        </h3>
        <ModalMain
          modal={modal}
          setModal={setModal}
          empresa={empresa}
          modalContent={modalContent}
        />
        <div className="container" id="eventos-dashboard">
          {empresa.events === undefined
            ? ""
            : empresa.events.map((list) => {
                return (
                  <>
                    {
                      <div
                        class="card"
                        style={{ width: "18%", height: "18%" }}
                        id="card-event-dashboard"
                        onClick={() => {
                          setModal("visible");
                          console.log(list.ingresso);
                          setmodalContent({
                            _id: list._id,
                            name: list.name,
                            image: list.image,
                            description: list.description,
                            data: list.data,
                            hour: list.hour,
                            adress: list.adress,
                            ingresso: list.ingresso,
                          });
                        }}
                      >
                        <img
                          class="card-img-top"
                          src={list.image}
                          id="image-eventos-dashboard"
                          alt={`${list.name}`}
                        />
                        <div class="card-body">
                          <h5 class="card-title">{list.name}</h5>
                          <p class="card-text">
                            {list.description.slice(0, 180)}...
                          </p>
                          <hr />
                          <div className="main-event-status">
                            <Link
                              to={`/eventos/${list._id}`}
                              class="btn btn-success"
                            >
                              Estatísticas
                            </Link>
                            <Link
                              to={`/eventos/${list._id}`}
                              class="btn btn-primary"
                            >
                              Publicação
                            </Link>
                          </div>
                        </div>
                      </div>
                    }
                  </>
                );
              })}
        </div>
      </div>
    </>
  );
}
