import ProductCard from "../components/ProductCard";

const sampleProducts = [
    { id: 1, name: "Gift Box", price: 29.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Teddy Bear", price: 19.99, image: "https://via.placeholder.com/150" }
];

const Products = () => {
    return (
        <div className="p-6 grid grid-cols-2 gap-6">
            {sampleProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    );
};

export default Products;
