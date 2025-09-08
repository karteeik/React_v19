import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Movie } from "./Pages/Movie";
import { AppLayout } from "./Components/Layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./Pages/ErrorPage";
import { GetMovieData } from "./Api/GetData";

const App = () => {
  // new way to use react-router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetMovieData,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        // {
        //   path: "*",
        //   element: <ErrorPage /> 
        // }
      ],
    },
  ]);

  // old way
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/movie" element={<Movie />} />
  //       <Route path="/about" element={<About />} />
  //     </Route>
  //   )
  // );

  return <RouterProvider router={router} />;
};

export default App;
