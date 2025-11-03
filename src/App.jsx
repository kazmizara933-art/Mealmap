import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

// Pages
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import Progress from "./pages/Progress";
import MealPlan from "./pages/Mealplan";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Sare routes ek hi Layout ke andar */}
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />   {/* Landing = First Page */}
          <Route path="/home" element={<Home />} />   {/* Home = Dashboard */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/mealplan" element={<MealPlan />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
          {/* Catch-all to prevent client-side 404s */}
          <Route path="*" element={<Landing />} />
    
        </Route>
      </Routes>
    </Router>
  );
}

export default App;




