import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Price from "./pages/Price";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="services" element={<Services/>} />
          <Route path="price" element={<Price/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
