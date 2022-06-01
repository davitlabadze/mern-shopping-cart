import { Link } from "react-router-dom"
import { TrashIcon } from '@heroicons/react/outline'

const CartItem = () => {
    return (
        <div className="flex items-center justify-between w-full p-4 shadow-md">
            <img className="w-24 h-24" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726243000" alt="" />
            <Link to={`/product/${111}`}>
                <p>Product 1</p>

            </Link>
            <p>$5555</p>
            <select className="w-12 h-8">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button>
                <TrashIcon className="w-6 h-6 text-gray-500 hover:text-gray-600" />
            </button>
        </div>
    )
}

export default CartItem