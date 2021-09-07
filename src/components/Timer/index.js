import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [ timer, setTimer ] = useState(4)

    useEffect(() => {
        console.log('timer executed');
        console.log(timer);
        const countdown = () => setTimer(t => t - 1);

        // const print = () => console.log('timer executed');
        /* Creating an interval that calls the countdown function every 1 second (1000ms)*/
        const int = setInterval(countdown, 1000);
        /* Return the function you want trigger on clean up.
        In this case, I need to clear the interval */
        // return () => clearInterval(int);

    }, []);
}

export default Timer;
