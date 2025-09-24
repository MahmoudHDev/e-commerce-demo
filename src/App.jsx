import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import { useState } from 'react';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home.jsx";
import { Container } from 'react-bootstrap';
import SideBar from './components/Sidebar/SideBar.jsx';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Login from './pages/Login/Login.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Payment from './pages/Payment/Payment.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import PrivateRoute from './Router/PrivateRouter.jsx';
import Profile from './pages/Profile/Profile.jsx';

function App() {

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [selectedProducts, SetSelectedProducts] = useState(new Set());

  return (<>
    <Router>
      <AuthProvider>
        {/* Children */}
        <Header selectedProductsNumber={selectedProducts.length} />
        <SideBar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <Container>
          <Routes>
            <Route path="/" element={<Home category={selectedCategory === "all" ? "" : selectedCategory} />} />
            <Route path='/product/:id' element={<ProductDetails onSelectProducts={SetSelectedProducts} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart selectedProducts={selectedProducts} />} />

            <Route element={<PrivateRoute />}>
              <Route path='/profile/:profileID' element={<Profile />} />
              <Route path='/payment' element={<Payment />} />
            </Route>


            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
        {/* ## Children ## End */}

      </AuthProvider>
    </Router>
    <Footer />
  </>);
}

export default App;
