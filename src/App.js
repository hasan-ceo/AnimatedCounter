import React from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="container bg-dark text-center text-white">
      <div className="row">
        <div className="col">
          <h1>
            <Counter to="21590" />
          </h1>
          <h3>Facebook Follower</h3>
        </div>
        <div className="col">
          <h1>
            <Counter to="35750" />
          </h1>
          <h3>YouTube Follower</h3>
        </div>
        <div className="col">
          <h1>
            <Counter to="85200" />
          </h1>
          <h3>Instagram Follower</h3>
        </div>
        <div className="col">
          <h1>
            <Counter to="25740" />
          </h1>
          <h3>Active Client</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
