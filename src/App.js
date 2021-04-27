import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { useStateValue } from './StateProvider';
import Header from './components/Header/Header';

function App() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className='app'>
			<Header />
			{!user ? <Login /> : <Home />}
		</div>
	);
}

export default App;
