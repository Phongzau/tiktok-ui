import config from '@config';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Following from '../pages/Following';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import DefaultLayout from '@src/layouts';
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
        path: config.routes.home,
        element: <App />,
        children: [
            { index: true, element: withLayout(DefaultLayout, Home) },
            { path: config.routes.following, element: withLayout(DefaultLayout, Following) },
            { path: config.routes.profile, element: withLayout(DefaultLayout, Profile) },
            { path: config.routes.upload, element: <Upload /> },
            { path: config.routes.search, element: <Search /> },
        ],
    },
]);

export default router;
