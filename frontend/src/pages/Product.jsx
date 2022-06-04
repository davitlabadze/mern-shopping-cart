import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { useParams, useNavigate } from "react-router-dom";
const Product = () => {
    const params = useParams();
    const navigate = useNavigate();
    const id = params.id
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetail);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && id !== product._id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, id, product])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        navigate("/cart");
    }

    return (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                <>
                    <img src={product.imageUrl} alt="" />
                    <div className="w-full h-auto mr-12 ">
                        <h1 className="p-4 text-xl border-b-2">{product.name} </h1>
                        <p className="p-4 border-b-2">Price: ${product.price}</p>
                        <p className="p-4">Description: {product.description} </p>
                    </div>
                    <div className="items-center w-full h-full ">
                        <p className="grid grid-cols-2 p-4 text-xl border-b-2">Price: <span>${product.price} </span></p>
                        <p className="grid grid-cols-2 p-4 text-xl border-b-2">Status: <span>{product.countInStock > 0 ? 'In Stock' : 'Out Stock'}</span></p>
                        <p className="grid grid-cols-2 p-4 text-xl border-b-2">Quantity
                            <select className="p-2" value={qty} onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map((x) =>
                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                )}
                            </select>
                        </p>
                        <button type="submit" onClick={addToCartHandler} className="w-full p-4 text-center bg-blue-600 hover:bg-blue-500 text-zinc-300">Add to Cart</button>
                    </div>
                </>
            )}

        </div>
    )
}

export default Product