import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Add from './components/Post'
import Accaunt from './components/Accaunt'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/accaunt' element={<Accaunt/>}/>
          <Route element={<PrivateRoute/>}>
              <Route path='/'  element={<SignUp/>}/>
          </Route>
          <Route path='/add' element={<Add/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App
