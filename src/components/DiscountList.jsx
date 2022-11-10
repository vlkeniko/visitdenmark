import React from "react";
import heartlogo from "../heart-logo.svg";
export default function DiscountList() {
  return (
    <div className="discounts-list">
      <div className="discount-container">
        <div className="discount-title">Peter Gift</div>
        <div className="discount-offer">Buy 2 get 3 drinks offer</div>
        <div className="cost">
          <div>Cost:</div>
          <div value="30">30</div>
          <img
            src={heartlogo}
            alt="heart"
            style={{ width: "15px" }}
          />
        </div>
      </div>

      <div className="discount-container">
        <div className="discount-title">Peter Gift</div>
        <div className="discount-offer">Buy 2 get 3 drinks offer</div>
      </div>

      <div className="discount-container">
        <div className="discount-title">Peter Gift</div>
        <div className="discount-offer">Buy 2 get 3 drinks offer</div>
      </div>

      <div className="discount-container">
        <div className="discount-title">Peter Gift</div>
        <div className="discount-offer">Buy 2 get 3 drinks offer</div>
      </div>
    </div>
  );
}
