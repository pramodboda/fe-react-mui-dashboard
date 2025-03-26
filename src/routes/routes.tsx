import { createBrowserRouter } from 'react-router-dom';

import DashboardLayout from '../layout/DashboardLayout';
import Dashboard_Home1 from '../pages/Dashboard_Home1';
import SitemapPage from "../pages/SitemapPage";

// Define your routes here
const router = createBrowserRouter([
    {
      path: '/',
      element: <DashboardLayout />, // This is like your "children"
      children: [
        { index: true, element: <Dashboard_Home1 /> },
        { path: 'sitemap', element: <SitemapPage /> },
      ],
    },
  ]);

export default router;