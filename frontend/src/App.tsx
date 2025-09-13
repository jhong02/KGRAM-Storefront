// src/App.tsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Splash from "./pages/Splash";
import "./styles/globals.css";

function SiteLayout() {
  return (
    <>
      <Header />
      <Outlet /> {/* <-- renders Home/Login */}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Splash without header */}
        <Route path="/" element={<Splash />} />

        {/* Pages with header */}
        <Route element={<SiteLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
