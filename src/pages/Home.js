import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center p-10">
            <h1 className="text-3xl font-bold">Welcome to Sudha</h1>
            <p className="text-gray-600 mt-4">Find the perfect gift for any occasion.</p>
            <Link to="/products">
                <button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded">Shop Now</button>
            </Link>
        </div>
    );
};

export default Home;
