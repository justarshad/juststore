import './Home.css';
import { useEffect, useState } from "react";
import fetchData from "../../API/api";

import Products from '../Products/Products';
const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData().then((res) => {
            setItems(res);
        })
    }, [])

    return (
        <div className="home">
            
            {items.length &&
                <Products items={items} />}
        </div>
    );
}
export default Home;