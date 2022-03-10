import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import AboutUs from './Components/About Us/AboutUs';
import Explore from './Components/Explore/Explore';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Details from './Components/ProductDetails/Details';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from '../src/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute';
import OrderReview from './Components/OrderReview/OrderReview';
import Dashboard from './Components/DashBoard/Dashboard';
import MyOrders from './Components/DashBoard/MyOrders/MyOrders';
import AddAReview from './Components/DashBoard/AddAReview/AddAReview';
import ManageOrders from './Components/DashBoard/ManageOrders/ManageOrders';
import AddAProduct from './Components/DashBoard/ManagePrducts/AddAProduct';
import MakeAnAdmin from './Components/DashBoard/MakeAnAdmin/MakeAnAdmin';
import ManageProduct from './Components/DashBoard/ManagePrducts/ManageProduct';
import AdminRoute from './Components/PrivateRoutes/AdminRoute';
import Shipping from './Components/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/home' element={<Home></Home>} />
            <Route path="/exploreshop" element={<Explore></Explore>} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shipping" element={<PrivateRoute><Shipping />
            </PrivateRoute>
            } />
            <Route path="/details/:productId" element={<PrivateRoute>
              <Details></Details>
            </PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path="myorders" element={<PrivateRoute>
                <MyOrders />
              </PrivateRoute>} />
              <Route path="" element={<PrivateRoute>
                <MyOrders />
              </PrivateRoute>} />
              <Route path="addareview" element={<PrivateRoute>
                <AddAReview />
              </PrivateRoute>} />
              <Route path="manageorders" element={<AdminRoute>
                <ManageOrders />
              </AdminRoute>} />
              <Route path="addaproducts" element={<AdminRoute>
                <AddAProduct />
              </AdminRoute>} />
              <Route path="makeadmin" element={<AdminRoute>
                <MakeAnAdmin />
              </AdminRoute>} />
              <Route path="manageproducts" element={<AdminRoute>
                <ManageProduct />
              </AdminRoute>} />
            </Route>
            <Route path="/review" element={<OrderReview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
