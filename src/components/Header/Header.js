import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './Header.css';

const Header = () => {
	return (
		<nav className='header'>
			<a href='/'>
				<img src='/Icon.png' alt='Logo' className='header__logo' />
			</a>

			<div className='header__search'>
				<input type='text' className='header__searchInput' />
				<SearchIcon className='header__searchIcon' />
			</div>

			<div className='header__nav'>
				<abbr className='header__link'>
					<div className='header__option'>
						<span className='header__optionLineOne'>Hello Akshat</span>
						<span className='header__optionLineTwo'>Sign Out</span>
					</div>
				</abbr>

				<a href='/' className='header__link'>
					<div className='header__option'>
						<span className='header__optionLineOne'>Returns</span>
						<span className='header__optionLineTwo'>& Orders</span>
					</div>
				</a>

				<a href='/checkout' className='header__link'>
					<div className='header__optionBasket'>
						<ShoppingCartOutlinedIcon />
						<span className='header__optionLineTwo header__basketCount'>3</span>
					</div>
				</a>
			</div>
		</nav>
	);
};

export default Header;
