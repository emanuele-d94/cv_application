import {StrictMode, useState} from 'react'
import '../styles/App.css'
import Toolbar from "./Toolbar.jsx";
import Cv from "./Cv.jsx";

function App() {

  const [profilePicture, setProfilePicture] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrb4OvIZOz-Z2RvlJ0xDl1E_e3qOfh_TQK1va1Z7gJ4g&s=10');
  const [description, setDescription] = useState('Description');
  const [education, setEducation] = useState([]);

  return (
      <StrictMode>
          <div className="app">
              <h1 className="app-header">CV APPLICATION</h1>
              <Toolbar setProfilePicture={setProfilePicture} setDescription={setDescription} setEducation={setEducation} />
              <Cv profilePicture={profilePicture} description={description} education={education} />
          </div>
      </StrictMode>
  )
}

export default App
