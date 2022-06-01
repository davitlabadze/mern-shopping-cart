import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ imageUrl, name, price, productId }) => {
    return (
        <div className="duration-300 scale-95 border border-gray-100 rounded-lg shadow-lg hover:scale-100 w-80 h-96 hover:shadow-xl">
            <h1 className="mt-2 text-2xl">{name}</h1>
            <Link to={`/product/${productId}`}>
                <img src={imageUrl} alt={name} />
            </Link>
            <div className="flex items-center justify-between px-12">
                <h4>${price}</h4>
                <button className="p-2 text-white bg-blue-600 rounded-md hover:bg-blue-500">Add to Cart</button>
            </div>
        </div>
    )
}

export default Product