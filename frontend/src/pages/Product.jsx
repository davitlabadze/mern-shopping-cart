const Product = () => {
    return (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726243000" alt="" />
            <div className="w-full h-auto mr-12 ">
                <h1 className="p-4 text-xl border-b-2">product 1</h1>
                <p className="p-4 border-b-2">Price: $5555</p>
                <p className="p-4">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam harum commodi illum dignissimos soluta laudantium, voluptatem, natus quis vitae reprehenderit quod eveniet. Itaque vel est earum beatae temporibus dolorum.</p>
            </div>
            <div className="items-center w-full h-full ">
                <p className="grid grid-cols-2 p-4 text-xl border-b-2">Price: <span>$5555</span></p>
                <p className="grid grid-cols-2 p-4 text-xl border-b-2">Status: <span>In Stock</span></p>
                <p className="grid grid-cols-2 p-4 text-xl border-b-2">Quantity
                    <select className="p-2 ">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </p>
                <button type="submit" className="w-full p-4 text-center bg-blue-600 hover:bg-blue-500 text-zinc-300">Add to Cart</button>
            </div>
        </div>
    )
}

export default Product