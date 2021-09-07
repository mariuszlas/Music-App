import React from 'react'
import { List, Intro } from '../../components';
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

    return (
      <main>
        <h1>Favourite Artist</h1>
        < Intro />
        < List albums={albums}/>
      </main>
    );
  }

export default Artist;
