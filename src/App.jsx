/** @format */
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDefaultLayout from "./components/Layout/AdminDefaultLayout";
import WebDefaultLayout from "./components/Layout/WebDefaultLayout";
import { privateRoutes, publicRoutes } from "./routes";
// import Register from "./admin/UserManagement/Register";
// import Login from "./admin/UserManagement/Login";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* web minh an computer */}
          {publicRoutes.map((route, index) => {
            let Layout = WebDefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}

          {/*Admin */}
          {privateRoutes.map((route, index) => {
            let Layout = AdminDefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
                // <Layout>
                //   <Page />
                // </Layout>
              />
            );
          })}
        </Routes>
      </div>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </Router>
  );
}

export default App;
