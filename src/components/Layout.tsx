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

			<div style={{ marginBottom: '2em' }}>{props.children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
