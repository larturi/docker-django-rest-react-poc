
import React from 'react';

const GenreRow = ({genre}) => {
    return (
        <tr key={genre.id}>
            <td>{genre.id}</td>
            <td>{genre.name}</td>
        </tr>
    )
}

export default GenreRow;