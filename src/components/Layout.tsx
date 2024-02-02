import React from 'react';
import './Layout.sass';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props: {
	// @ts-ignore
	children: React.JSX;
}) => {
	return (
		<div className="container">
			<Navbar />

			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
