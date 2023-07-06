import './SingleProduct.css';
import RelatedProduct from './RelatedProdcts';

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../Store/Slices/cartSlice';
import { useParams } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import fetchData from "../../API/api";

const SingleProduct = () => {
    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetchData(id.slice(1)).then((res) => {
            setData(res);
        })
    }, [id])

    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();

    const addToCart = (item) => {
        if (!cart.includes(item)) {
            dispatch(add(item));
        }
    }

    return (<>

        <div className="singleProduct">
            <div className="image">
                <img src={data?.image} alt="" />
            </div>
            <div className="other">
                <div className="rating">
                    <span><AiFillStar /> {data?.rating.rate}</span>
                    <span>Ratings Count: {data?.rating.count}</span>
                </div>
                <h2 className="title" >{data?.title}</h2>
                <h4 className="category" >{data?.category}</h4>
                <p className="discription" >{data?.description}</p>
                <h4 className="price"><span>Price: </span>${data?.price}</h4>
                <button onClick={(e) => addToCart(data)}>Add to Cart</button>

            </div>
        </div>
        {data && < RelatedProduct  category={data.category}/>}
        </>
    );
}

export default SingleProduct;