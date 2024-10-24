import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./layout/Home/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Preloader from './components/Preloader/Preloader'

function App() {

  
  return (
    <BrowserRouter>

      <Navbar />
      <Preloader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
