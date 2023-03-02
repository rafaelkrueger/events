import React, { useState } from "react";
import Pix from "./payments/Pix";
import CreditCard from "./payments/CreditCard";
import Boleto from "./payments/Boleto";

function PaymentChoose({ filled, setFilled }) {
  const [chosen, setChosen] = useState(1);

  return (
    <div className="purchase">
      <div className="row" id="purchase-join-pages">
        <div id="select-payment">
          <div
            className="back-arrow"
            onClick={() => {
              setFilled(!filled);
            }}
          >
            <p className="back-arrow-button">Escolha o Pagamento</p>
          </div>
          <div className="purchase-options">
            <div className="purchase-options-element">
              <div
                class="input-group-text"
                id="purchase-options-element-input"
                style={{ width: "100%" }}
              >
                <input
                  class="form-check-input mt-0"
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="purchase"
                  onChange={() => {
                    setChosen(1);
                  }}
                />
                <p style={{ marginTop: "2.5%", marginLeft: "2.6%" }}>Pix</p>
              </div>
            </div>
            <div className="purchase-options-element">
              <div
                class="input-group-text"
                id="purchase-options-element-input"
                style={{ width: "100%" }}
              >
                <input
                  class="form-check-input mt-0"
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="purchase"
                  onChange={() => {
                    setChosen(2);
                  }}
                />
                <p style={{ marginTop: "2.5%", marginLeft: "2.6%" }}>
                  Cartão de Crédito/Débito
                </p>
              </div>
            </div>

            <div className="purchase-options-element">
              <div
                class="input-group-text"
                id="purchase-options-element-input"
                style={{ width: "100%" }}
              >
                <input
                  class="form-check-input mt-0"
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="purchase"
                  onChange={() => {
                    setChosen(3);
                  }}
                />
                <p style={{ marginTop: "2.5%", marginLeft: "2.6%" }}>Boleto</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="purchase-selected">
            {chosen === 1 ? <Pix /> : ""}
            {chosen === 2 ? <CreditCard /> : ""}
            {chosen === 3 ? <Boleto /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentChoose;
