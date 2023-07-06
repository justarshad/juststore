import './Products.css';
import Product from "./Product";

import { useState } from "react";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Products = ({ items }) => {

    const [data, setData] = useState([...items]);
    const [heading, setHeading] = useState('All Products');

    const filter = (cate) => {
        if (cate === 'all') {
            setData([...items]);
            setHeading('All Products');
        } else {
            setData(items.filter((it) => {
                return it.category === cate;
            }));
            setHeading(`Products of ${cate} Category`);
        }
    }
    const filterByRatings = (rate) => {
        setData(items.filter((it) => {
            return it.rating.rate >= rate;
        }));
    }

    const sort = (way) => {
        if (way === 'lowToHigh') {
            data.sort((a, b) => {
                return a.price - b.price;
            }
            );
        } else {
            data.sort((a, b) => {
                return b.price - a.price;
            }
            );
        }
        setData([...data]);
    }

    return (
        <div className="products">
            <div className="filters">
                <div className="category">
                    <h2 className="filterTitle">Category</h2>
                    <span className="elect" onClick={() => { filter('electronics') }}>electronics</span>
                    <span className="jewelery" onClick={() => { filter('jewelery') }}>jewelery</span>
                    <span className="men" onClick={() => { filter(`men's clothing`) }}>men's clothing</span>
                    <span className="women" onClick={() => { filter(`women's clothing`) }}>women's clothing</span>
                </div>
                <div className="price">
                    <h2 className="filterTitle">Price</h2>
                    <span className="lowToHigh" onClick={() => { sort('lowToHigh') }}>low to High</span>
                    <span className="highToLow" onClick={() => { sort('highToLow') }}>High to low</span>
                </div>
                <div className="rating">
                    <h2 className="filterTitlee">Ratings</h2>
                    <span className="4andAbove" onClick={() => { filterByRatings(4) }}>
                        <span className='stars'>
                            <AiFillStar className='filled' /> <AiFillStar className='filled' /><AiFillStar className='filled' /><AiFillStar className='filled' /> <AiOutlineStar />
                        </span>
                        <span>and Above</span>
                    </span>
                    <span className="3andAbove" onClick={() => { filterByRatings(3) }}><span><AiFillStar className='filled' /> <AiFillStar className='filled' /><AiFillStar className='filled' /><AiOutlineStar /> <AiOutlineStar /></span><span>and Above</span></span>
                    <span className="2andAbove" onClick={() => { filterByRatings(2) }}><span><AiFillStar className='filled' /> <AiFillStar className='filled' /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span><span>and Above</span></span>
                    <span className="1andAbove" onClick={() => { filterByRatings(1) }}><span><AiFillStar className='filled' /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span><span>and Above</span></span>
                </div>
                <span className="clearAll" onClick={() => { filter('all') }}>Clear All</span>
            </div>
            <div className="productsWraper">
                <h1 className='productsTitle'>{heading}</h1>
                {data?.map((it) => {
                    return (
                        <>
                            {<Product item={it} />}
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default Products;