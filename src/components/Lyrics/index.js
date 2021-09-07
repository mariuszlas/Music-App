import React, { useEffect } from 'react';
import { useState } from 'react';

const Lyrics = () => {

    const [ lyrics, setLyrics ] = useState();
    const [ colors, setColor ] = useState(128);

    useEffect((lyrics) => {
        async function getLyrics() {
            const options = {
                headers: {"Content-Length":0,
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "text/html; charset=iso-8859-1"}
            };

            // const options = {
	        //     "method": "GET",
	        //     "headers": {
		    //         "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		    //         "x-rapidapi-key": "undefined"
	        //     }
            // }

            // let data = await fetch("https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime", options)
            // setLyrics(data)
            // let res = await data.json()
            // console.log(res);
        }
        getLyrics();
        console.log('timer executed');

        const countdown = () => {
            setColor(t => t + 100);
            console.log(colors);
            document.querySelector('body').style.background = `rgb(${colors}, ${colors}, ${colors})`;
            console.log('one second passed');
        };

        // const print = () => console.log('timer executed');
        /* Creating an interval that calls the countdown function every 1 second (1000ms)*/
        const int = setInterval(countdown, 1000);

    }, [])

    return (
        <p>Hello</p>
    )
}

export default Lyrics;
