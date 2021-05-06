import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { useStateValue } from './StateProvider';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/checkout'>
						<Header />
						<h1>Checkout</h1>
					</Route>

					<Route path='/login'>
						<Login />
					</Route>

					<Route path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
