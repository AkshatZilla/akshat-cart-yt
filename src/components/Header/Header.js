import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import './Header.css';

const Header = () => {
	const [{ user }, dispatch] = useStateValue();

	const login = () => {};

	return (
		<nav className='header'>
			<Link to='/'>
				<img src='/Icon.png' alt='Logo' className='header__logo' />
			</Link>

			<div className='header__search'>
				<input type='text' className='header__searchInput' />
				<SearchIcon className='header__searchIcon' />
			</div>

			<div className='header__nav'>
				<Link to={!user && '/login'} className='header__link'>
					<div onClick={login} className='header__option'>
						<span className='header__optionLineOne'>Hello {user?.email}</span>
						<span className='header__optionLineTwo'>
							{user ? 'Sign Out' : 'Sign In'}
						</span>
					</div>
				</Link>

				<Link to='/' className='header__link'>
					<div className='header__option'>
						<span className='header__optionLineOne'>Returns</span>
						<span className='header__optionLineTwo'>& Orders</span>
					</div>
				</Link>

				<Link to='/checkout' className='header__link'>
					<div className='header__optionBasket'>
						<ShoppingCartOutlinedIcon />
						<span className='header__optionLineTwo header__basketCount'>3</span>
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
