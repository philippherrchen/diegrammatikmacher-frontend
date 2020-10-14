import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#000000",
      main: "#000000",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#fedfad",
      //main: "#fdd491",
      main: "#eb6234",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#4090a1",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      default: "#a9a9a9",
    },
  },
  overrides: {
    MUIRichTextEditor: {
      root: {
        marginTop: 20,
        marginBottom: 20,
      },
      editor: {
        borderBottom: "1px solid gray",
      },
    },
  },
});

export default theme;
