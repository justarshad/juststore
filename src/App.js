import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import SingleProduct from './Components/Products/SingleProduct';
import Cart from './Components/Cart/Cart';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            < Route path='/' element={<Home />}></Route>
            < Route path='/product/:id' element={<SingleProduct />}></Route>
            < Route path='/cart' element={<Cart/>}></Route>
            < Route />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}
export default App;