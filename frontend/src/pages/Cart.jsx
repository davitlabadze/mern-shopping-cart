import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem"
import { addToCart, removeFromCart } from "../redux/actions/cartAction"
const Cart = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    console.log(cart)
    const { cartItems = [] } = cart;
    console.log(cartItems)

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    }

    const removeHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubtotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
    }


    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
            <div className="col-span-2">
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to="/" className="text-blue-500" >Go Back</Link>
                    </div>
                ) :
                    cartItems.map((item) => (
                        <CartItem
                            item={item}
                            qtyChangeHandler={qtyChangeHandler}
                            removeHandler={removeHandler}
                        />
                    ))
                }

            </div >
            <div className="w-full h-40 shadow-md">
                <div className="w-full p-4 border-b-2 ">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p >${getCartSubtotal().toFixed(2)}</p>
                </div>
                <div className="ml-2 text-center ">
                    <button className="p-4 mt-2 mb-2 text-center text-white bg-blue-600 hover:bg-blue-500">Process to Checkout</button>
                </div>
            </div>
        </div >
    )
}

export default Cart