import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { menu_list } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import './ExploreMenu.css';

const ExploreMenu = ({ category, setCategory }) => {
    const navigate = useNavigate();
    const { food_list, addToCart, setSelectedDay } = useContext(StoreContext);

    const handleDayClick = (dayName) => {
        // Set the selected day in context
        setSelectedDay(dayName);

        // Navigate to cart
        navigate('/cart');
    };

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Choose form a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dinning experience, one delicious meal at a time.</p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => handleDayClick(item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu