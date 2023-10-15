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
        <Route path="/marigolds" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="marigolds/services" element={<Services/>} />
          <Route path="marigolds/price" element={<Price/>} />
          <Route path="marigolds/portfolio" element={<Portfolio/>} />
          <Route path="marigolds/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
