import React from "react";
import { Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Link to="/">Home</Link>
      <Link to="/pizza">Order Pizza</Link>

      <Route exact path="/">
        <button id="#order-pizza">Order Pizza</button>
      </Route>
      <Route path="/pizza">
        <form id="pizza-form">
          <label>
            Name:
            <input type="text" id="name-input"/>
          </label>
        </form>
      </Route>
    </div>
  );
};

export default App;
