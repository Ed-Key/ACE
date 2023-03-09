import { useRef } from "react";
import logo from './ACE_logo2_1.svg';
// import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";

function Navbar() {
  const navRef = useRef();
  
  // function to smoothly scroll to target element when link is clicked
  const scrollToTarget = (target) => {
    const targetElement = document.querySelector(target);
    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: "smooth"
    });

  }

  return (
    <header>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" onClick={() => scrollToTarget("#home")}>
        <img src={logo} alt="Logo" />
      </a>
      <nav ref={navRef}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={() => scrollToTarget(".Desc-1")}>about</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={() => scrollToTarget(".contact")}>contact</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={() => scrollToTarget(".Faq-container")}>faq</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="https://tufts.qualtrics.com/jfe/form/SV_6DVbaKLGYQef8G2" 
           className="apply-btn"
        >
            apply
        </a>
      </nav>
    </header>
  );
}

export default Navbar;