import React from "react";
import Header from "../components/Header";
import Nav from "../components/nav";
import QRScanner from "../utils/QRScanner";

export default function ScannerPage() {
  return (
    <>
      <Header />
      <QRScanner />
      <Nav />
    </>
  );
}
