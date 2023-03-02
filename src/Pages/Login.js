import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FundoRegister from "../Images/fundo-register.jpg";
import { useNavigate } from "react-router-dom";
import Api from "../Api";

function Login({ setUser }) {
  const navigate = useNavigate();

  const [userlogin, setuserLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Navbar />
      <div className="login-component">
        <div id="login-form" className="row">
          <div className="col">
            <h3>Logar Como Comprador</h3>
            <br />
            <h6 className="user-input">Usuário</h6>
            <input
              placeholder="Insira Seu Email ou Número"
              className="input-login"
              type="text"
              onChange={(e) => {
                setuserLogin({ ...userlogin, email: e.target.value });
              }}
            />
            <h6 className="password-input">Senha</h6>
            <input
              placeholder="Insira Sua Senha"
              className="input-login"
              type="password"
              onChange={(e) => {
                setuserLogin({ ...userlogin, password: e.target.value });
              }}
            />
            <br />
            <button
              id="login-button"
              className="btn btn-large btn-success"
              onClick={() => {
                Api.post("https:/passporter.herokuapp.com/login-cliente", {
                  email: userlogin.email,
                  password: userlogin.password,
                })
                  .then((response) => {
                    if (response.data.length == 1) {
                      setUser(response.data[0]);
                      navigate(`/profile`);
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Login Comprador
            </button>
          </div>

          <div className="col">
            <h3>Logar Como Vendedor</h3>
            <br />
            <h6 className="user-input">Usuário</h6>
            <input
              placeholder="Insira Seu Email ou Número"
              className="input-login"
              type="text"
              onChange={(e) => {
                setuserLogin({ ...userlogin, email: e.target.value });
              }}
            />
            <h6 className="password-input">Senha</h6>
            <input
              placeholder="Insira Sua Senha"
              className="input-login"
              type="password"
              onChange={(e) => {
                setuserLogin({ ...userlogin, password: e.target.value });
              }}
            />
            <br />
            <button
              id="login-button"
              onClick={() => {
                Api.post("/login-empresa", {
                  email: userlogin.email,
                  password: userlogin.password,
                })
                  .then((response) => {
                    if (response.data.length == 1) {
                      navigate(`/admin/${response.data[0]._id}`);
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              className="btn btn-large btn-danger"
            >
              Login Anfitrião
            </button>
          </div>
          <div className="row">
            <div className="col">
              <a className="login-links">Não Possuo Conta</a>
            </div>
            <div className="col">
              <a className="login-links">Esqueci Minha Senha</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
