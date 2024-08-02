import './App.css';
import Sign from './Components/Sign';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState({ email: '', password: '' });

  return (
    <>
      <Sign setUserData={setUserData} userData={userData} />
    </>
  );
}

export default App;
