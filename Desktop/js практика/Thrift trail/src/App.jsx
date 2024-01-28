// import React from "react";
// import "./App.css";
// import  MainPage  from "./pages/main-page/main-page.jsx";  



// function App() {
//   return (
//     <>
//       <MainPage />
//     </>
//   )
// }

// export default App

import React from 'react' 
import {RouterProvider} from 'react-router-dom'
import {router} from './app/index.js'


const App = () => {
 
    return <RouterProvider router={router} />
  }
  
  export default App