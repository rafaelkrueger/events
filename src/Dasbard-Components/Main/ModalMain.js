import React, { useState } from "react";
import "./ModalMain.css";
import Api from "../../Api";

function ModalMain({ modal, setModal, modalContent }) {
  const [updatedContent, setupdatedContent] = useState({
    description: modalContent.description,
    ingresso: modalContent.ingresso,
    data: modalContent.data,
    hour: modalContent.hour,
  });

  return (
    <div className="modal-produto" style={{ visibility: modal }}>
      <div className="modal-produto-content">
        <div className="modal-produto-header">
          <div>
            <h3 className="modal-title-button">
              Altere o Evento - {modalContent.name}
            </h3>
          </div>
          <div>
            <button
              onClick={() => {
                setModal("hidden");
              }}
              className="modal-close-button"
            >
              X
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr />
            {modalContent.ingresso.map((list) => {
              return (
                <>
                  <h5>{list.name}</h5>
                  <div class="input-group mb-3">
                    <span
                      class="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      lote({list.lote})
                    </span>
                    <input type="text" class="form-control" />
                    <span
                      class="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Preço - R${list.price}
                    </span>
                    <input type="text" class="form-control" />
                    <span
                      class="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Limite - R${list.limit}
                    </span>
                    <input type="text" class="form-control" />
                  </div>
                </>
              );
            })}
          </div>
          <div className="col">
            <hr />
            <div className="row">
              <div class="input-group mb-3">
                <textarea
                  placeholder="Descrição do Produto..."
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    setupdatedContent({
                      ...updatedContent,
                      description: e.target.description,
                    });
                  }}
                ></textarea>
              </div>
              <div>
                <input
                  placeholder="Data do evento"
                  type="date"
                  onChange={(e) => {
                    setupdatedContent({
                      ...updatedContent,
                      data: e.target.value,
                    });
                  }}
                />
                <input
                  placeholder="Horario do Evento"
                  type="time"
                  onChange={(e) => {
                    setupdatedContent({
                      ...updatedContent,
                      hour: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              Api.patch("https:/passporter.herokuapp.com/update-evento", {
                _id: modalContent._id,
                name: modalContent.name,
                ingresso: modalContent.ingresso,
                description: updatedContent.description,
                data: updatedContent.data,
                hour: updatedContent.hour,
              })
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            id="modal-alter-save-button"
            className="btn btn-success"
          >
            <h5>Atualizar Produto</h5>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalMain;
