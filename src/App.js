import React from 'react';
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import Title from "./components/Title";
import Desc from "./components/Desc";
import Gradient from "./components/Gradient";
import Contact from "./components/Contact";
import Faq from "./components/FAQ";
import Expectations from './components/Expectations';
import Timeline from './components/Timeline';
import Footer from './components/footer';

function App() {

  return (
    <>
      <Navbar/>
      <Slideshow/>
      <Title/>
      <Desc/>
      <Contact/>
      <Timeline/>
      <Expectations/>
      <Gradient/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
