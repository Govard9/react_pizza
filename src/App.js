import React from "react";
import axios from 'axios';

import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";

const App = (props) => {

	const [pizzas, setPizzas] = React.useState([]);

	React.useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			setPizzas(data.pizzas);
		});
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home items={pizzas}/>} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
