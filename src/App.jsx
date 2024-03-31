import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from "./homePage/Homepage";
import Aboute from "./aboutePage/Aboute";
import Blogs from "./blogsPage/Blogs";
import Projects from "./projectsPage/Projects";
import Resume from "./resumePage/resume";
import PhotoGallery from "./photoGallery/Photogallery";
import "../src/Components/allbbuttoncss/btn.css"

function App() {
  const route = createBrowserRouter([
    { path: '/', element: <Homepage /> },
    { path: '/aboute-me', element: <Aboute /> },
    { path: '/my-blogs', element: <Blogs /> },
    { path: '/my-projects', element: <Projects /> },
    { path: '/my-resume', element: <Resume /> },
    { path: '/my-photo-gallery', element: <PhotoGallery /> },


  ]);
  return (
    <div className='App'>
    <RouterProvider router={route}></RouterProvider>
  </div>
    
  );
}

export default App;
