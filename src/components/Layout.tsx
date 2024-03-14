import React from 'react';
import { motion } from 'framer-motion';
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

			<motion.div
				initial={{ opacity: 0, y: '4em' }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1, ease: 'easeIn' }}
				style={{ marginBottom: '2em' }}
			>
				{props.children}
			</motion.div>
			<Footer />
		</div>
	);
};

export default Layout;
