import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import { SearchProvider } from "./context/SearchContext";
import { ButtonStateProvider } from "./context/ButtonStateProvider";
import Contact from "./components/Contact";
import About from "./components/About";


function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <ButtonStateProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </ButtonStateProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
