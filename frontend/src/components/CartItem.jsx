import { Link } from "react-router-dom"
import { TrashIcon } from '@heroicons/react/outline'

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    return (
        <div className="flex items-center justify-between w-full p-4 shadow-md">
            <img
                className="w-24 h-24"
                src={item.imageUrl}
                alt={item.name}
            />
            <Link to={`/product/${item.product}`}>
                <p>{item.name}</p>

            </Link>
            <p>${item.price}</p>
            <select className="w-12 h-8"
                value={item.qty}
                onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map(x => (

                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                ))}
            </select>
            <button onClick={() => removeHandler(item.product)}>
                <TrashIcon className="w-6 h-6 text-gray-500 hover:text-gray-600" />
            </button>
        </div>
    )
}

export default CartItem