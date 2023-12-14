/** @format */
import React, {Fragment, useEffect, useLayoutEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebDefaultLayout from "./components/Layout/WebDefaultLayout";
import { privateRoutes, publicRoutes } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from "./pages/common/NotFoundPage";
import {useDispatch} from "react-redux";
import {getUserInfo} from "./redux/slice/authSlice.js";
import {Home, SignIn, SignUp} from "./pages/index.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="*" exact={true} element={<NotFoundPage />} />
        <Route path="signup" exact={true} element={<SignUp/>} />
        <Route path="signin" exact={true} element={<SignIn/>} />
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
              <Route key={index} path={path} element={element}>
                {children.map((childRoute, childIndex) => {
                  return (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      element={childRoute.element}
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
        autoClose={900}
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
