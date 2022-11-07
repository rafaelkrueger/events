import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Events({ eventos }) {
  return (
    <>
      <div className="event-component">
        <div className="event-cards">
          {eventos == undefined
            ? ""
            : eventos.map((list) => {
                return (
                  <>
                    {list.map((subItems, sIndex) => {
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
                              <p id="event-card-description" class="card-text">
                                {subItems.description == undefined
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
            <h4>Esses são nossos mais amados provedores de eventos</h4>
            <div className='col' id="round-card-slider">
                <div className='round-cards'>
                    <img src="https://res.cloudinary.com/htkavmx5a/image/upload/c_scale,f_auto,h_200,q_auto/wgwybmifggdbpdgi23yw.jpg" id="round-card-image"/>
                    <p>Empresa.Nome</p>
                </div>
            </div>
            </div>
*/}{" "}
      </div>
    </>
  );
}

export default Events;
