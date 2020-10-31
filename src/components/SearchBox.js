import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input className='pa2 bg-light-yellow'
            type='search'
            placeholder='search robots' 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;