import React from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/actions/cartActions';
import { useDispatch } from "react-redux";



const Product = ({ imageUrl, name, price, productId }) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(productId, 1));
    }
    return (
        <div className="-ml-4 duration-300 scale-95 border border-gray-100 rounded-lg shadow-lg hover:scale-100 w-80 h-96 hover:shadow-xl">
            <h1 className="mt-2 text-2xl">{name}</h1>
            <div className='h-3/4'>
                <Link to={`/product/${productId}`}>
                    <img src={imageUrl} alt={name} />
                </Link>
            </div>
            <div className="flex items-center justify-between px-12">
                <h4>${price}</h4>
                <button onClick={addToCartHandler} className="p-2 text-white bg-blue-600 rounded-md hover:bg-blue-500">Add to Cart</button>
            </div>
        </div>
    )
}

export default Product