import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import { useEffect } from "react";
import Homepage from "./Pages/Homepage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import FrontPage from "./Pages/FrontPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Upload from "./components/Upload coupon/Upload";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import Education from "./Pages/Education";
import EducationUpload from "./components/EducationUpload/EducationUpload";
import Food from "./Pages/Food";
import FoodUpload from "./components/FoodUpload/FoodUpload";
import Clothing from "./Pages/Clothing";
import ClothUpload from "./components/ClothUpload/ClothUpload";


function App() {
  const [userName, setUsername] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUsername(user ? user.displayName : "");
    });
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Homepage />} name={userName} />
          <Route path="/frontpage" element={<FrontPage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories/education" element={<Education />} />
          <Route
            path="/categories/education/educationupload"
            element={<EducationUpload />}
          />
          <Route path="/categories/food" element={<Food />} />
          <Route path="/categories/food/foodupload" element={<FoodUpload />} />
          <Route path="/categories/clothings" element={<Clothing />} />
          <Route
            path="/categories/clothings/clothupload"
            element={<ClothUpload />}
          />
        </Routes>
      </div>

    </>
  );
}

export default App;
