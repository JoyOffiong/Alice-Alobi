import './App.css';
import LandingPage from './main/LandingPage';
import ContactUs from './main/ContactUs';
// import LandingPage from './main/LandingPage';
import Services from './main/Services';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<LandingPage />}></Route>

    {/* <Route path="/about-us" element={<AboutUs />}></Route> */}

    <Route path="/contactUs" element={<ContactUs />}></Route>
    <Route path="/services" element={<Services />}></Route>
</Routes  >
  );
}

export default App;
