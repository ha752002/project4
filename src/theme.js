import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { teal, deepOrange, cyan, orange } from '@mui/material/colors';


// Create a theme instance.

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: teal,
                secondary: deepOrange,
            },
            spacing: (factor) => `${0.25 * factor}rem`,
        },
        dark: {
            palette: {
                primary: cyan,
                secondary: orange,
            },
            spacing: (factor) => `${0.25 * factor}rem`,

        },
    },
});


export default theme;