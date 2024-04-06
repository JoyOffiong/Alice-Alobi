import "./App.css";
import LandingPage from "./main/LandingPage";
import { Route, Routes } from "react-router-dom";
import TeachingsOnMarriage from "./main/sundaySchoolComponents/TeachingsOnMarriage";
import ContactUs from "./main/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/contact-us" element={<ContactUs />}></Route>

      <Route
        path="/marriage/the-reason-for-the-Institution-called-Marriage"
        element={<TeachingsOnMarriage />}
      ></Route>
    </Routes>
  );
}

export default App;
