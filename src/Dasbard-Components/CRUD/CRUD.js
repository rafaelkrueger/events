import React, { useState } from "react";
import "./CRUD.css";
import { GiPartyPopper } from "react-icons/gi";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Api from "../../Api";
import UndefinedImage from "../../Images/undefined.png";
import axios from "axios";
import TableEvents from "./TableEvents";

function CRUD({ empresa }) {
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const [evento, setEvento] = useState({
    image: "",
    name: "",
    description: "",
    //endereco em outra constante (adressApi)
    //data e hora em outra constante (datePicker)
    //ingrsso em outra constante (ingresso)
  });

  const [adressApi, setadressApi] = useState({
    cep: "",
    bairro: "",
    rua: "",
    cidade: "",
    estado: "",
  });

  const [datepicker, setdatePicker] = useState({
    data: "",
    hour: "",
  });
  const [ingresso, setIngresso] = useState([]);

  const [prototypeingresso, setprototypeIngresso] = useState({
    price: "",
    type: "",
    lote: "",
    limit: "",
  });
  const [inputnumber, setinputNumber] = useState(0);

  const fetchAdress = () => {
    Api.get(`https://viacep.com.br/ws/${adressApi.cep}/json/`)
      .then((res) => {
        setadressApi({
          estado: res.data.uf,
          bairro: res.data.bairro,
          cidade: res.data.localidade,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addInput = () => {
    setinputNumber(inputnumber + 1);
  };

  const removeInput = () => {
    if (inputnumber > 0) {
      setinputNumber(inputnumber - 1);
    } else {
      console.log(inputnumber);
    }
  };

  return (
    <>
      <div className="crud">
        <br />
        <h3>Insira Um Evento</h3>
        <div className="row" id="input-group-insert">
          <div className="col" id="input-insert-event">
            <img
              src={evento.image ? evento.image : UndefinedImage}
              className="crud-event-image"
              alt="event"
            />
            <br />
            <br />

            <h3>Endereço do Evento</h3>
            <br />
            <div class="input-group mb-3">
              <input
                onBlur={fetchAdress}
                onChange={(e) => {
                  setadressApi({ ...adressApi, cep: e.target.value });
                }}
                type="text"
                aria-label="First name"
                class="form-control"
                placeholder="CEP"
              />
              <input
                value={adressApi.bairro}
                type="text"
                aria-label="Last name"
                class="form-control"
                placeholder="Bairro"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Rua e Número"
                onChange={(e) => {
                  setadressApi({ ...adressApi, rua: e.target.value });
                }}
              />
              <input
                value={adressApi.cidade}
                type="text"
                class="form-control"
                placeholder="Cidade"
              />
            </div>

            <br />
            <div id="date-picker-insert">
              <input
                placeholder="Data do evento"
                type="date"
                onChange={(e) => {
                  setdatePicker({ ...datepicker, data: e.target.value });
                }}
              />
              <input
                placeholder="Horario do Evento"
                type="time"
                onChange={(e) => {
                  setdatePicker({ ...datepicker, hour: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="col" id="input-insert-event">
            <h3>Dados do Evento</h3>
            <br />
            <div class="input-group mb-3">
              <input
                type="file"
                class="form-control"
                onChange={async (e) => {
                  const file = e.target.files[0];
                  const base64 = await convertBase64(file);
                  console.log(base64);
                  setEvento({ ...evento, image: base64 });
                }}
              />
            </div>
            <div class="input-group mb-1">
              <span class="input-group-text" id="inputGroup-sizing-default">
                <GiPartyPopper />
              </span>
              <input
                onChange={(e) => {
                  setEvento({ ...evento, name: e.target.value });
                }}
                type="text"
                class="form-control"
                placeholder="Nome do Evento"
              />
            </div>
            <div class="input-group mb-3">
              <textarea
                onChange={(e) => {
                  setEvento({ ...evento, description: e.target.value });
                }}
                rows={7}
                type="text"
                class="form-control"
                placeholder="Insira uma descrição para o evento"
              ></textarea>
            </div>
            <br />
            <h3>Tipos de Ingresso</h3>
            <hr />
            <div class="input-group mb-3">
              <input
                onChange={(e) => {
                  setprototypeIngresso({
                    ...prototypeingresso,
                    price: e.target.value,
                  });
                }}
                type="text"
                class="form-control"
                placeholder="Valor do Ingresso"
              />
              <input
                onChange={(e) => {
                  setprototypeIngresso({
                    ...prototypeingresso,
                    type: e.target.value,
                  });
                }}
                type="text"
                aria-label="First name"
                class="form-control"
                placeholder="Categoria (Pista, Camarote)"
              />
              <br />
              <br />
              <div class="input-group mb-3">
                <input
                  onChange={(e) => {
                    setprototypeIngresso({
                      ...prototypeingresso,
                      limit: e.target.value,
                    });
                  }}
                  type="number"
                  class="form-control"
                  placeholder="Limite de Ingressos"
                />
                <input
                  onChange={(e) => {
                    setprototypeIngresso({
                      ...prototypeingresso,
                      lote: e.target.value,
                    });
                  }}
                  type="number"
                  aria-label="First name"
                  class="form-control"
                  placeholder="lote"
                  onBlur={() => {
                    ingresso.push(prototypeingresso);
                    setprototypeIngresso({});
                  }}
                />
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                onChange={(e) => {
                  setprototypeIngresso({
                    ...prototypeingresso,
                    price: e.target.value,
                  });
                }}
                type="text"
                class="form-control"
                placeholder="Valor do Ingresso (opcional)"
              />
              <input
                onChange={(e) => {
                  setprototypeIngresso({
                    ...prototypeingresso,
                    type: e.target.value,
                  });
                }}
                type="text"
                class="form-control"
                placeholder="Categoria (opcional)"
              />
              <div class="input-group mb-3">
                <input
                  onChange={(e) => {
                    setprototypeIngresso({
                      ...prototypeingresso,
                      limit: e.target.value,
                    });
                  }}
                  type="number"
                  class="form-control"
                  placeholder="Limite de Ingressos (opcional)"
                />
                <input
                  onChange={(e) => {
                    setprototypeIngresso({
                      ...prototypeingresso,
                      lote: e.target.value,
                    });
                  }}
                  type="number"
                  class="form-control"
                  placeholder="Lote (opcional)"
                  onBlur={() => {
                    ingresso.push(prototypeingresso);
                    setprototypeIngresso({});
                  }}
                />
              </div>
            </div>
            {(() => {
              let inputs = [];
              for (let i = 0; i < inputnumber; i++) {
                inputs.push(
                  <>
                    <div class="input-group mb-3">
                      <input
                        onChange={(e) => {
                          setprototypeIngresso({
                            ...prototypeingresso,
                            price: e.target.value,
                          });
                        }}
                        type="text"
                        aria-label="First name"
                        class="form-control"
                        placeholder="Valor do Ingresso (opcional)"
                      />
                      <input
                        onChange={(e) => {
                          setprototypeIngresso({
                            ...prototypeingresso,
                            type: e.target.value,
                          });
                        }}
                        type="text"
                        aria-label="First name"
                        class="form-control"
                        placeholder="Categoria (opcional)"
                      />
                      <div class="input-group mb-3">
                        <input
                          onChange={(e) => {
                            setprototypeIngresso({
                              ...prototypeingresso,
                              limit: e.target.value,
                            });
                          }}
                          type="number"
                          aria-label="First name"
                          class="form-control"
                          placeholder="Limite de Ingressos (opcional)"
                        />
                        <input
                          onChange={(e) => {
                            setprototypeIngresso({
                              ...prototypeingresso,
                              lote: e.target.value,
                            });
                          }}
                          type="number"
                          aria-label="First name"
                          class="form-control"
                          placeholder="Lote (opcional)"
                          onBlur={() => {
                            ingresso.push(prototypeingresso);
                            setprototypeIngresso({});
                          }}
                        />
                      </div>
                    </div>
                  </>
                );
              }
              return inputs;
            })()}
            <div className="remove-add-insert">
              <AiOutlineMinusCircle
                onClick={removeInput}
                color="red"
                size={50}
                className="remove-add-insert-icons"
              />
              <AiOutlinePlusCircle
                onClick={addInput}
                color="green"
                size={50}
                className="remove-add-insert-icons"
              />
            </div>
            <button
              onClick={async () => {
                const apiKey = "vWWY8QAGe1r10wbBIvE86vFN9GS5tErF";
                const urlApi = `http://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}`;
                const getLocation = {
                  location: `${adressApi.rua}, ${adressApi.bairro}, ${adressApi.cidade}, ${adressApi.estado}`,
                  options: {
                    thumbMaps: false,
                  },
                };
                let latitude = null;
                let longitude = null;
                await axios
                  .post(urlApi, getLocation)
                  .then((response) => {
                    latitude = response.data.results[0].locations[0].latLng.lat;
                    longitude =
                      response.data.results[0].locations[0].latLng.lng;
                  })
                  .catch((error) => {
                    console.error(error);
                  });

                Api.patch("https://passporter.herokuapp.com/set-ingresso", {
                  empresa: empresa._id,
                  image: evento.image,
                  name: evento.name,
                  description: evento.description,
                  data: datepicker.data,
                  hour: datepicker.hour,
                  cep: adressApi.cep,
                  bairro: adressApi.bairro,
                  rua: adressApi.rua,
                  cidade: adressApi.cidade,
                  estado: adressApi.estado,
                  ingresso: ingresso,
                  latitude: latitude,
                  longitude: longitude,
                });
              }}
              className="btn btn-large btn-success"
              id="btn-insert-crud"
            >
              INSERIR EVENTO!
            </button>
          </div>
        </div>
      </div>
      <TableEvents empresa={empresa} />
    </>
  );
}

export default CRUD;
