import React, { useState } from 'react'


export default function SortByName({ onSortChange }) {
    const [sortType, setSortType] = useState('');

    const handleChange = (e) => {
        setSortType(e.target.value);
        if (onSortChange) onSortChange(e.target.value);


    }
    return (
        <div className='flex justify-end mb-4'>
            <select className='border rounded  py-1 text-[15px]' value={sortType}
                onChange={handleChange}>
                <option className='border' value="A_TO_Z">Name (A to Z)</option>
                <option className='border' value="Z_TO_A">Name (Z to A)</option>
                <option className='border' value="LOW_TO_HIGH">Price (Low to High)</option>
                <option className='border' value="HIGH_TO_LOW">Price(High to Low)</option>
            </select>

        </div>
    )
}
