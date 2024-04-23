import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useOrder from "../../../hooks/useOrder";
import "./Response.css";
function Response() {
  const { loading, submitData } = useOrder();
  const currentUrl = window.location.href;
  console.log("Current URL:", currentUrl);

  function getQueryParam(url, param) {
    const queryParams = new URLSearchParams(url.split("?")[1]);
    return queryParams.get(param);
  }
  const message = getQueryParam(currentUrl, "message");
  console.log("Message:", message);

  useEffect(() => {
    if (message === "SUCCESS") {
      submitData({ orderId: "F1" });
    }
  }, [currentUrl]);

  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <h2>Transaction Details</h2>
      </div>
      <div className="transaction-details">
        <p>Transaction ID: 1234567890</p>
        <p>Date: April 23, 2024</p>
        <p>Amount: $50.00</p>
        <p>Status: Successful</p>
      </div>
      <Link to={"/cart"}>
        <div className="transaction-footer">
          <button className="btn-back">Back to Cart</button>
        </div>
      </Link>
    </div>
  );
}

export default Response;
