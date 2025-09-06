
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import { Container } from 'react-bootstrap';
import SideBar from './components/Sidebar/SideBar.jsx';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';
import { useState } from 'react';
function App() {

  const [selectedCategory, setSelectedCategory] = useState("all");

  return (<>

    <BrowserRouter>
      <Header />
      <SideBar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <Container>
        <Routes>
          <Route path="/" element={<Home category={selectedCategory === "all" ? "" : selectedCategory} />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>

    <Footer />
  </>)
}

export default App
