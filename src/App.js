import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import SnakeGame from "./components/SnakeGame";
import { useSwipeable } from "react-swipeable";

function App() {
  const [generalSwipeHandlers, setGeneralSwipeHandlers] = useState({});

  const swipeHandlers = useSwipeable(generalSwipeHandlers);
  return (
    <div className="App" {...swipeHandlers}>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SnakeGame setGeneralSwipeHandlers={setGeneralSwipeHandlers}/>
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;
