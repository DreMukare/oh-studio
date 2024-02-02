import { useState } from 'react';
import './Navbar.sass';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navLinkTitles = ['Home', 'Profile', 'Contact'];
	const navigate = useNavigate();
	const location = useLocation();

	const NavLink = (props: { title: string }) => {
		const { title } = props;

		return (
			<button
				onClick={() =>
					title === 'Home' ? navigate('/') : navigate(`/${title.toLowerCase()}`)
				}
				className="navLink"
				style={{
					backgroundColor:
						location.pathname.split('/')[1] === title.toLowerCase() ||
						(title === 'Home' && location.pathname.split('/')[1] === '')
							? '#fff'
							: 'inherit',
				}}
			>
				{title}
			</button>
		);
	};

	return (
		<div className="navContainer">
			{navLinkTitles.map((title: string, idx: number) => (
				<NavLink key={idx} title={title} />
			))}
		</div>
	);
};

export default Navbar;
