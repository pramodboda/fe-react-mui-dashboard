import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayout";
import Dashboard_Home1 from "../pages/Dashboard_Home1";
import SitemapPage from "../pages/SitemapPage";
import NumbersPage from "../pages/NumbersPage";
import ButtonsPage from "../pages/components/ButtonsPage";
import ListsPage from "../pages/components/ListsPage";
// import Timelines from "../pages/utils/Timelines";
import TypographyPage from "../pages/components/TypographyPage";

// Define your routes here
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />, // This is like your "children"
    children: [
      { index: true, element: <Dashboard_Home1 /> },
      { path: "/components/buttons", element: <ButtonsPage /> },
      { path: "/components/lists", element: <ListsPage /> },
      { path: "/components/typography", element: <TypographyPage /> },

      { path: "/pages/sitemap", element: <SitemapPage /> },
      { path: "/pages/numbers", element: <NumbersPage /> },
      // { path: "/utils/timelines", element: <Timelines /> },
    ],
  },
]);

export default router;
