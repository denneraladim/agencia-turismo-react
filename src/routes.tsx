import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Contatos from "./Pages/Contatos";

<BrowserRouter>
  <Header />
  <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contatos" element={<Contatos />} />
    </Routes>
  </Container>
  <Footer />
</BrowserRouter>
