import { createBrowserRouter } from 'react-router';
import Layout from './Layout';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


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
                element: <List />,
            },
            {
                path: 'list/:id',
                element: <Detail />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);
export default router;