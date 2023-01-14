import {React, useState} from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import * as yup from "yup";

const initialState = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  toping3: false,
  topping4: false,
  text: ""
}



const App = () => {

const [form, setForm] = useState(initialState);

console.log(form);

const validateChange = (name, value)=>{
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setError({...error, [name]: ""})
      })
      .catch((error)=>{
        setError({...error, [name]: error.errors[0]})
      })
}

const formSchema = yup.object().shape({
  name: yup.string().min(2, "name must be at least 2 characters"),
  size: yup.boolean(),
  topping: yup.string(),
  text: yup.string()
})

const changeHandler = (e) => {
  const {name} = e.target;
  let {value} = e.target;
  validateChange(name, value);
  setForm({...form, [name]: value});
}


  const [error, setError] = useState({
    name: "",
    size: "",
    topping1: "",
    topping2: "",
    toping3: "",
    topping4: "",
    text: ""
})

  const handleSubmit = event => {
    event.preventDefault();

    fetch('https://reqres.in/api/orders', {
      method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h1>Homepage</h1>
        <header>
          <nav>
            <Link id="order-pizza" to="/pizza">Order Pizza</Link>
          </nav>
        </header>
      
      <Switch>
        <Route exact path="/">
          <div> Home </div>
        </Route>
        <Route exact path="/pizza" id="pizza">
          <form id="pizza-form" onSubmit={handleSubmit}>
            <label>
              <p>Name:
                <span>
                  {error.name}
                </span>
              </p>
              <input type="text" id="name-input" name="name" onChange={changeHandler}/>
            </label>
            <label>
              Size:
              <select onChange={changeHandler} id="size-dropdown" name="size">
                <option value="">Select</option>
                <option value="ittybittyteeny">ittybittyteeny</option>
                <option value="ittybitty">ittybitty</option>
                <option value="itty">itty</option>
              </select>
            </label>
            <label>
              Topping 1:
              <input type="checkbox" name="topping1"/>
            </label>
            <label>
              Topping 2:
              <input type="checkbox" name="topping2"/>
            </label>
            <label>
              Topping 3:
              <input type="checkbox" name="topping3"/>
            </label>
            <label>
              Topping 4:
              <input type="checkbox" name="topping4"/>
            </label>
            <label>
              Special Instructions:
              <input type="text" id="special-text" name="text"/>
            </label>
            <button type="submit" id="order-button">Submit</button>
          </form>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
