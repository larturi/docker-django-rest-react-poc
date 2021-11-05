
   
import React from 'react'
import GenreRow from './GenreRow';

const titles = [
    '#',
    'Name',
]

const GenresTable = ({genres}) => {

    return (
        <table className='table mt-4 table-hover table-responsive w-25'>
            <thead>
                <tr>
                    {
                        titles.map((title, index) => (
                            <td key={index}>{title}</td>
                        ))
                    }
                </tr>
            </thead>

            <tbody>
                {
                    genres.map((genre, index) => (
                        <GenreRow genre={genre} key={index} /> 
                    ))
                }
            </tbody>
        </table>
    )
}

export default GenresTable;