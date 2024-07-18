'use client'
import MessageForm from './components/message-form'
import Header from './components/header'
import Hero from './components/hero'
import MainSection from './components/main-section'
import useSetReason from './hooks/use-set-reason'
import Footer from './components/footer'

export default function Home () {
  const { reason, setReason, REASONS } = useSetReason()

  return (
    <main className="w-full">
      <Header/>
      <Hero/>
      <MainSection setReason={setReason} REASONS={REASONS}/>
      {
        reason
          ? <MessageForm reason={reason} setReason={setReason}/>
          : ''
      }
      <Footer/>

    </main>

  )
}
