import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from "./Components/Login";
import Home from "./Components/Home";
import Search from "./Components/Search";

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
