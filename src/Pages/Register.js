import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FundoRegister from "../Images/fundo-register.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineKey,
} from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import Api from "../Api";

function Register({ newuser, setnewUser }) {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="register">
        <div className="row">
          <div className="col" id="register-input">
            <img src="..." alt="LOGO" />
            <h5>Registre-se em poucos passos!</h5>
            <br />

            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                <AiOutlineUser />
              </span>
              <input
                placeholder="Nome e Sobrenome"
                type="text"
                class="form-control"
                onChange={(e) => {
                  setnewUser({ ...newuser, name: e.target.value });
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
                onChange={(e) => {
                  setnewUser({ ...newuser, user: e.target.value });
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
                onChange={(e) => {
                  setnewUser({ ...newuser, email: e.target.value });
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
                onChange={(e) => {
                  setnewUser({ ...newuser, cellphone: e.target.value });
                }}
              />
            </div>

            <br />
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                <AiOutlineKey />
              </span>
              <input
                placeholder="CPF"
                type="text"
                class="form-control"
                onChange={(e) => {
                  setnewUser({ ...newuser, cpf: e.target.value });
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
                onChange={(e) => {
                  setnewUser({ ...newuser, password: e.target.value });
                }}
              />
            </div>
            <br />
            <div id="button-register">
              <p className="terms-acceptance">
                Clicando no botão abaixo, você concorda com todos nossos Termos
                de Serviço
              </p>
              <button
                className="fundo-register-link"
                onClick={() => {
                  Api.post("/register-cliente", {
                    name: newuser.name,
                    user: newuser.user,
                    email: newuser.email,
                    password: newuser.password,
                    cellphone: newuser.cellphone,
                    cpf: newuser.cpf,
                  })
                    .then((res) => {
                      console.log(res);
                      navigate("/register/cliente");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                REGISTRAR COMO COMPRADOR{" "}
              </button>
              <br />
              <button
                className="btn btn-large btn-danger"
                onClick={() => {
                  navigate("/register/empresa");
                }}
              >
                REGISTRAR COMO PROVEDOR{" "}
              </button>
            </div>
          </div>
          <div className="col" id="register-image">
            <div id="fundo-register-description">
              <h3 className="fundo-register-title">
                Registre-se como <strong>comprador</strong> de ingresso
              </h3>
              <p className="fundo-register-description-inside">
                Para participar de eventos
              </p>
              <Link
                id="link-comprador"
                className="fundo-register-link"
                to="/create-event"
              >
                Veja Mais Informações
              </Link>
              <br />
              <br />
              <h3 className="fundo-register-title">
                Registre-se como <strong id="strong-red">Provedor</strong> de
                Eventos
              </h3>
              <p className="fundo-register-description-inside">
                Para vender ingressos de seu evennto
              </p>
              <Link
                id="link-comprador"
                className="fundo-register-link"
                to="/create-event"
              >
                Veja Mais Informações
              </Link>
            </div>
            <img id="fundo-register" src={FundoRegister} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
