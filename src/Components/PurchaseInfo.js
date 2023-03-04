import React, { useState } from "react";
import { GoVerified } from "react-icons/go";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineKey,
} from "react-icons/ai";
import { MdPassword } from "react-icons/md";

function PurchaseInfo({
  ticket,
  confirmedInfo,
  setConfirmedInfo,
  user,
  setUser,
}) {
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
      <div className="col" id="ticket-register-section">
        <div className="row" id="register-input-section-ticket">
          <div className="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                <AiOutlineUser />
              </span>
              <input
                placeholder="Nome e Sobrenome"
                type="text"
                class="form-control"
                value={user?.name}
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
              />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                <AiOutlineUser />
              </span>
              <input
                placeholder="Usuário"
                type="text"
                class="form-control"
                value={user?.cpf}
                onChange={(e) => {
                  setUser({ ...user, user: e.target.value });
                }}
              />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                <AiOutlineMail />
              </span>
              <input
                placeholder="Email"
                type="email"
                class="form-control"
                value={user?.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                <AiOutlineMobile />
              </span>
              <input
                placeholder="(99) 9 998433468"
                type="telephone"
                class="form-control"
                value={user?.cellphone}
                onChange={(e) => {
                  setUser({ ...user, cellphone: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                <AiOutlineKey />
              </span>
              <input
                placeholder="CPF"
                type="text"
                class="form-control"
                value={user?.cpf}
                onChange={(e) => {
                  setUser({ ...user, cpf: e.target.value });
                }}
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                <MdPassword />
              </span>
              <input
                placeholder="Senha"
                type="password"
                class="form-control"
                value={user?.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
            <div
              class="input-group mb-3"
              id="purchase-confirm"
              style={{ marginTop: "5%" }}
            >
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
                style={{
                  fontSize: "11.5pt",
                  width: "87%",
                  paddingLeft: 55,
                  textAlign: "left",
                }}
              >
                Confirmar Dados
              </button>
            </div>
            <button
              className="btn btn-success"
              style={{ fontSize: "11.5pt", width: "100%" }}
              onClick={() => {
                console.log(confirmedInfo);
                setConfirmedInfo(!confirmedInfo);
              }}
            >
              Continuar compra
            </button>
          </div>
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
            Os Dados abaixo são importantes para entrar no evento, confirme-os
            antes de continuar
          </p>
        </div>
      </div>
    </>
  );
}

export default PurchaseInfo;
