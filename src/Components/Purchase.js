import React, { useState } from "react";
import Pix from "../Images/payment/pix-checkout.png";
import Hipercard from "../Images/payment/credito-hipercard-icon.png";
import Matercard from "../Images/payment/credito-mastercard-icon.png";
import Visa from "../Images/payment/visa-icon.png";
import Nubank from "../Images/payment/nubank-icon.png";
import Santander from "../Images/payment/santander-icon.png";
import Itau from "../Images/payment/itau-icon.png";
import Caixa from "../Images/payment/caixa-icon.png";
import BancoBrasil from "../Images/payment/bancobrasil-icon.png";
import Bradesco from "../Images/payment/bradesco-icon.png";

function Purchase({ ticket, setTicket }) {
  const [ingressantes, setIngressantes] = useState([]);
  const [newIngressante, setnewIngressante] = useState({
    name: "",
    document: "",
    type: "",
  });
  return (
    <>
      <div className="purchase">
        <div className="col">
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
                    <h4>
                      {list.quantity} -
                      {list.type == undefined ? "undefined" : list.type}
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
                                      list.type == undefined
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
          <div class="input-group mb-3">
            <div class="input-group-text bg-primary">
              <input
                class="form-check-input mt-0 success"
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
            <button className="btn btn-large btn-primary">Dados</button>
          </div>
        </div>
        <div className="col">
          <h5>Escolha a forma de pagamento</h5>
          <hr />
          <br />
          <br />
          <div className="row">
            <div className="col">
              <div className="payment-choices">
                <div className="payment-choices-title">
                  <h4>Pix</h4> <p>Pagamento rápido</p>
                </div>
                <div className="payment-choices-image">
                  <img src={Pix} />
                </div>
              </div>
              <div className="payment-choices">
                <div className="payment-choices-title">
                  <h5>Cartão de Crédito/Saldo</h5>
                  <p>Pagamento crédito/saldo bancario</p>
                </div>
                <div className="payment-choices-image">
                  <img src={Matercard} />
                  <img src={Hipercard} />
                  <img src={Visa} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Purchase;
