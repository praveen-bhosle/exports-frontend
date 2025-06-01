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
import Profile from './components/Profile.tsx'
import Products from './components/Products.tsx'
import VerifyEmail from './components/VerifyEmail.tsx'


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
              <Route path="products" element={<Products />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="/auth"  >
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path='verifyEmail' element =  { <VerifyEmail/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
