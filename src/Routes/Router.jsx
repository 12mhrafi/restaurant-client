import * as React from "react";

import {
  createBrowserRouter,
} from "react-router-dom";
import Root from './../Layout/Root';
import Error from './../Error/Error';
import Home from "../Page/Home/Home";
import AllFood from "../Page/AllFood/AllFood";
import Blog from "../Page/Blog/Blog";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import AddFood from "../Page/AddFood/AddFood";
import MyAddedFood from "../Page/MyAddedFood/MyAddedFood";
import SingleFoodDetails from "../Page/AllFood/AllSingleFood/SingleFoodDetails/SingleFoodDetails";
import FoodPurchase from "../Page/FoodPurchase/FoodPurchase";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyOrder from "../Page/MyOrder/MyOrder";
import UpdatePage from "../Page/MyAddedFood/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        index: true ,
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/allFood",
        element:<AllFood></AllFood>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/addFood",
        element:<AddFood></AddFood>
      },
      {
        path:"/myAddedFood",
        element:<MyAddedFood></MyAddedFood>
      },
      {
        path:"/singleFoodDetails/:id",
        loader:({params}) => fetch(`http://localhost:5000/singleFoodDetails/${params.id}`),
        element:<SingleFoodDetails></SingleFoodDetails>
      },
      {
        path:"/foodPurchase/:id",
        loader:({params})=> fetch(`http://localhost:5000/singleFoodDetails/${params.id}`),
        element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>
      },
      {
        path:"/myOrder",
        element:<MyOrder></MyOrder>
      },
      {
        path:"/updateFood/:id",
        loader:({params})=>fetch(`http://localhost:5000/singleFoodDetails/${params.id}`),
        element:<UpdatePage></UpdatePage>
      }
    ]
  },
]);

export default router;