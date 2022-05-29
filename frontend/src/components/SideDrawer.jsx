import { ShoppingCartIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"

const SideDrawer = ({ show, eventSide }) => {
    return (
        <div className={`${show === true ? "translate-x-0" : "translate-x-full"} place-content-center fixed h-full top-0 right-0 z-50 w-2/3 bg-white ease-in-out duration-300 lg:hidden `}>
            <ul onClick={eventSide} className="flex flex-col items-center py-96">
                <li className="w-full p-4 text-center rounded hover:bg-red-400">
                    <Link to="/cart" className="flex text-center" >
                        <ShoppingCartIcon className="flex w-6 h-6" />
                        Cart
                        <span className="ml-1">0</span>
                    </Link>
                </li>
                <li className="w-full p-4 mt-6 text-center rounded hover:bg-red-400">
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer