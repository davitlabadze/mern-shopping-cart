import { Link } from "react-router-dom"
import { MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useSelector } from "react-redux"
const Navbar = ({ eventSide }) => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }


    return (
        <div className="p-12 bg-white">
            <div className="container flex flex-wrap items-center justify-between w-full mx-auto ">
                <div>
                    <h2>
                        MERN Shopping Cart
                    </h2>
                </div>
                <ul className="hidden lg:flex lg:items-center lg:flex-shrink-0">
                    <li className="p-2 rounded hover:bg-gray-400">
                        <Link to="/cart" className="flex" >
                            <ShoppingCartIcon className="flex w-6 h-6" />
                            Cart
                            <span className="w-6 h-6 ml-1 text-center text-white bg-pink-600 rounded-xl">{getCartCount()}</span>
                        </Link>
                    </li>
                    <li className="ml-4">
                        <Link to="/">
                            Shop
                        </Link>
                    </li>
                </ul>
                <div className="flex lg:hidden">
                    <MenuIcon className="w-6 h-6 cursor-pointer" onClick={eventSide} />
                </div>
            </div>
        </div>
    )
}

export default Navbar