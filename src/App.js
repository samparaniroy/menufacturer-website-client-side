import './App.css';
import Navbar from './components/Shared/Navbar';
import { Routes, Route} from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Notfound from './components/Pages/Notfound/Notfound';
import ProductDetail from './components/Pages/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
