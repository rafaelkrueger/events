import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Profile({ user, setUser }) {
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="row">
          <div className="col">
            <h3>{user?.name === undefined ? "" : user?.name}</h3>
            <h4>{user?.username === undefined ? "" : user?.username}</h4>
            <hr />
            <h5>{user?.email === undefined ? "" : user?.email}</h5>
            <h5>{user?.number === undefined ? "" : user.number}</h5>
          </div>
          <div className="col">
            <h3>Seus Ingressos</h3>
            <hr />
            {user?.ingressos == undefined ? (
              <h3>'Você não tem ingressos'</h3>
            ) : (
              user?.ingressos.map((list) => {
                return <></>;
              })
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
