
import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer, Header } from './components/Index'

function App() {

  return (
    <>
    <Header />
    <Outlet />
    <Footer />

    </>
  )
}

export default App
