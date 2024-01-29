import { useState } from 'react';
import './Navbar.sass';

const Navbar = () => {
	const [location, setLocation] = useState('Home');
	const navLinkTitles = ['Home', 'Profile', 'Contact'];

	const NavLink = (props: { title: string }) => {
		const { title } = props;
		return (
			<button
				onClick={() => {
					setLocation(title);
				}}
				className="navLink"
				style={{
					backgroundColor: location === title ? '#fff' : 'inherit',
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
