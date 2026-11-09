import { useCallback, useState } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Showcase } from './components/sections/Showcase'
import { Services } from './components/sections/Services'
import { Portfolio } from './components/sections/Portfolio'
import { About } from './components/sections/About'
import { Process } from './components/sections/Process'
import { Contact, type ServiceSelection } from './components/sections/Contact'
import { WhatsappFloat } from './components/ui/WhatsappFloat'
import { SideRails } from './components/layout/SideRails'
import type { ProjectType } from './data/services'

export default function App() {
  const [selection, setSelection] = useState<ServiceSelection | null>(null)

  // "Tenho interesse" → leva ao formulário com o tipo de projeto já selecionado
  const handleInterest = useCallback((type: ProjectType) => {
    setSelection({ type, nonce: Date.now() })
    const target = document.getElementById('formulario-orcamento') ?? document.getElementById('contato')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', '#contato')
  }, [])

  return (
    <>
      <a
        href="#conteudo"
        className="fixed top-3 left-3 z-[60] -translate-y-20 rounded-lg bg-violet px-4 py-2 text-sm font-medium text-white transition focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Showcase />
        <Services onInterest={handleInterest} />
        <Portfolio onInterest={handleInterest} />
        <About />
        <Process />
        <Contact selection={selection} />
      </main>
      <Footer />
      <WhatsappFloat />
      <SideRails />
    </>
  )
}
