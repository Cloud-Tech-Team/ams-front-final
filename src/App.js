//packages
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//components
import Form from "./nri/Form";
// import { Pdf } from "./Pdf";
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
import Search from "./Admin/Pages/Search"
import Personal from "./nri/Personal"
import Payment from "./nri/Payment"
import Education from "./nri/Education";
import Declaration from "./nri/Declaration";
import { Verification } from "./nri/Verification";
import Supernumery from "./nri/Supernumery"
import Nri from "./Admin/Pages/Nri";
import Supnumery from "./Admin/Pages/Supernumery"
import Mgmt from "./Admin/Pages/Mgmt";
// import NPersonal from "./nri/nPersonal";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#E60023",
    },
    ternery: {
      main: "#6a6a6a"
    },
    greenary: {
      main: "#2fc32f"
    },
    blue: {
      main: "#0080ff"
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
            <Routes>
              <Route element={<Home/>} path='/' exact/>
              <Route element={<Login/>} path='/login' exact/>
              <Route element={<Adminlogin/>} path='/adminlogin' exact/>
              <Route element={<Register/>} path='/register' exact/>
              <Route element={<PrivateRoutes/>}>
                <Route element = {<Supernumery/>} path = '/supernumery' exact/>
                <Route element={<Dashboard/>} path='/dashboard' exact/>
                <Route element={<Form/>}>
                  <Route element={<Personal/>} path="/nriform" exact/>
                  <Route element={<Education/>} path="/nriform/education" exact/>
                  <Route element={<Declaration/>} path="/nriform/declaration" exact/>
                  <Route element={<Verification/>} path="/nriform/verification" exact/>
                  <Route element={<Payment/>} path="/nriform/payment" exact/>
                </Route>
              </Route>
              <Route element={<ProtectedRoutes/>}>
                <Route element={<Admin/>}>
                  <Route element={<HomePage/>} path="/admin" exact/>
                  <Route element={<Nri/>} path="/admin/nri" exact/>
                  <Route element={<Supnumery/>} path="/admin/super" exact/>
                  <Route element={<Mgmt/>} path="/admin/mgmt" exact/>
                  <Route element={<CoAdmin/>} path="/admin/coadmin" exact/>
                  <Route element={<Settings/>} path="/admin/settings" exact/>
                  <Route element={<Search/>} path="/admin/search" exact/>
                </Route>
              </Route>
            </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
