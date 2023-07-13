import React from "react";
import ReactDOM from "react-dom/client";

import { AppRoutes } from "config/routes/index.tsx";
import "stylesheets/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
