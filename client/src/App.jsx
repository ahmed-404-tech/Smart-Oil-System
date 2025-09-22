import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/Login";
import { PrivateRoute, PublicRoute } from "./auth/auth";
import Users from "./pages/Users";
import Oils from "./pages/oil/Oils";
import AddOil from "./pages/oil/AddOil";
import EditOil from "./pages/oil/EditOil";
import Customers from "./pages/customers/Customers";
import AddCustomer from "./components/customers/AddCustomer";
import Receipt from "./pages/Receipt";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            index
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          <Route
            path="/oils"
            element={
              <PrivateRoute>
                <Oils />
              </PrivateRoute>
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRoute>
                <Customers />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-customer"
            element={
              <PrivateRoute>
                <AddCustomer />
              </PrivateRoute>
            }
          />
          <Route
            path="/print-receipt/:id"
            element={
              <PrivateRoute>
                <Receipt />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-oil"
            element={
              <PrivateRoute>
                <AddOil />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-oil/:id"
            element={
              <PrivateRoute>
                <EditOil />
              </PrivateRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
