import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Biography } from './pages/Biography'
import { HistoricalContext } from './pages/HistoricalContext'
import { Philosophy } from './pages/Philosophy'
import { Works } from './pages/Works'
import { Influences } from './pages/Influences'
import { Legacy } from './pages/Legacy'
import { Theology } from './pages/Theology'
import { Sources } from './pages/Sources'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biografia" element={<Biography />} />
            <Route path="/contexto-historico" element={<HistoricalContext />} />
            <Route path="/pensamiento-filosofico" element={<Philosophy />} />
            <Route path="/obras-principales" element={<Works />} />
            <Route path="/influencias-recibidas" element={<Influences />} />
            <Route path="/influencias-ejercidas" element={<Legacy />} />
            <Route path="/influencias-teologia" element={<Theology />} />
            <Route path="/fuentes-referencias" element={<Sources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
