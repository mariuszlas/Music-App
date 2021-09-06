import React from 'react';
import { useState } from 'react';

const List = () => {

    const [status, setLikeStatus] = useState(false);

    const handleLike = e => {
        e.stopPropagation()
        setLikeStatus(!status)
        const row = e.target.closest('tr');
        if (status) {
            row.style.color = "red";
        } else {
            row.style.color = "black";        
        }
    }

    return (<table>
            <tr>
                <th>Album Name</th>
                <th>Release Date</th>
                <th>Album Cover</th>
            </tr>
            <tr>
                <td>Sometimes I Sit and Think, and Sometimes I Just Sit</td>
                <td> 20 March 2015</td>
                <td><img src=""/></td>
                <td><button onClick={handleLike}>Like it</button></td>
            </tr>
            <tr>
                <td>Tell Me How You Really Feel</td>
                <td>18 May 2018</td>
                <td><img src=""/></td>
                <td><button onClick={handleLike}>Like it</button></td>
            </tr>
            <tr>
                <td>Things Take Time, Take Time</td>
                <td>12 November 2021</td>
                <td><img src=""/></td>
                <td><button onClick={handleLike}>Like it</button></td>
            </tr>
        </table>
    );
}

export default List;
