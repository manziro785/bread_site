import React, { createContext, useState } from 'react' 
import {RouterProvider} from 'react-router-dom'
import {router} from './app/index.js'
// import { UserContext } from './UserContext';

// export const UserContext = createContext();

const App = () => {
 
    return <RouterProvider router={router} />
  }
  
  export default App