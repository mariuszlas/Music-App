import React, {useState} from 'react';
import list from './List'

const artistInfo = () => {
    const [artist, setArtist] = useState 
    ([
    {name: 'Courtney Barnett', 
    genre: "indie-rock", 
    about: `Courtney Melba Barnett (born 3 November 1987) is an Australian singer, songwriter, and musician. 
    Known for her deadpan singing style and witty, rambling lyrics, she attracted attention with the release of her debut EP I've Got a Friend Called Emily
     Ferris in 2012. International interest came with the release of her EP The Double EP: A Sea of Split Peas in 2013
    Barnett's debut album Sometimes I Sit and Think, and Sometimes I Just Sit was released in 2015 to widespread acclaim. 
    At the 2015 ARIA Music Awards, she won four awards from eight nominations. She was nominated for Best New Artist at the 58th Annual Grammy Awards and International Female Solo Artist at the 2016 Brit Awards.[3][4] She released Lotta Sea Lice, a collaborative album with Kurt Vile, in 2017.[5][6] She released her second album Tell Me How You Really Feel to further acclaim in 2018.[7] Barnett's third studio album Things Take Time, Take Time is scheduled for release in November 2021.`}
    ])

    return (
        <table>
            <thead>Courtney Barnett</thead>
            <tr><td>Artist Name</td><td>{artist.name}</td></tr>
            <tr><td>Artist Genre</td><td>{artist.genre}</td></tr>
            <tr><td>About</td><td>{artist.about}</td></tr>
            <tr><td>{list}</td></tr>
        </table>
    );
    
};

export default artistInfo;