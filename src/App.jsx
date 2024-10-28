import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Layout from './layouts/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import { servicesData } from './servicesData';
import Services from './pages/Services';
import AdminLayout from "./layouts/AdminLayout";
import HomeEditor from "./components/editor_components/HomeEditor";
import AboutEditor from "./components/editor_components/AboutEditor";
import ContactEditor from "./components/editor_components/ContactEditor";
import GalleryEditor from "./components/editor_components/GalleryEditor";
import ProjectsEditor from "./components/editor_components/ProjectsEditor";
import LayoutsEditor from "./components/editor_components/LayoutsEditor";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'gallery', element: <Gallery /> },
        { path: 'projects', element: <Projects /> },
        {
          path: 'services',
          element: <Services />,
          children: [
            {
              path: ':serviceSlug', // Use `:serviceSlug` instead of `:serviceId`
              element: <Services />,
            },
          ],
        },
      ],
    },

    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        { path: '', element: <HomeEditor /> },
        { path: 'layouts', element: <LayoutsEditor /> },
        { path: 'home', element: <HomeEditor /> },
        { path: 'about', element: <AboutEditor /> },
        { path: 'contact', element: <ContactEditor /> },
        { path: 'gallery', element: <GalleryEditor /> },
        { path: 'projects', element: <ProjectsEditor /> },
        {
          path: 'services',
          element: <Services />,
          children: [
            {
              path: ':serviceSlug', // Use `:serviceSlug` instead of `:serviceId`
              element: <Services />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
