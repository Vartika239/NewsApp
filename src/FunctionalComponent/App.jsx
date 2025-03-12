import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Home"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function App(){
  let [language,setLanguage]=useState("hi")
  let [search,setSearch]=useState("")

  function changeLanguage(input){
    setLanguage(input)

  }
  function changeSearch(input){
    setSearch(input)

  }
 
 
    return (
      <BrowserRouter>
      <Navbar changeLanguage={changeLanguage}  changeSearch={changeSearch}/>
      <Routes>
        <Route  path="" element={<Home language={language} search={search} q="All"/>} />
        <Route  path="/All" element={<Home language={language} search={search} q="All"/>} />
        <Route  path="/Politics" element={<Home language={language} search={search} q="Politics"/>} />
        <Route  path="/Crime" element={<Home language={language} search={search} q="Crime"/>} />
        <Route  path="/Science" element={<Home language={language} search={search} q="Science"/>} />
        <Route  path="/Sports" element={<Home language={language} search={search} q="Sports"/>} />
        <Route  path="/Technology" element={<Home language={language} search={search} q="Technology"/>} />
        <Route  path="/IPL" element={<Home language={language} search={search} q="IPL"/>} />
        <Route  path="/Cricket" element={<Home language={language} search={search} q="Cricket"/>} />
        <Route  path="/India" element={<Home language={language} search={search} q="India"/>} />
        <Route  path="/Entertainment" element={<Home language={language} search={search} q="Entertainment"/>} />
        <Route  path="/International" element={<Home language={language} search={search} q="International"/>} />
        <Route  path="/Jokes" element={<Home language={language} search={search} q="Jokes"/>} />
     
    
      </Routes>
      <Footer />
      </BrowserRouter>
    )
  }

