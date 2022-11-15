import React from "react";
import DiscountDescription from "../components/DiscountDescription";
import DiscountList from "../components/DiscountList";
import DiscountProgress from "../components/DiscountProgress";
import Header from "../components/Header";
import Nav from "../components/nav";
export default function DiscountPage() {
  return (
    <>
      <Header />
      <DiscountProgress />
      <DiscountDescription />
      <DiscountList />
      <Nav />
    </>
  );
}
