import './CartItem.css';

import { useDispatch, useSelector } from "react-redux";
import { remove , incre, decre} from '../../Store/Slices/cartSlice';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'

const CartItem = ({ item }) => {
    
    const store = useSelector((store) => {
        return store.cart;
    })
    const dispatch = useDispatch();

    const increItem = (id)=>{
        dispatch(incre(id));
    }
    const decreItem = (id)=>{
        dispatch(decre(id));
    }
    const removeFromCart = (id)=>{
        dispatch(remove(id));
    }
    return (
        <div className="cartItem">
            <div className="image">
                <img src={item?.image} alt="" />
            </div>
            <div className='other'>
                <h4 className="title">{item?.title?.length <= 45 ? item?.title : item?.title?.slice(0, 45) + '...'}</h4>
                <p className="sumery">{item?.description.length <= 100 ? item?.description : item?.description?.slice(0, 100) + '...'}</p>
                <div className='last'>
                    <div className="btn-count">
                        <AiOutlineMinus onClick={(e)=>{decreItem(item.id)}}/>
                        <span>{item.count}</span>
                        <AiOutlinePlus onClick={(e)=>{increItem(item.id)}}/>
                    </div>
                    <div className="itemPrice">
                        ${(item.count * item.price).toFixed(2)}
                    </div>
                    <div className="remove">
                        <FaTrash onClick={()=>{removeFromCart(item.id)}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;