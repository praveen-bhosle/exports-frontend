import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.tsx'
import LandingPage from './components/LandingPage.tsx'
import Signin from './components/Signin.tsx'
import Signup from './components/Signup.tsx'
import AppLayout from './layouts/AppLayout.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import About from './components/About.tsx'
import Products from './components/Products.tsx'
import VerifyEmail from './components/VerifyEmail.tsx'
import AuthLayout from './layouts/AuthLayout.tsx'
import Checkout from './components/Checkout.tsx'
import Addresses from './components/Addresses.tsx'
import Account from './components/Account.tsx'
import Orders from './components/Orders.tsx'
import Order from './components/Order.tsx'
import VerifyEmail2 from './components/VerifyEmail2.tsx'
import ForgotPassword from './components/ForgotPassword.tsx'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<RootLayout />} >
            <Route index path="" element={<LandingPage />} />
            <Route path="about" element={<About />} />
            <Route path="app" element={<AppLayout />} >
              <Route index path="" element={<Products />} />
              <Route path="account" element={ <Account />     } />
              <Route path="checkout" element= { <Checkout/>  } /> 
              <Route path="addresses" element={ <Addresses/> } /> 
              <Route path='orders' element= {<Orders /> } /> 
              <Route path='order' element={<Order /> } />
            </Route>
          </Route>
          <Route path="/auth"  element = { <AuthLayout/>} >
            <Route path="login" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path='verifyEmail' element =  { <VerifyEmail/> } />
            <Route path='verifyEmail2' element = { <VerifyEmail2 />  }/> 
            <Route path='forgotPassword' element = { <ForgotPassword/> } /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
