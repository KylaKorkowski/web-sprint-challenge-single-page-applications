import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().required("name required").min(2, "name must be at least 2 characters"),
  size: yup.string(),
  toppings: yup.string(),
  text: yup.string()
})

const App = () => {

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Homepage</h1>
        <header>
          <nav>
            <Link id="#order-pizza" to="/pizza">Order Pizza</Link>
          </nav>
        </header>
      
      <Switch>
        <Route exact path="/">
          <div> Home </div>
        </Route>
        <Route exact path="/pizza" id="pizza">
          <form id="pizza-form" onSubmit={event => handleSubmit(event)}>
            <label>
              Name:
              <input type="text" id="name-input" name="name"/>
            </label>
            <label>
              Size:
              <input type="dropdown" id="size-dropdown" name="size"/>
            </label>
            <label>
              Toppings:
              <input type="checkbox" id="toppings-checklist" name="toppings"/>
            </label>
            <label>
              Special Instructions:
              <input type="text" id="special-text" name="text"/>
            </label>
              <button>Submit</button>
          </form>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
