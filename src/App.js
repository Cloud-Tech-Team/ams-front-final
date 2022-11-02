//packages
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//components
import Form from "./nri/Form";
import { Pdf } from "./Pdf";
import Dashboard from "./Dashboard"
import Register from "./Register";
import PrivateRoutes from "./components/PrivateRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./Login";
import Home from "./components/Home";
import Adminlogin from "../src/Admin/Adminlogin";
import Admin from "../src/Admin/Admin"
import HomePage from "./Admin/Pages/HomePage";
import Settings from "./Admin/Pages/Settings"
import CoAdmin from "./Admin/Pages/CoAdmin"


const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#E60023",
    },
    ternery: {
      main: "#6a6a6a"
    },
    white:{
      main:'#ffffff'
    }
  },
};
const theme = createTheme(themeOptions);
function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          {/* <Form /> */}
          {/* <Register /> */}
          {/* <Dashboard /> */}
          {/* <Pdf /> */}
            <Routes>
              <Route element={<Home/>} path='/' exact/>
              <Route element={<Login/>} path='/login' exact/>
              <Route element={<Adminlogin/>} path='/adminlogin' exact/>
              <Route element={<Register/>} path='/register' exact/>
              <Route element={<PrivateRoutes/>}>
                <Route element={<Form/>} path='/nriform' exact/>
                <Route element={<Dashboard/>} path='/dashboard' exact/>
              </Route>
              <Route element={<ProtectedRoutes/>}>
                <Route element={<Admin/>}>
                  <Route element={<HomePage/>} path="/admin" exact/>
                  <Route element={<CoAdmin/>} path="/admin/nri" exact/>
                  <Route element={<Settings/>} path="/admin/settings" exact/>
                </Route>
              </Route>
            </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
