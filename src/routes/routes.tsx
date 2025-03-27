import { createBrowserRouter } from 'react-router-dom';

import DashboardLayout from '../layout/DashboardLayout';
import Dashboard_Home1 from '../pages/Dashboard_Home1';
import SitemapPage from "../pages/SitemapPage";
import ButtonsPage from '../pages/components/ButtonsPage';
import TimelinesAndRoadmaps from '../pages/utils/TimelinesAndRoadmaps';

// Define your routes here
const router = createBrowserRouter([
    {
      path: '/',
      element: <DashboardLayout />, // This is like your "children"
      children: [
        { index: true, element: <Dashboard_Home1 /> },
        { path: '/components/buttons', element: <ButtonsPage /> },
        { path: '/pages/sitemap', element: <SitemapPage /> },
        { path: '/utils/timelineandroadmaps', element: <TimelinesAndRoadmaps /> },
      ],
    },
  ]);

export default router;