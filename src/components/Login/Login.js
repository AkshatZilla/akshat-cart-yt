import { Button } from '@material-ui/core';
import { useStateValue } from '../../StateProvider';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../reducer';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
	const [{}, dispatch] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user
				});
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className='login'>
			<div className='login__container'>
				<Link to='/'>
					<img src='/Icon.png' alt='' />
				</Link>

				<div className='login__text'>
					<h2>Login to AkshatCart</h2>
				</div>

				<Button onClick={signIn}>Sign In With Google</Button>
			</div>
		</div>
	);
};

export default Login;
