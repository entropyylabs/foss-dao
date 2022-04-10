import "./App.css";
import { useEffect } from "react";
import { InitSwAuth } from "@skill-wallet/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Assets/logo.png";

import Nav from "./Components/Nav";
import Home from "./Pages/Home";

function App() {
  useEffect(() => {
    InitSwAuth();
  }, []);
  return (
    <div className="App">
      <Nav />
      <div className="homepage">
        <img
          src={logo}
          alt=""
          className="logo"
          style={{ height: "376px", width: "1306" }}
          srcset=""
        />
      </div>

      {/* <Home /> */}
    </div>
  );
}

export default App;
