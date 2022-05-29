import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import FrontendLayout from './layout/FrontendLayout'
import SideDrawer from './components/SideDrawer';
import BackDrop from './components/BackDrop';
import { useState } from 'react';

function App() {

  const [sideToggle,setSideToggle] = useState(false);
  return (
   <div>
      <Router>
      <Navbar  eventSide={()=> setSideToggle(true)} />
      <SideDrawer show={sideToggle} eventSide={()=> setSideToggle(false)} />
      <BackDrop show={sideToggle} eventSide={()=> setSideToggle(false)} />
        <main>
        <Routes>
          <Route element={<FrontendLayout /> }>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
        </main>
    </Router>
   </div>
  );
}

export default App;
