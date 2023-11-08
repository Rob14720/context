import React, { useContext} from 'react';

import productContext from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = props => {
	const { products } = useContext(productContext);
	
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
