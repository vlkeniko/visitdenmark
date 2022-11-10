import React from "react";
import DiscountDescription from "../components/DiscountDescription";
import DiscountList from "../components/DiscountList";
import Header from "../components/Header";
import Nav from "../components/nav";
export default function DiscountPage() {
  return (
    <>
      <div>DiscountPage</div>
      <Header />
      <DiscountDescription />
      <DiscountList />
      <Nav />
    </>
  );
}
