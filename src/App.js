import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import productContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		console.log(item);
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<CartContext.Provider value={cart}>
			<Navigation cart={cart} />

			{/* Routes */}
			<productContext.provider value={{ products, addItem}}>
			<Route exact path="/">
				<Products />
			</Route>
			</productContext.provider>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
