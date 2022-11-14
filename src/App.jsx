import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Page from "./components/Page"
import Navbar from "./components/Navbar"
import SingleCountry from "./components/SingleCountry"


function App() {
 

  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Page/>}/>
          <Route path='/:name' element={<SingleCountry/>}/>
        </Routes>
      </Router>
      </>
  )
}

export default App
