import './App.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import { useEffect, useState } from 'react';
import Homepage from './Pages/Homepage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import FrontPage from './Pages/FrontPage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Upload from './components/Upload coupon/Upload';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import Education from './Pages/Education';
// <<<<<<< HEAD


// >>>>>>> 69e1d9bc05e4f3f270c6192619653b38072a3517

function App() {
  const [userName, setUsername] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName)
      }
      else {
        setUsername("")
      }
      console.log(user)
    })
  }, [])
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Homepage />} name={userName} />
          <Route path="/frontpage" element={<FrontPage />} />

          <Route path="/upload" element={<Upload />} />

          <Route path='/about' element={<About />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/categories/education' element={<Education />} />

        </Routes>
      </div>
      <div className='fixed-bottom right-100 p-3' style={{ zIndex: "6", left: "initial" }}>
        <a href="https://wa.me/9021190242?text=Hello%20How%20can%20I%20help%20you%20?" target='_blank'>
          <Tippy content={"Need Help? Chat with us"} placement='left'>
          <img src="whasapp.png" alt="" width={"90"} />
          </Tippy>
        </a>


      </div>
    </>
  );
}

export default App;
