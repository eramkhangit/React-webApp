// import { useState } from 'react'
import Header from "./Components/Header"
import './App.css'
import Banner from "./Components/Banner"
import Experts from "./Components/Experts"
import NewsLetter from "./Components/NewsLetter"
import Plans from "./Components/Plans"
import Footer from "./Components/Footer"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Header/> 
     <Banner/>
     <Experts/>
     <NewsLetter/>
     <Plans/>
     <Footer/>
    </>
  )
}

export default App
