import React from "react";

export default function DiscountProgress() {
  return (
    <>
      <div>DiscountProgress</div>

      <progress id="file" max="100" value="70">
        {" "}
        70%{" "}
      </progress>
    </>
  );
}
