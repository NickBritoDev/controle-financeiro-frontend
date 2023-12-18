import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/admin/home/Home'
import NotFound from '../pages/public/navigators/404/NotFound'
import Signin from '../pages/public/signin/Signin'
import Signup from '../pages/public/signup/Signup'

export default function Routes () {
  const routing = useRoutes([
    {
      path: '/controle-financeiro-frontend',
      element: <Layout />,
      children: [
        { path: '', element: <Signin /> },
        { path: 'inscrever-se', element: <Signup/> },
        { path: 'home', element: <Home /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])

  return routing
}
