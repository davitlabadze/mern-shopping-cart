import CartItem from "../components/CartItem"

const Cart = () => {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
            <div className="col-span-2">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="w-full h-40 shadow-md">
                <div className="w-full p-4 border-b-2 ">
                    <p>Subtotal (0) items</p>
                    <p >$5555</p>
                </div>
                <div className="ml-2 text-center ">
                    <button className="p-4 mt-2 mb-2 text-center text-white bg-blue-600 hover:bg-blue-500">Process to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart