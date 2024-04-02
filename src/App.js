import './App.css';
// import Upload from './components/Upload coupon/Upload';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import FrontPage from './Pages/FrontPage';
import About from './Pages/About';

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
<<<<<<< HEAD
=======
      {/* <Upload/> */}
>>>>>>> 9abe44cd3cbf384fc3f28a0be21d8e521faf9591
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Homepage />} name={userName} />
        <Route path="/frontpage" element={<FrontPage />} />
<<<<<<< HEAD
        <Route path="/upload" element={<Upload />} />
=======
        <Route path='/about' element={<About />} />
>>>>>>> 9abe44cd3cbf384fc3f28a0be21d8e521faf9591

      </Routes>
    </div>
  );
}

export default App;
