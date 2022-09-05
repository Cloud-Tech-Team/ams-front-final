import { ThemeProvider, createTheme } from "@mui/material/styles";
import Form from "./Form";
import Register from "./Register";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#E60023",
    },
  },
};
const theme = createTheme(themeOptions);
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Form />
        {/* <Register /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
