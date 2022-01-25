import "bootstrap/dist/css/bootstrap.min.css";
//import reactRouterDom from "react-router-dom";
//import {Button} from 'react-bootstrap'
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Shop from "./views/Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <h1>Fake store API</h1>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/Logout">
        <Logout />
      </Route>
      <Route path="/Shop">
        <Shop />
      </Route>
      
      </BrowserRouter>
    </div>

  );
}



export default App;
