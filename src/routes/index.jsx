import routesConfig from '@config/routes';
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
        path: routesConfig.home,
        element: <App />,
        children: [
            { index: true, element: withLayout(DefaultLayout, Home) },
            { path: routesConfig.following, element: withLayout(DefaultLayout, Following) },
            { path: routesConfig.profile, element: withLayout(DefaultLayout, Profile) },
            { path: routesConfig.upload, element: <Upload /> },
            { path: routesConfig.search, element: <Search /> },
        ],
    },
]);

export default router;
