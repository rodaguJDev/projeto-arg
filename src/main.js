import "./css/app.css";
import { setupCounter } from "./js/counter.js";
import app from "./pages/index.js";

document.querySelector("#app").innerHTML = app;

setupCounter(document.querySelector("#counter"));
