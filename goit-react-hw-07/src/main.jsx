import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import App from "./components/app/App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <App />
  </Provider>
);
