import About from "./componets/About";
import Body from "./componets/Body";
import Contact from "./componets/Contact";
import Error from "./componets/Error";
import Header from "./componets/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Projects from "./componets/Projects";
import Footer from "./componets/Footer";

function App() {
  const AppLayout = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer/>
      </div>
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
