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
            <Route path="/details/:productId" element={<PrivateRoute>
              <Details></Details>
            </PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
