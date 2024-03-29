import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PixImage from "../../Images/payment/pix-checkout.png";
import Api from "../../Api";
import "../../App.css";

function Pix({ data, costumer, valortotal, cart, realCupom, setRealCupom }) {
  const [disabled, setDisabled] = useState(false);
  const [qrcode, setQrcode] = useState("");
  const [txid, setTxId] = useState("");
  const [status, setStatus] = useState(false);
  console.log(realCupom);
  useEffect(() => {
    if (txid !== "") {
      setInterval(() => {
        Api.get(`https://tamarintec.herokuapp.com/pix-status/${txid}`).then(
          (res) => {
            if (res.data == "CONCLUIDA") {
              setStatus(true);
            }
          }
        );
      }, 5000);
    }
  }, [txid]);

  return (
    <>
      <div className="pix-component">
        <div className="row" id="pix-component-style">
          <div className="col">
            <div className="header-commponent-image">
              <img className="pay-icon" src={PixImage} alt="Pagamento Pix" />
            </div>
            <div className="body-component">
              <div className="body-component-header">
                <h3>
                  Pix
                  <span className="header-commponent-span">
                    Pague pelo app do banco
                  </span>
                </h3>
              </div>
              <hr />
              <div className="row" id="pix-body">
                <div className="col">
                  <p className="pix-text">
                    Pagamento pix, Clique o botão para gerar o QrCode. Após
                    gerar o Qrcode scaneie com o aplicativo do seu banco para
                    completar o pagamento
                  </p>
                  <button
                    id="pix-button"
                    onClick={() => {
                      setDisabled(true);
                      Api.post(`https://tamarintec.herokuapp.com/pix`, {
                        empresa: data._id,
                        name: costumer.name,
                        email: costumer.email,
                        cpf: costumer.identification,
                        password: costumer.password,
                        number: costumer.number,
                        cep: costumer.cep,
                        state: costumer.state,
                        city: costumer.city,
                        street: costumer.street,
                        streetNumber: costumer.adressNumber,
                        valor: valortotal,
                        products: [cart],
                        idCupom: realCupom[0]?._id ? realCupom[0]._id : null,
                        avaible: realCupom[0]?.avaible
                          ? realCupom[0].avaible
                          : null,
                      })
                        .then((res) => {
                          setQrcode(res.data.qrcode);
                          setTxId(res.data.txid);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                    className="btn btn-large btn-success"
                    disabled={disabled}
                  >
                    Gerar QRcode
                  </button>
                </div>
                <div style={{ width: "100%" }} className="col">
                  <p id="pix-qrcode-skeleton" className="skeleton">
                    Seu código sera mostrado aqui ao clicar no botão
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            {!status ? (
              <img src={qrcode} id="pix-qrcode" />
            ) : (
              <div className="pix-payed">
                <img src={data.logo} className="pix-payed-image" />
                <p>
                  O pagamento foi realizado com sucesso! {data.name} agradece
                  pela confiança e preferência!
                </p>
                <p className="pix-payed-text-2">
                  Clique no botão para mais informações sobre suas compras
                </p>

                <button className="btn btn-success">
                  <Link to={`/${data.site}/profile`}>Meu Perfil</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pix;
