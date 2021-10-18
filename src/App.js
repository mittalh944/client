import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navigationbar from "./components/Navigationbar/Navigationbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Culture from "./pages/Culture/Culture";
import Cultures from "./pages/Cultures/Cultures";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigationbar />

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <ProtectedRoute
            path="/cultures"
            Component={Cultures}
          ></ProtectedRoute>

          <ProtectedRoute path="/culture" Component={Culture}></ProtectedRoute>

          <ProtectedRoute path="/" Component={Home}></ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
