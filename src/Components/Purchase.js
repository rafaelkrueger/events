import React, { useState } from "react";
import PaymentChoose from "./PaymentChoose";
function Purchase({ ticket, setTicket }) {
  const [ingressantes, setIngressantes] = useState([]);
  const [filled, setFilled] = useState(true);
  const [newIngressante, setnewIngressante] = useState({
    name: "",
    document: "",
    type: "",
  });
  return (
    <>
      <div className="purchase">
        <div className="col">
          <br />
          <h3>
            <strong>Dados Dos Ingressos</strong>
          </h3>
          <hr />
          <br />
          <br />
          {ticket.map((list) => {
            return (
              <>
                <div className="row">
                  <div className="col">
                    <h4>{list.type === undefined ? "undefined" : list.type}</h4>
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
                            </div>
                          </>
                        );
                      }
                      return inputs;
                    })()}
                  </div>
                </div>
                <br />
              </>
            );
          })}
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
        <div className="col">
          <PaymentChoose filled={filled} setFilled={setFilled} />
        </div>
      </div>
    </>
  );
}

export default Purchase;
