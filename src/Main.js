import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Model from "./pages/Model/Model";
import Hero from "./pages/Hero/Hero";
import Apply from "./pages/Apply/Apply";
import Footer from "./pages/Footer/Footer";
import TheWorldOfMaserati from "./pages/TheWorldOfMaserati/TheWorldOfMaserati";

<<<<<<< HEAD
export class Main extends Component {
=======
class Main extends Component {
>>>>>>> 4d9f5d66aa2c4514b05890578f3060e405eca324
  render() {
    return (
      <div>
        <Nav />
        <Hero />
        <Model />
        <TheWorldOfMaserati />
        <Apply />
        <Footer />
      </div>
    );
  }
}

export default Main;
