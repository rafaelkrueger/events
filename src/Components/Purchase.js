import React, { useState } from "react";
import PaymentChoose from "./PaymentChoose";
function Purchase({ ticket, setTicket }) {
  const [filled, setFilled] = useState(true);
  return (
    <>
      <div className="purchase">
        {/* <PurchaseInfo ticket={ticket} /> */}
        <PaymentChoose filled={filled} setFilled={setFilled} />
      </div>
    </>
  );
}

export default Purchase;
