import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Index";
import MainBoard from "./components/Dashboard/MainBoard";
import Order from "./components/Order";
import Products from "./components/Product";
import Profile from "./components/Profile";
import Seles from "./components/SelesReport";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Error from "./components/Error/Index";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="bg-primary1">
      <div className="container bg-primary1 flex mx-auto min-h-screen">

        <div
          className={`absolute top-0 transition-all duration-200 ${
            isOpen ? "left-[0%]" : "left-[-100%]"
          } md:static`}
        >
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        
        <Routes>
          <Route path="/" element={<MainBoard toggleSidebar={toggleSidebar} />}>
            <Route path="/" index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="order" element={<Order />} />
            <Route path="product" element={<Products />} />
            <Route path="seles" element={<Seles />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
