import React from 'react';
import ArtistInfo from './components/Intro';
import List from './components/List.js';
import './style.css'

const App = () => {
    return (
      <main>
        <h1>Favourite Artist</h1>
        < ArtistInfo />
        < List />
      </main>
    );
  }

  export default App;
