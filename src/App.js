import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Product from './Product';
import Service from './Service';
import Personal from './Personal';
import Food from './Food';
import Home from './Home';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

function App() {
  return (
   
      <BrowserRouter>
      <AppHeader/>
       <Routes>
      <Route path="/product" element={<Product />} />
      <Route path="/service" element={<Service />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/home" element={<Home />} />
      <Route path="/food" element={<Food />} />

    </Routes>
    <AppFooter/>
      </BrowserRouter>
    
  );
}

export default App;
