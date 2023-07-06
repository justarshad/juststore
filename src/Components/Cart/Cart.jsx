import './Cart.css';
import CartItem from './CartItem';

import { useSelector } from "react-redux";

const Cart = () => {

    const cartItems = useSelector(store => store.cart);
    const priceHandel = () => {
        const rt = cartItems.reduce((acc, item) => {
            return item.price * item.count + acc;
        }, 0);

        return rt;
    }

    return (
        <div className="cartComponent">
            <div className="outer">
                <div className='itemsWraper'>
                    <h1>Your Cart</h1>
                    <div className="cart">

                        {!cartItems.length ? (<span className='empty'>Opps Your Cart is Empty</span>) :
                            cartItems.map(item => {
                                return (
                                    <>
                                        <CartItem item={item} />
                                    </>
                                );
                            })
                        }
                    </div>
                    <div className="price">
                        <span className="totPrice"><span>Tottle Price: </span>${priceHandel().toFixed(2)}</span>
                        <button>Check Out</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cart;