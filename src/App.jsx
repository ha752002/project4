/** @format */
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDefaultLayout from "./components/Layout/AdminDefaultLayout";
import WebDefaultLayout from "./components/Layout/WebDefaultLayout";
import { privateRoutes, publicRoutes } from "./routes";
import { Dashboard } from "@mui/icons-material";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* web minh an computer */}
          {publicRoutes.map((route, index) => {
            const { path, element, children } = route;
            return (
              <Route key={index} path={path}>
                {children.map((childRoute, childIndex) => {
                  let Layout = WebDefaultLayout;
                  return (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      element={<Layout>{childRoute.element}</Layout>}
                    />
                  );
                })}
              </Route>
            );
          })}

          {/* Admin Routes */}
          {privateRoutes.map((route, index) => {
            const { path, element, children } = route;
            return (
              <Route key={index} path={path}>
                {children.map((childRoute, childIndex) => {
                  let Layout = AdminDefaultLayout;
                  // console.log(childRoute.element);
                  return (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      element={<Layout>{childRoute.element}</Layout>}
                    />
                  );
                })}
              </Route>
            );
          })}
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
