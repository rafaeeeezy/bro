import React from 'react';
import PropTypes from 'prop-types'

const List = ({category = "Category", items = []}) => {

    // SORTING
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Ascending Text 
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //Descending Text 
    // fruits.sort((a, b) => a.calories - b.calories); //Ascending Number 
    // fruits.sort((a, b) => b.calories - a.calories); //Descending Number 
    
    // FILTERING
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); 
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = items.map(item => (
        <li key={item.id} className="hover:cursor-pointer my-1 w-max mx-auto">
            {item.name}:&nbsp;<b>{item.calories}</b>
        </li>
    ));

    return (
        <>
            <p className='text-3xl font-bold text-center p-1 mb-2 border-black border-4 rounded-lg bg-cyan-400 text-white'>
                {category}
            </p> 
            <ul className='text-2xl text-center list-none p-0 mb-4'>
                {listItems}
            </ul>
        </>
    );
};

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number, 
        name: PropTypes.string, 
        calories: PropTypes.number
    }))
}

export default List;
