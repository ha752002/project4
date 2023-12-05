import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import {Experimental_CssVarsProvider as CssVarsProvider} from "@mui/material/styles";
import theme from "./theme.js";
import GlobalStyles from "./components/GlobalStyles/AdminGlobalStyles";
import "./tailwind.css";
import {Provider} from "react-redux";
import {store} from "./redux/store.js";
import Loading from "./components/Loading/Loading.jsx";
import {ThemeProvider} from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <ThemeProvider>
            <Provider store={store}>
                <Loading/>
                <GlobalStyles>
                    <CssVarsProvider theme={theme}>
                        <CssBaseline/>
                        <App/>
                    </CssVarsProvider>
                </GlobalStyles>
            </Provider>
        </ThemeProvider>
    </>
);
