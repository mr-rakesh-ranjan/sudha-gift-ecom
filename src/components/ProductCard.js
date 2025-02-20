const ProductCard = ({ product }) => {
    return (
        <div className="border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
