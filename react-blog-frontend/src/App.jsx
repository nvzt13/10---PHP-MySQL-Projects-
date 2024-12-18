import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import Blogs from './components/Blogs.jsx'
import CreateBlog from './components/CreateBlog.jsx'
function App() {
  return (
    <>
        <div className="bg-dark text-center">
         <h1 className="text-light py-3">React-Laravel Blog Site</h1>
        </div>
        <Routes>
            <Route path='/' element={ <Blogs />}/>
            <Route path='/create' element={ <CreateBlog />}/>
        </Routes>
        
    </>
  )
}

export default App