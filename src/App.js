import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Cart from "./Cart";
function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <>
          <Header />
          <Login />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Header />
          <Cart />
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
