import React, { useState } from "react";
import PaymentChoose from "../Components/PaymentChoose";
import PurchaseInfo from "../Components/PurchaseInfo";
function Purchase({ ticket, setTicket, user, setUser }) {
  const [filled, setFilled] = useState(true);
  const [confirmedInfo, setConfirmedInfo] = useState(false);
  return (
    <>
      <div className="purchase">
        {!confirmedInfo ? (
          <PurchaseInfo
            ticket={ticket}
            confirmedInfo={confirmedInfo}
            setConfirmedInfo={setConfirmedInfo}
            newuser={user}
            setnewUser={setUser}
          />
        ) : (
          <PaymentChoose
            filled={filled}
            setFilled={setFilled}
            confirmedInfo={confirmedInfo}
            setConfirmedInfo={setConfirmedInfo}
            newuser={user}
            setnewUser={setUser}
          />
        )}
      </div>
    </>
  );
}

export default Purchase;
