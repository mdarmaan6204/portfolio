import About from "./componets/About";
import Body from "./componets/Body";
import Contact from "./componets/Contact";
import Error from "./componets/Error";
import Header from "./componets/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Projects from "./componets/Projects";
import Footer from "./componets/Footer";
import Dark from "./utilis/Dark";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const AppLayout = () => {
    return (
      <Dark.Provider value={{ darkMode: isDarkMode }}>
        <div>
          <Header toggleMode={handleClick} mode={isDarkMode} />
          <Outlet />
          <Footer />
        </div>
      </Dark.Provider>
    );
  };
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
