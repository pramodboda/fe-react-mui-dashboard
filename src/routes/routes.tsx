import { createBrowserRouter } from "react-router-dom";
import SitemapPage from "../pages/SitemapPage"

const routes = createBrowserRouter([{ path: "/tickets", element: <SitemapPage /> }])

export default routes;