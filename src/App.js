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
import { Upload } from 'lucide-react';
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
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Homepage />} name={userName} />
        <Route path="/frontpage" element={<FrontPage />} />

        <Route path="/upload" element={<Upload />} />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />



      </Routes>
    </div>
  );
}

export default App;
