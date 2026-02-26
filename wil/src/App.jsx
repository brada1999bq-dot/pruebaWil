import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="color-header">
        <div className="header-block red">Créditos</div>
        <div className="header-block green">Proyecto Wil</div>
      </header>
      <section className="credits-section">
        <h1 className="credits-title">Página de Créditos</h1>
        <div className="credits-list">
          <div className="credit-item">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <div>
              <h2>Wilder tu papa diomedes</h2>
              <p>Desarrollador Principal prueba de wilder </p>
            </div>
          </div>
          <div className="credit-item">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <div>
              <h2>Equipo Vite</h2>
              <p>Framework Frontend</p>
            </div>
          </div>
        </div>
        <footer className="credits-footer">
          <p>© 2026 Proyecto Wil. Todos los derechos reservados.</p>
        </footer>
      </section>
    </>
  )
}

export default App
