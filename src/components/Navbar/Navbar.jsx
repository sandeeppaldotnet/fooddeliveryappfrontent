import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token ,setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className='navbar'>
      {/* <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link> */}
      <Link to='/'><h1>foody</h1></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
        <Link to='/category/All' onClick={() =>setMenu("category")} className={`${menu === "category" ? "active" : ""}`}>Menu</Link>
        <Link to='/restaurent' onClick={() => setMenu("restaurent")} className={`${menu === "restaurent" ? "active" : ""}`}>Restaurent</Link>
        <Link to='/cart' onClick={() => setMenu("cart")} className={`${menu === "cart" ? "active" : ""}`}>Cart</Link>
        {!token?"":<Link to='/myorders' onClick={() => setMenu("orders")} className={`${menu === "orders" ? "active" : ""}`}>Orders</Link>}
        <Link to="/customer-support"  onClick={() => setMenu("support")} className={`${menu === "support" ? "active" : ""}`}>Customer Support</Link>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.bag_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
            </ul>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
