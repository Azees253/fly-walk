import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";
import { ToastContainer } from "react-toastify";

function App() {
  const url = "https://fly-walk-back-end.onrender.com";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <SideNavbar />

        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
