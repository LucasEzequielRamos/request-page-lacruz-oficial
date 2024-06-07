'use client'
import MessageForm from './components/message-form'
import Header from './components/header'
import Hero from './components/hero'
import MainSection from './components/main-section'
import { useState } from 'react'

export default function Home () {
  const [motif, setMotif] = useState<string>('')

  return (
    <main className="w-full">
      <Header/>
      <Hero/>
      <MainSection setMotif={setMotif}/>
      {
        motif !== ''
          ? <MessageForm motif={motif} setMotif={setMotif}/>
          : ''
      }
    </main>

  )
}
