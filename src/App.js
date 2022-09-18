import { ThemeProvider, createTheme } from "@mui/material/styles";
import Dashboard from "./Dashboard"

import Form from "./Form";
// import Register from "./Register";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#E60023",
    },
    ternery: {
      main: "#6a6a6a"
    }
  },
};
const theme = createTheme(themeOptions);
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Form /> */}
        {/* <Register /> */}
        <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
