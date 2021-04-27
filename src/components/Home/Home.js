import Product from '../Product/Product';
import './Home.css';

const Home = () => {
	return (
		<div className='home'>
			<img
				src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg'
				alt='Banner'
				className='home__image'
			/>

			<div className='home__row'>
				<Product
					id='12345'
					title='The Harry Potter And The Chamber Of Secrets'
					price={286.48}
					rating={5}
					image='https://www.madrasshoppe.com/48515-large_default/harry-potter-and-the-chamber-of-secrets-harry-potter-2-latest-edition-3-september-2014-jk-rowling.jpg'
				/>

				<Product
					id='982948'
					title='The Harry Potter And The Prisoner Of Azkaban'
					price={286.48}
					rating={5}
					image='https://cdn.shopify.com/s/files/1/2789/4914/products/book-prakash-books-17624381227174_317x475.jpg?v=1593077960'
				/>
			</div>

			<div className='home__row'>
				<Product
					id='39472'
					title='The Harry Potter And The Goblet Of Fire'
					price={286.48}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg'
				/>

				<Product
					id='48362'
					title='The Harry Potter And The Order Of The Phoenix'
					price={286.48}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/518VenL0NGL._SX331_BO1,204,203,200_.jpg'
				/>

				<Product
					id='38473'
					title='The Harry Potter And The Half Blood Prince'
					price={286.48}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/91YH0ZtB9XL.jpg'
				/>
			</div>

			<div className='home__row'>
				<Product
					id='35467'
					title='The Harry Potter And The Deathly Hallows'
					price={286.48}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/914CT7iyyvL.jpg'
				/>
			</div>
		</div>
	);
};

export default Home;
