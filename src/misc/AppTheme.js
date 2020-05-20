import { createMuiTheme } from "@material-ui/core/styles";

const scarlet = "#F42B03";
const orange_yellow ="#F4D06F";

const theme = createMuiTheme({
    palette:{
        primary:{
            main: scarlet,
        },
        secondary:{
            main: orange_yellow,
        }
    }
});
export default theme;