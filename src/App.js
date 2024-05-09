import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Aboutus from "./pages/Aboutus"
import ScrollToTop from './components/scrolltotop/ScrolltoTop';

const App = () => {

  return (
    <>
    <Router>
    <ScrollToTop>
<Routes>
<Route path="/" element={<Home />}  /> 
<Route path="/contactus" element={<Contact/>} />
<Route path="/aboutus" element={<Aboutus/>} />
</Routes>
</ScrollToTop>
</Router>
    </>
  );
}

export default App;
