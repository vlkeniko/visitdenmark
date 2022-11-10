import React from 'react'
import Header from "../components/Header";
import Nav from '../components/nav'
import Places from '../components/Places'
import QRScanner from '../utils/QRScanner'

export default function HomePage() {
  return (
    <>
    <Header />
      <div>HomePage</div>
      <QRScanner />
      <Places />
      <Nav />
    </>
  );
}
