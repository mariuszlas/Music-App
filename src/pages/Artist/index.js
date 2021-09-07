import React from 'react'
import { List, Intro, Lyrics, Timer } from '../../components';
import { useState } from 'react';

const Artist = () => {

    const [ albums, setAlbums ] = useState([
        {
            name: 'Sometimes I Sit and Think, and Sometimes I Just Sit',
            date: '20 March 2015'
        },
        {
            name: 'Tell Me How You Really Feel',
            date: '18 May 2018'
        },
        {
            name: 'Things Take Time, Take Time',
            date: '12 November 2021'
        }
    ])

    const showAlbums = (e) => {
        e.preventDefault();
        const albumsTable = document.querySelector("#albums-table")
        albumsTable.style.display = "block";
    }

    const showAlbumsFromIntro = () => {
        console.log('show albums from intro');
    }

    return (
      <main>
        <h1>Favourite Artist</h1>
        < Intro />
        < List albums={albums}/>
        < Lyrics />
      </main>
    );
  }

export default Artist;
