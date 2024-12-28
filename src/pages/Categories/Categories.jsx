import React, { useContext,useState,useMemo } from 'react'
import '../Categories/Category.css'
import FoodItem from '../../components/FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'
import { useParams } from 'react-router-dom'; 
function Categories() {
    const { category } = useParams();  // Get category from the URL params
    const { food_list } = useContext(StoreContext);  // Get the food list from context
    
    // State for sorting and search
    const [sortOption, setSortOption] = useState("name");  // Sort by name (default)
    const [searchQuery, setSearchQuery] = useState("");  // Search query
  
    // Filter the list based on category and search query
    const filteredFoodList = useMemo(() => {
      return food_list.filter((item) => {
        const isInCategory = category === "All" || category === item.category;
        const isMatchingSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return isInCategory && isMatchingSearch;
      });
    }, [food_list, category, searchQuery]);
  
    // Sort the list based on the selected sorting option
    const sortedFoodList = useMemo(() => {
      if (sortOption === "price") {
        return [...filteredFoodList].sort((a, b) => a.price - b.price);  // Sort by price ascending
      } else if (sortOption === "name") {
        return [...filteredFoodList].sort((a, b) => a.name.localeCompare(b.name));  // Sort by name alphabetically
      }
      return filteredFoodList;  // No sorting
    }, [filteredFoodList, sortOption]);
  
    return (
      <div className='food-display' id='food-display'>
        <div className="category-header">
          <h2>{category}</h2>
  
          {/* Sort and Search Controls */}
          <div className="sort-search-container">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
  
            {/* Sort Dropdown */}
            <div className="sort-dropdown">
              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>
        </div>
  
        <div className='food-display-list'>
          {sortedFoodList.map((item) => (
            <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id} />
          ))}
        </div>
      </div>
    );
  }
export default Categories