import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  const navigate = useNavigate();

  const handleCategoryClick = (itemName) => {
    setCategory((prev) => (prev === itemName ? "All" : itemName));  // Toggle the category
    navigate(`/category/${itemName}`);  // Navigate to the category page
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our dishes</h1>
      <p className='explore-menu-text'>Satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => handleCategoryClick(item.menu_name)}  // Trigger the category click handler
            key={index}
            className='explore-menu-list-item explore-menu-list-item1'
          >
            <img
              src={item.menu_image}
              className={category === item.menu_name ? "active" : ""}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ExploreMenu
