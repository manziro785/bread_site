import {createBrowserRouter} from 'react-router-dom'
import { SignUp } from '../pages/sign up/sign-up.jsx';
import { MainPage } from '../pages/main-page/main-page.jsx';
import { LogIn } from '../pages/log in/log-in.jsx';
import { Check } from '/src/pages/check/check.jsx';
import { Manage } from '../pages/manage/manage.jsx';
import { NoPage } from '../pages/Nopage/nopage.jsx';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/login',
    element: <LogIn />
   
  },
  {
    path: '/registration',
    element: <SignUp />
  },
  {
    path: '/manage',
    element: <Manage />
  },

  {
    path: '/check',
    element: <Check />
  },
    {
    path: '/*',
    element: <NoPage />
  },
  
])