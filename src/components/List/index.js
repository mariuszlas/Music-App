import React from 'react';
import { useState } from 'react';
import { Artist } from '../../pages';

const List = ( {albums, showAlbums } ) => {

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

    return (<>
        <button onClick={e => showAlbums(e)}>Show Albums</button>
        <table id="albums-table">
        <tbody>
            <tr>
                <th>Album Name</th>
                <th>Release Date</th>
                <th>Album Cover</th>
            </tr>
            <tr>
                <td>{albums[0].name}</td>
                <td>{albums[0].date}</td>
                <td><img src=""/></td>
                <td><button onClick={handleLike}>Like it</button></td>
            </tr>
            <tr>
                <td>{albums[1].name}</td>
                <td>{albums[1].date}</td>
                <td><img src=""/></td>
                <td><button onClick={handleLike}>Like it</button></td>
            </tr>
            <tr>
                <td>{albums[2].name}</td>
                <td>{albums[2].date}</td>
                <td><img src=""/></td>
                <td><button onClick={handleLike}>Like it</button></td>
            </tr>

            </tbody>
        </table>
        </>
    );
}

export default List;
