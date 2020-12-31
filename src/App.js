import React from "react";
import Button from "./Components/button/Button";
import Card from "./Components/card/Card";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>I generate Fake Data</h2>
      <Button btnName="Click me" />
      <br />
      <Card />
    </div>
  );
}
