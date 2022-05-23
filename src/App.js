import React from "react";
import axios from "axios";
import { connect } from 'react-redux';

import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { setPizzas } from "./redux/actions/pizzas"

// const App = (props) => {

// 	React.useEffect(() => {
// 		axios.get('http://localhost:3001/db.json').then(({ data }) => {
// 			setPizzas(data.pizzas);
// 		});
// 	}, []);
// };

class App extends React.Component {
	componentDidMount() {
		axios.get('http://localhost:3001/db.json').then(({ data }) => {
			this.props.setPizzas(data.pizzas);
		});
	}

	render() {
		return (
			<div className="wrapper">
				<Header />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home items={this.props.items} />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.pizzas.items
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPizzas: (items) => dispatch(setPizzas(items)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);