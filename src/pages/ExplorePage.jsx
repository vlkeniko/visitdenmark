import React from 'react'
import Nav from '../components/nav'
import Places from '../components/Places'
import { useState } from 'react'
import QRScanner from '../utils/QRScanner'

export default function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <QRScanner />
      <Nav/>
      <Places/>
    </>
  )
}
