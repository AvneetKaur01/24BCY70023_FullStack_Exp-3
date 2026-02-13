import './ProductCards.css';

function ProductCards() {
    return(
        <div className="product-cards-wrapper">
            <h1>Welcome to Experiment 1</h1>
            <div className="cards-container">
                <div className='card'>
                    <h3>Wireless Mouse</h3>
                    <p>Price: $139.99</p>
                    <p className="stock in-stock">In Stock</p>
                </div>
                <div className='card'>
                    <h3>Keyboard</h3>
                    <p>Price: $179.99</p>
                    <p className="stock in-stock">In Stock</p>
                </div>
                <div className='card'>
                    <h3>Puma Shoes</h3>
                    <p>Price: $129.99</p>
                    <p className="stock out-stock">Out of Stock</p>
                </div>
                <div className='card'>
                    <h3>Monitor</h3>
                    <p>Price: $300</p>
                    <p className="stock in-stock">In Stock</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCards;