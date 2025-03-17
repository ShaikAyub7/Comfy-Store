import ErrorElement from "./components/ErrorElement";
import {
  About,
  Orders,
  Register,
  Landing,
  SingleProduct,
  Products,
  Login,
  HomeLayout,
  Error,
  Checkout,
  Cart,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as LandingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as ProductsLoader } from "./pages/Products";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products",
        element: <Products />,
        loader: ProductsLoader,
      },
      {
        element: <Landing />,
        index: true,
        loader: LandingLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: SingleProductLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
