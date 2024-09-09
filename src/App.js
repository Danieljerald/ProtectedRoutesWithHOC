import logo from './logo.svg';
import './App.css';
import SearchUsers from './UserList';
import SearchTodos from './TodoList';
import { AuthProvider } from './authContext';
import {  createBrowserRouter, Route, RouterProvider, Routes , Navigate } from "react-router-dom";
import Login from './login/login';
import ProtectedDashboardPage from './DashboardPage';


function App() {
    const routes = createBrowserRouter([
      {
        path:"/",
        element:<Navigate to="/login"/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/dashboard",
        element:<ProtectedDashboardPage/>
      }

    ]) 


  return (
    <div className="App">
      {/* <SearchUsers/>
      <SearchTodos/> */}
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
