import React from 'react'

const Product = () => {
    return (
        <div className="duration-300 scale-95 border border-gray-100 rounded-lg shadow-lg hover:scale-100 w-80 h-96 hover:shadow-xl">
            <h1 className="mt-2 text-2xl">MacBook Pro 13"</h1>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726243000" alt="" />
            <div className="flex items-center justify-between px-12">
                <h4>$5555</h4>
                <button className="p-2 text-white bg-blue-600 rounded-md hover:bg-blue-500">Add to Cart</button>
            </div>
        </div>
    )
}

export default Product