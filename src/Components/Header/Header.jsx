import './Header.css';

import { FiBookmark, FiShoppingCart, FiSearch } from 'react-icons/fi';
import { RxPerson } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

    const cart = useSelector(store => store.cart);

    return (
        <div className="header">
            <Link to='/' className="logo" >
                Just<span>Store</span>
            </Link>

            <div className="search">
                <FiSearch />
                <input type="text" placeholder='' />
            </div>
            <div className="profile">
                <FiBookmark className='saved' />
                <Link to='/cart'><div className='cartOuter'><FiShoppingCart className='cart' /><span>{cart.length}</span></div></Link>
                <RxPerson className='profileIcon' />
            </div>
        </div>
    );
}

export default Header;