import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";
import Signup from "./pages/Login/Signup";
import Review from "./pages/Review/Review";
import Navbar from "./pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import MyAppointment from "./pages/Dashboard/MyAppointment";
import AllUsers from "./pages/Dashboard/AllUsers";
import AdminRoute from "./pages/Routes/AdminRoute/AdminRoute";
import { AddDoctor } from "./pages/Dashboard/AddDoctor";
import ManageDoctors from "./pages/Dashboard/ManageDoctors";
import Payment from "./pages/Dashboard/Payment";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route
            path="allUsers"
            element={
              <AdminRoute>
                <AllUsers />
              </AdminRoute>
            }
          />
          <Route
            path="addDoctor"
            element={
              <AdminRoute>
                <AddDoctor />
              </AdminRoute>
            }
          />
          <Route
            path="manageDoctors"
            element={
              <AdminRoute>
                <ManageDoctors />
              </AdminRoute>
            }
          />
          <Route
            path="payment/:id"
            element={<Payment />}
            // loader={({ params }) =>
            //   fetch(`http://localhost:5000/bookings/${params.id}`)
            // }
          />
        </Route>
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
