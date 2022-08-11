import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="SignIn" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
