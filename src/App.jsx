import React from 'react'
import Header from './Components/Header';
import './App.css'
import MusicList from './Components/MusicList';
function App() {
  return (
       <div className="App">
      <Header img="https://cdn.pixabay.com/photo/2013/07/12/18/17/equalizer-153212_960_720.png" />
      <MusicList  />
    </div>
  )
}

export default App
