import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navication";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Navigation theme={props.theme} title="View My Projects" to="/projects" />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
