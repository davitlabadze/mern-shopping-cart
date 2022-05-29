import { Link } from "react-router-dom"
import { MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'

const Navbar = ({ eventSide }) => {
    return (
        <div className="p-12 bg-white">
            <div className="container flex flex-wrap items-center justify-between w-full mx-auto ">
                <div>
                    <h2>
                        MERN Shopping Cart
                    </h2>
                </div>
                <ul className="hidden lg:flex lg:items-center lg:flex-shrink-0">
                    <li className="rounded ">
                        <Link to="/cart" className="flex" >
                            <ShoppingCartIcon className="flex w-6 h-6" />
                            Cart
                            <span className="ml-1">0</span>
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