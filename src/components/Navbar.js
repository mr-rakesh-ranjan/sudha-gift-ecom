import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Sudha</Link>
            <div className="flex text-lg text_center">
                <Link to="/" className="px-4">Home</Link>
                <Link to="/products" className="px-4">Products</Link>
                <Link to="/cart" className="px-4">Cart</Link>
                <Link to="/checkout" className="px-4">Checkout</Link>
            </div>
            <Link to="/sign-up">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up Free</button>
            </Link>
        </nav>
    );
};

export default Navbar;
