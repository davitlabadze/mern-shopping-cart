import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Product from "../components/Product"
import { getProducts as listProducts } from '../redux/actions/productActions';

const Home = () => {

    const dispatch = useDispatch();
    const getProducts = useSelector((state) => state.getProduct);
    const { products = [], loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className="grid grid-cols-1 gap-10 py-4 text-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                products.map((product) => <Product
                    key={product._id}
                    productId={product._id}
                    name={product.name}
                    price={product.price}
                    desription={product.desription}
                    imageUrl={product.imageUrl}

                />)
            )}
        </div>
    )
}

export default Home