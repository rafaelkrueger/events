import React, { useState, useEffect } from "react";
import EmptyProfile from "../Images/empty-profile.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Api from "../Api";
import "../App.css";

function Profile({ user, setUser, setData, costumer }) {
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState(false);
  const [pedido, setPedido] = useState(null);
  const [pedidoStatus, setPedidoStatus] = useState(false);
  const [pedidoLocation, setPedidoLocation] = useState(null);
  let { tamarinSite } = useParams();

  useEffect(() => {
    Api.get(`/empresa/${tamarinSite}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // apiip
    //   .getLocation()
    //   .then((results) => console.log(results))
    //   .catch((error) => console.error(error));
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar />
      <div className="profile">
        <div classname="container-fuild">
          <div className="row" id="responsive-profile">
            <div className="col" id="profile-infos">
              <h3>Suas Informações</h3>
              <div className="row">
                <div className="col">
                  <img
                    alt="profile-pic"
                    src={EmptyProfile}
                    id="profile-infos-image"
                  />
                </div>
                <div className="col">
                  <div className="col">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        value={user.name}
                        placeholder="Seu Nome"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        value={user.email}
                        placeholder="Seu Email"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        value={user.cellphone}
                        placeholder="Seu Número"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <h4>Suas Informações extra</h4>
                <br />
                <br />
                <br />
                <div className="col">
                  <div class="input-group mb-3">
                    <input
                      type="password"
                      class="form-control"
                      value={user.password}
                      placeholder="Sua Senha"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      value={user.cpf}
                      placeholder="Seu CPF"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <button
                      className="btn btn-success"
                      style={{ width: "100%" }}
                    >
                      Alterar Informações
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div id="profile-products" className="row">
                <div
                  className="col"
                  style={{
                    background: "rgba(0,0,0,0.045)",
                    color: "black",
                    borderTopLeftRadius: "20px",
                  }}
                  onClick={() => {
                    setActive(0);
                  }}
                >
                  <p></p>
                </div>
                <div
                  className="col"
                  style={{
                    background: "rgba(0,0,0,0.045)",
                    color: "black",
                    borderTopRightRadius: "20px",
                  }}
                  onClick={() => {
                    setActive(1);
                  }}
                >
                  <p></p>
                </div>
                <div
                  className="row"
                  style={{
                    background: "rgba(0,0,0,0.07)",
                    marginLeft: "0.2%",
                  }}
                >
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
