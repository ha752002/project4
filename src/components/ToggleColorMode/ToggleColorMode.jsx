import React from "react";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


export default function ToggleColorMode() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <p>sssssss</p>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}