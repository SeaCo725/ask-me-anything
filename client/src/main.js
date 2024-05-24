import React from "react";
import { render } from "react-dom";

import App from "./components/App";
import config from "./config";
import RedBox from "redbox-react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

document.addEventListener("DOMContentLoaded", () => {
  let reactElement = document.getElementById("app");

  if (reactElement) {
    if (config.nodeEnv === "development") {
      try {
        render(<App />, reactElement);
      } catch (e) {
        render(<RedBox error={e} />, reactElement);
      }
    } else {
      render(<App />, reactElement);
    }
  }
});
