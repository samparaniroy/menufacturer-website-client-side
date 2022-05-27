import './App.css';
import Navbar from './components/Shared/Navbar';
import { Routes, Route} from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Notfound from './components/Pages/Notfound/Notfound';
import ProductDetail from './components/Pages/ProductDetail/ProductDetail';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyOrders from './components/Pages/Dashboard/MyOrders/MyOrders';
import AddReview from './components/Pages/Dashboard/AddReview/AddReview';
import MakeAdmin from './components/Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProduct from './components/Pages/Dashboard/ManageProduct/ManageProduct';
import AllOrders from './components/Pages/Dashboard/AllOrders/AllOrders';
import AddNewProduct from './components/Pages/Dashboard/AddNewProduct/AddNewProduct';
import Blogs from './components/Pages/Blogs/Blogs';
import MyPortfolio from './components/Pages/MyPortfolio/MyPortfolio';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageproduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='allorders' element={<AllOrders></AllOrders>}></Route>
          <Route path='addnewproduct' element={<AddNewProduct></AddNewProduct>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
