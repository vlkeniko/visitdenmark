import React from 'react'
import Places from '../components/Places';
import Attractions from '../components/Attractions';
import Activities from '../components/Activities'
import Events from '../components/Events'
import Header from "../components/Header";
import Nav from '../components/nav'
// import Places from '../components/Places'
// import QRScanner from '../utils/QRScanner'

export default function ExplorePage() {
  return (
    <>
    <Header />
      {/* <QRScanner /> */}
      <Attractions/>
      <Places/>
      <Activities/>
      <Events/>
      <Nav />
    </>
  );
}