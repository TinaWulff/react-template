import { createBrowserRouter } from 'react-router';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/login';
import List from './pages/List';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Tak from './pages/Tak';
import RequireAuth from './components/RequireAuth';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'list',
                element: (
                <RequireAuth>   
                    <List />
                </RequireAuth>
                ),


            },
            {
                path: 'list/:id',
                element: (
                <RequireAuth>   
                <Detail />
                </RequireAuth>
                ),
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'tak',
                element: <Tak />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);
export default router;