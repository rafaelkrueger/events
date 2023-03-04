import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function Footer({ data }) {
  const notStyled = {
    textDecoration: "none",
    color: "rgba(0,0,0,0.5)",
  };

  const colapsable = (id) => {
    const colapsable = window.document.getElementById(
      `footer-colapsable-${id}`
    );
    if (colapsable.style.display == "none") {
      colapsable.style.display = "block";
      colapsable.style.visibility = "visible";
    } else {
      colapsable.style.display = "none";
      colapsable.style.visibility = "hidden";
    }
  };

  return (
    <>
      <div
        class="container-fluid"
        id="footer-style"
        style={{
          backgroundColor: "rgba(255,255,255,0.3)",
          color: "rgba(0,0,0,0.3)",
        }}
      >
        <div class="row" id="footer-content">
          <div class="col">
            <div className="row">
              <h2 class="footer-title">Mapa do Site</h2>
              <MdKeyboardArrowDown
                size={35}
                onClick={(e) => colapsable(1)}
                style={{
                  marginLeft: "20%",
                  marginTop: "-10%",
                  maxWidth: "100%",
                }}
                color="black"
              />
            </div>
            <hr />
            <div id="footer-colapsable-1">
              <p className="footer-link">
                <Link style={notStyled} to="/">
                  Home
                </Link>
              </p>
              <p className="footer-link">
                <Link style={notStyled} to="/eventos">
                  Eventos
                </Link>
              </p>
              <p className="footer-link">
                <Link style={notStyled} to="/create-event">
                  Criar Evento
                </Link>
              </p>
              <p className="footer-link">
                <Link style={notStyled} to="/login">
                  Login
                </Link>
              </p>
              <p className="footer-link">
                <Link style={notStyled} to="/register">
                  Cadastrar
                </Link>
              </p>
              <p className="footer-link">
                <Link style={notStyled} to="/profile">
                  Perfil
                </Link>
              </p>
            </div>
          </div>
          <div class="col">
            <h2 class="footer-title">Sobre Nós</h2>
            <MdKeyboardArrowDown
              onClick={(e) => colapsable(2)}
              color="black"
              size={35}
              style={{
                marginLeft: "70.2%",
                marginTop: "-15%",
                maxWidth: "100%",
              }}
            />

            <hr />
            <div id="footer-colapsable-2">
              <p className="footer-link">
                {" "}
                <a
                  style={notStyled}
                  target="_blank"
                  href="https://d26lpennugtm8s.cloudfront.net/stores/844/374/rte/POL%C3%8DTICA%20DE%20TROCA,%20DEVOLU%C3%87%C3%83O%20E%20REEMBOLSO%20-%20AZZA.pdf"
                >
                  Política de reembolso
                </a>
              </p>
              <p className="footer-link">
                {" "}
                <a
                  style={notStyled}
                  target="_blank"
                  href="https://sirros.net/politica-de-privacidade.pdf"
                >
                  Política de privacidade
                </a>
              </p>
              <p className="footer-link">
                {" "}
                <a
                  style={notStyled}
                  target="_blank"
                  href="https://www.clear.com.br/site/Content/pdf/politica-de-cookies-clear.pdf"
                >
                  Política de Cookies
                </a>
              </p>
              <p className="footer-link">
                <a
                  style={notStyled}
                  target="_blank"
                  href="https://havite.com.br/modulos/siteApp/docs/termos-de-uso-havite.pdf"
                >
                  EULA
                </a>
              </p>
            </div>
          </div>
          <div class="col">
            <h2 class="footer-title">Suporte</h2>
            <MdKeyboardArrowDown
              color="black"
              size={35}
              onClick={(e) => colapsable(3)}
              style={{ marginLeft: "70%", marginTop: "-20%" }}
            />
            <hr />
            <div id="footer-colapsable-3">
              <p className="footer-link">Central de Suporte</p>
              <p className="footer-link">
                {" "}
                <a style={notStyled} target="_blank">
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    </>
  );
}
export default Footer;
