 import { useState } from "react"
 import './App.css'
 
 
 
 
 import Header from "./components/Header";
 import About from "./components/About";
 import Experiance from "./components/Experiance";
 import Education from "./components/Education";
 import Skill from "./components/Skill";
 import Project from "./components/Project";
 import Contact from "./components/Contact";
 import Navbar from "./components/Navbar";

function App() {
 
  return (
    <div className="flex items-center justify-center w-full min-h-screen antialiased">
    <main className="flex flex-col max-w-3xl min-h-screen px-5 py-10 space-y-10 sm:py-20 sm:px-10">
                      <Header/>
                      <About/>
                      <Experiance/>
                      <Education/>
                      <Skill/>
                      <Contact/>
                      <Project/>
                      <Navbar/>


    </main>                  
       
         
         
    </div>
  )
}

export default App
