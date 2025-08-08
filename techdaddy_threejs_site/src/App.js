import React from "react";
import { Canvas } from "@react-three/fiber";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <h1>Empower Your Digital Presence with Tech Daddy</h1>
      </header>
      <Canvas style={{ height: "400px" }}>
        <Hero />
      </Canvas>
    </div>
  );
}

export default App;