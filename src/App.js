import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);
  const apiKey = "pub_b20810a0c98d45398cafbe2be788d6c7"; // Replace with your actual API key

  const router = createBrowserRouter([
    {
      path: "/politics",
      element: (
        <>
          <Navbar />
          <News
            setProgress={setProgress}
            apiKey={apiKey}
            key="politics"
            country="pk"
            category="politics"
          />
        </>
      ),
    },
       {
      path: "/",
      element: (
        <>
          <Navbar />
          <News
            setProgress={setProgress}
            apiKey={apiKey}
            key="politics"
            country="pk"
            category="politics"
          />
        </>
      ),
    },
    {
      path: "/business",
      element: (
        <>
          <Navbar />
          <News
            setProgress={setProgress}
            apiKey={apiKey}
            key="business"
            country="pk"
            category="business"
          />
        </>
      ),
    },
    {
      path: "/sports",
      element: (
        <>
          <Navbar />
          <News
            setProgress={setProgress}
            apiKey={apiKey}
            key="sports"
            country="pk"
            category="sports"
          />
        </>
      ),
    },
    {
      path: "/health",
      element: (
        <>
          <Navbar />
          <News
            setProgress={setProgress}
            apiKey={apiKey}
            key="health"
            country="pk"
            category="health"
          />
        </>
      ),
    },
    {
      path: "/entertainment",
      element: (
        <>
          <Navbar />
          <News
            setProgress={setProgress}
            apiKey={apiKey}
            key="entertainment"
            country="pk"
            category="entertainment"
          />
        </>
      ),
    },
    {
      path: "/education",
      element: (
        <>
          <Navbar />
          <News
            setProgress={setProgress}
            apiKey={apiKey}
            key="science"
            country="pk"
            category="education"
          />
        </>
      ),
    },
    {
      path: "/technology",
      element: (
        <>
          <Navbar />
          <News
            setProgress={setProgress}
            apiKey={apiKey}
            key="technology"
            country="pk"
            category="technology"
          />
        </>
      ),
    },
  ]);

  return (
    <>

      <LoadingBar color="#f11946" progress={progress} />
      <RouterProvider router={router} />

    </>
  );
};

export default App;
