import './App.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import Compo from './components/Compo'
import Header from './components/Header'
import Footer from './components/Footer'
import User2 from './playground/User2'
import DomRef from './playground/ref/DomRef'
import MutableRef from './playground/ref/MutableRef'

// prettier-ignore
// import { About, AuthBox, AuthGit, Footer, Home, Navbar, OneRestaurant, Restaurants } from './components'

function App() {
  return (
    <Router>
      <div className="ns_box bg-lime-100 flex flex-col h-screen justify-between">
        <Header />
        <div className="bg-lime-100  flex  flex-col mb-auto p-3 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/compo' element={<Compo />} />
            <Route path='/user' element={<User2 />} />
            <Route path='/ref' element={<DomRef />} />
            <Route path='/mutref' element={<MutableRef />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
