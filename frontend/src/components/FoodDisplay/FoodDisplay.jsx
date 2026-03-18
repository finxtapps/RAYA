import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    const visibleFoods = category === 'All'
        ? food_list
        : food_list.filter((item) => item.category === category);

    return (
        // <div className='food-display' id='food-display'>
        //     <h2>Top dishes near you</h2>
        //     <div className='food-display-list'>
        //         {visibleFoods.map((item) => (
        //             <FoodItem
        //                 key={item._id}
        //                 id={item._id}
        //                 name={item.name}
        //                 description={item.description}
        //                 price={item.price}
        //                 image={item.image}
        //                 averageRating={item.averageRating || 0}
        //             />
        //         ))}
        //     </div>
        // </div>
        <div>
            
        </div>
    );
};

export default FoodDisplay;
