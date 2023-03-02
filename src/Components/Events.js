import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

function Events({ eventos }) {
  const [pesquisa, setPesquisa] = useState("");
  return (
    <>
      <div className="event-component">
        <div className="eventos">
          <h3 className="eventos-title">
            Essa é nossa lista de <strong>eventos</strong> mais recentes
          </h3>
          <div id="search-carousel">
            {pesquisa.length > 0 ? (
              ""
            ) : (
              <span id="span-input-search">{<BiSearch />}</span>
            )}
            <input
              className="input-large"
              onChange={(e) => setPesquisa(e.target.value)}
              id="search-event"
              placeholder="Pesquise um evento"
            />
          </div>
        </div>
        <div className="event-cards">
          {eventos === undefined
            ? ""
            : eventos.map((list) => {
                return (
                  <>
                    {list
                      .filter((filter) => {
                        if (pesquisa !== "") {
                          if (pesquisa === filter.name) {
                            return filter;
                          }
                        } else {
                          return filter;
                        }
                      })
                      .map((subItems, sIndex) => {
                        return (
                          <>
                            <div class="card" id="event-card-element">
                              <img
                                src={subItems.image}
                                alt="..."
                                id="event-card-image"
                              />
                              <div class="card-body">
                                <h6 id="event-card-title">{subItems.name}</h6>
                                <p
                                  id="event-card-description"
                                  class="card-text"
                                >
                                  {subItems.description === undefined
                                    ? ""
                                    : subItems.description.substr(0, 75)}
                                  ...
                                </p>
                                <Link
                                  to={`/eventos/${subItems._id}`}
                                  id="event-card-button"
                                >
                                  ADQUIRIR
                                </Link>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </>
                );
              })}
        </div>
        {/*            <div className='row' id="round-cards-component">
            <h4>Esses são nossos provedores de eventos</h4>
            <div className='col' id="round-card-slider">
                <div className='round-cards'>
                    <img src="https://res.cloudinary.com/htkavmx5a/image/upload/c_scale,f_auto,h_200,q_auto/wgwybmifggdbpdgi23yw.jpg" id="round-card-image"/>
                    <p>Empresa.Nome</p>
                </div>
            </div>
            </div>
*/}
      </div>
    </>
  );
}

export default Events;
