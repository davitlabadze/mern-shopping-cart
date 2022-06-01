import Product from "../components/Product"

const Home = () => {
    return (
        <div className="grid grid-cols-1 gap-10 py-4 text-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default Home