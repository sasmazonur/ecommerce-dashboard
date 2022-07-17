import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home"
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import NewUser from "./pages/newuser/NewUser"
import ProductList from "./pages/productList/Productlist"
import Product from "./pages/product/Product"
import NewProduct from "./pages/newproduct/NewProduct"

import './app.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/users' element={<UserList/>} />
          <Route path='/user/:userId' element={<User/>} />
          <Route path='/newuser' element={<NewUser/>} />
          <Route path='/products' element={<ProductList/>} />
          <Route path='/product/:productId' element={<Product/>} />
          <Route path='/newproduct' element={<NewProduct/>} />
        </Routes>
        </div>
      </Router>
  );
}

export default App;
