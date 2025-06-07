import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Following from '../pages/Following';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { DefaultLayout } from '@components/Layout';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

function withLayout(Layout, Page) {
    return (
        <Layout>
            <Page />
        </Layout>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: withLayout(DefaultLayout, Home) },
            { path: '/following', element: withLayout(DefaultLayout, Following) },
            { path: '/:nickname', element: withLayout(DefaultLayout, Profile) },
            { path: '/upload', element: <Upload /> },
            { path: '/search', element: <Search /> },
        ],
    },
]);

export default router;
