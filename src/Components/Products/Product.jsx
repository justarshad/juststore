import './Product.css';
import { AiFillStar } from 'react-icons/ai';

import { useSelector, useDispatch } from 'react-redux';
import {add} from '../../Store/Slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const Product = ({ item}) => {
    const dispatch = useDispatch();
    const cart = useSelector(store=>store.cart);

    const addToCart = (item)=>{
        if(!cart.includes(item)){
            dispatch(add(item));
        }
    }
    const navigate = useNavigate();
    const goToSingleProduct = (id)=>{
        navigate(`/product/:${id}`)
    }
    return (
        <div className="product" key={item?.id}>
            <div className="image">
                <img src={item?.image} alt="" />
            </div>
            {/* <span className='middle'></span> */}
            <div className='other'>
                <div className="rating">
                    <AiFillStar /> {item?.rating.rate}
                </div>
                <h4 className="title" onClick={()=>goToSingleProduct(item.id)}>{item?.title?.length <= 58 ? item?.title : item?.title?.slice(0, 45) + '...'}</h4>
                <h4 className="description">{item?.description?.length <= 200 ? item?.description : item?.description?.slice(0, 200) + '...'}</h4>
                <div className='btnPrice'>
                    <h4 className="price">${item?.price}</h4>
                    <button onClick={(e)=>addToCart(item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Product;