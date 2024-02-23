import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />

      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
  );
  //return React.createElement("footer", null, "We're curremtly Open");
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
