import React from 'react';

const Navbar = () => {
	const navLinkTitles = ['Home', 'Profile', 'Contact'];

	const NavLink = (props: { title: string }) => {
		const { title } = props;
		return <>{title}</>;
	};

	return (
		<div>
			{navLinkTitles.map((title: string, idx: number) => (
				<NavLink key={idx} title={title} />
			))}
		</div>
	);
};

export default Navbar;
