import "./App.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";

const isLogin = false;

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        {/* <Route path="/login" component={Login}/> */}
        <Route
          path="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/profile/:id" component={Profile}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
