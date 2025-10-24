import React from 'react'
import NavBar from "./components/NavBar.js";
import Hero from './components/Hero.jsx';
import {ProductViewer} from "./components/ProductViewer.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
       <main>
           <NavBar />
          <Hero />
           <ProductViewer />
       </main>
    )
}
export default App

