import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import styles from "./DefaultLayout.module.scss";
import Header from "../AdminComponents/Header";
import Sidebar from "./Sidebar";
import clsx from "clsx";
import { Outlet } from "react-router-dom";

export default function AdminDefaultLayout(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container className={clsx(styles.container)}>
            <Grid item xs={12} md={isMobile ? 12 : 2}>
                <Sidebar />
            </Grid>
            <Grid item xs={12} md={isMobile ? 12 : 10} className={clsx(styles.container)}>
                <Header />
                {/*{console.log(props)}*/}
                <div className={clsx(styles.content)}>
                    <Outlet />
                </div>
            </Grid>
        </Grid>
    );
}
