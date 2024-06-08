import React from "react";
import { Text } from "@nikitamallya/react-ui-components";
import { useState } from "react";
import "./App.css";
import "../src/assets/style/custom.scss";
import TextUtils from "./components/TextUtils";
import Alert from "./components/Alert";
function App() {
  const [alert, setAlert] = useState("");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  setTimeout(() => {
    setAlert("");
  }, 3000);
  return (
      <div className="App">
        <nav>
          <div className="container">
            <Text
              variant="h2"
              content="Textify Pro"
              color="white"
              className="pt-3 pb-2"
            />
          </div>
        </nav>
        <Alert alert={alert} />
        <div className="container">
          <TextUtils showAlert={showAlert} />
        </div>
      </div>
  );
}

export default App;
