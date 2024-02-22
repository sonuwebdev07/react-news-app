import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/header/Header'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
      {/*India News*/}
      <Route exact path='/' element={<Home category="general" country="in" heading="General" />}/>
      <Route exact path='business' element={<Home category="business" country="in" heading="Business"/>}/>
      <Route exact path='entertainment' element={<Home category="entertainment" country="in" heading="Entertainment"/>}/>
      <Route exact path='health' element={<Home category="health" country="in" heading="Health"/>}/>
      <Route exact path='science' element={<Home category="science" country="in" heading="Science"/>}/>
      <Route exact path='sports' element={<Home category="sports" country="in" heading="Sports"/>}/>
      <Route exact path='technology' element={<Home category="technology" country="in" heading="Technology"/>}/>

      {/*USA News*/}

      <Route exact path='us' element={<Home category="general" country="us" />}/>
      <Route exact path='us-business' element={<Home category="business" country="us"/>}/>
      <Route exact path='us-entertainment' element={<Home category="entertainment" country="us"/>}/>
      <Route exact path='us-health' element={<Home category="health" country="us"/>}/>
      <Route exact path='us-science' element={<Home category="science" country="us"/>}/>
      <Route exact path='us-sports' element={<Home category="sports" country="us"/>}/>
      <Route exact path='us-technology' element={<Home category="technology" country="us"/>}/>

      </Routes>
      </BrowserRouter>
    </>
      
    
  )
}

export default App
