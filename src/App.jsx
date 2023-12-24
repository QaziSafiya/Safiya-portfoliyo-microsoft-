/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Safiya Siddiqui",
  title: "Frontend developer & Freelancer",
  email: "siddiquisafiya69@gmail.com",
  gitHub: "https://github.com/QaziSafiya",
  instagram: "https://www.instagram.com/webyatra_210?igsh=YWxkZzg2OHhzZ3N3",
  linkedIn: "https://www.linkedin.com/in/safiya-siddiqui-566009214/",
  medium: "",
  twitter: "https://x.com/Safiya85395?t=WyZWMltCD79DliOD3jjviA&s=09",
  youTube: "https://youtube.com/@Webyatra_with_safiya?si=7_6HByTMDW6ysSR",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
