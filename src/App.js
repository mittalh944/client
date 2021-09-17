import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navigationbar from "./components/Navigationbar/Navigationbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigationbar />
        <Switch>
          <Route exact path="/"></Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
