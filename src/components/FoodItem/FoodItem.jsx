import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';
import { Link } from 'react-router-dom';

const FoodItem = ({ image, name, price, desc , id }) => {

    const [itemCount, setItemCount] = useState(0);
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

    return (
        <div className='food-item'>
           
            <div className="food-item-info">
            <p className="food-item-desc">{desc}</p>
            
            <p className="food-item-price">{name}</p>
                <div className="food-item-name-rating">
                    <p>${price}</p> <img src={assets.rating_starts} alt="" />
                </div>
               
            </div>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={url+"/images/"+image} alt="" />
                {!cartItems[id]
                ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                : <><Link to="/cart"><img className='food-cart-icon' src={assets.bag_icon} onClick={()=>addToCart(id)} alt="" /></Link> <div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img  src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
                    </div></>
                }
            </div>
        </div>
    )
}

export default FoodItem
