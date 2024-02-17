import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/homePage/homePage.jsx';
import { NoPage } from '../pages/NoPage/NoPage.jsx';
import { SignUp } from '../pages/SignupPage/SignUp.jsx';
import { LoginPage } from '../pages/loginPage/loginPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/login',
    element: <LoginPage />
    
  },
  {
    path: '/registration',
    element: <SignUp />
  },
  {
    path: '/*',
    element: <NoPage />
  }
])