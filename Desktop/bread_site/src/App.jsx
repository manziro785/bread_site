import './App.css'
import React, { useState } from 'react' 
import {RouterProvider} from 'react-router-dom'
import {router} from './app/index.js'


const App = () => {
 
  return <RouterProvider router={router} />
}

export default App