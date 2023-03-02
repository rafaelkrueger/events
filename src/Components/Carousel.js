import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Empty from "../Images/empty.png";

function Carousel({ eventos }) {
  const [pesquisa, setPesquisa] = useState("");
  const [current, setCurrent] = useState({
    link: "",
    image: "",
  });

  useEffect(() => {
    let start = 0;
    setInterval(() => {
      if (eventos.length > 0) {
        if (start === eventos[0]?.length) {
          start = 0;
        }
        setCurrent({
          link: eventos[0][start]?._id,
          image: eventos[0][start]?.image,
        });
        start++;
      }
    }, 1500);
  }, [eventos]);
  return (
    <>
      {eventos === undefined ? (
        ""
      ) : (
        <>
          <div id="carousel-component">
            <section className="slider">
              <Link to={`/eventos/${current?.link}`}>
                <img
                  id="carousel-image"
                  src={current?.image !== "" ? current?.image : Empty}
                  alt="evento mundial"
                />
              </Link>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default Carousel;
