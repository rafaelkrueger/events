import React, { useState } from "react";
import { GoVerified } from "react-icons/go";

function PurchaseInfo({ ticket }) {
  const [ingressantes, setIngressantes] = useState([]);
  const [newIngressante, setnewIngressante] = useState({
    name: "",
    document: "",
    type: "",
  });

  return (
    <>
      <br />
      <br />
      <div className="col">
        <h3 style={{ textAlign: "left" }}>
          <strong>Dados Dos Ingressos</strong>
        </h3>
        <hr />
        {ticket.map((list) => {
          return (
            <>
              <div className="row">
                <h4 className="purchase-ticket-title">
                  {list.type === undefined ? "undefined" : list.type}
                </h4>
                {(() => {
                  let inputs = [];
                  for (let i = 0; i < list.quantity; i++) {
                    inputs.push(
                      <>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Nome do Ingressante"
                            onChange={(e) => {
                              setnewIngressante({
                                ...newIngressante,
                                name: e.target.value,
                              });
                            }}
                          />
                          <input
                            type="text"
                            class="form-control"
                            placeholder="CPF ou RG"
                            onChange={(e) => {
                              setnewIngressante({
                                ...newIngressante,
                                document: e.target.value,
                              });
                            }}
                            onBlur={() => {
                              setnewIngressante({
                                ...newIngressante,
                                type:
                                  list.type === undefined
                                    ? "undefined"
                                    : list.type,
                              });
                              setIngressantes([
                                ...ingressantes,
                                newIngressante,
                              ]);
                              setnewIngressante({});
                            }}
                          />
                          <button className="btn btn-success">
                            Confirmar
                            <span className="purchase-button-icon">
                              <GoVerified color="white" />
                            </span>
                          </button>
                        </div>
                      </>
                    );
                  }
                  return inputs;
                })()}
              </div>
              <br />
            </>
          );
        })}
      </div>
      <div className="col">
        <div className="ticket-list">
          <ul>
            {ingressantes.map((list) => {
              return (
                <>
                  <li>
                    {list.name} - {list.document}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <hr />
        <p>
          Os Dados a cima são importantes para entrar no evento, confirme-os
          antes de continuar
        </p>
        <div class="input-group mb-3" id="purchase-confirm">
          <div class="input-group-text bg-primary">
            <input
              class="form-check-input mt-0 success"
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
          <button
            id="purchase-confirm-button"
            className="btn btn-large btn-primary"
          >
            Confirmar Dados
          </button>
        </div>
      </div>
    </>
  );
}

export default PurchaseInfo;
