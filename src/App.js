import React from 'react';
import { Routes, Route}  from"react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Shop from './components/Shop'
import Register from './components/Register'
import Login from './components/Login';
import ProtectedRoutes from './components/protectedRoutes';
import ProtectedAuthRoutes from './components/ProtectedAuthRoutes';
import ProductDetails from './components/ProductDetails';
import Dashboard from './components/Dashboard';
import ProductCreate from './components/ProductCreate';

const App = () => {
   
        return (
            <>
            
                <Header/>
                        

                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route element={<ProtectedRoutes/>}>
                            <Route path='/shop' element ={<Shop />}></Route>
                            <Route path='/about' element ={<About />}></Route>
                            <Route path='/contact' element ={<Contact />}></Route>
                            <Route path='/dashboard' element ={<Dashboard />}></Route>
                            <Route path='/createProduct' element ={<ProductCreate />}></Route>
                            <Route path="/products/:id" exact element={<ProductDetails/>}/>
                        </Route >
                        <Route element={<ProtectedAuthRoutes/>}>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>

                        </Route>

                    </Routes>
                
            </>
            )
  
}

export default App
