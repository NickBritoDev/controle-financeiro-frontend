import React from 'react'
import { useRoutes } from 'react-router-dom'
import { checkAuth } from '../auth/checkAuth'
import Admin from '../layout/Admin'
import Public from '../layout/Public'
import Home from '../pages/admin/home/Home'
import NotAuthorized from '../pages/public/navigators/401/NotAuthorized'
import NotFound from '../pages/public/navigators/404/NotFound'
import Signin from '../pages/public/signin/Signin'
import Signup from '../pages/public/signup/Signup'

export default function Routes() {
    const routing = useRoutes([
        {
            path: 'ControleFinanceiro/admin',
            element: <Admin />,
            children: [
                {
                    path: 'home',
                    element: checkAuth() ? <Home /> : <NotAuthorized />
                }
            ]
        },
        {
            path: '/ControleFinanceiro/public',
            element: <Public />,
            children: [
                { path: 'entrar', element: <Signin /> },
                { path: 'inscrever-se', element: <Signup/> },
                { path: '*', element: <NotFound /> }
            ]
        }
    ])

    return routing
}
