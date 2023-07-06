import './RelatedProduct.css';
import Product from '../Products/Product';

import { useEffect, useState } from "react";
import fetchData from "../../API/api";

const RelatedProduct = ({ category }) => {

    const [data, setData] = useState();

    useEffect(() => {
        fetchData(`category/${category}?limit=4`).then((res) => {
            setData(res);
        })
    }, [])

    return (
        <div className="relatedProduct">
            <h1>Related Procucts</h1>
            <div className="wraper">

                {data?.map((item) => {
                    return (
                        <>
                            {<Product item={item} />}
                        </>
                    );
                })}
            </div></div>
    );
}

export default RelatedProduct;