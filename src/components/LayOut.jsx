import React from "react";
import NavBar from "./NavBar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="flex flex-col justify-between h-[100vh]">
            <NavBar />
            <Outlet />
            <Footer></Footer>
        </div>
    );
}
