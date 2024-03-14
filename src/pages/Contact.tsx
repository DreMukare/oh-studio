import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import './Contact.sass';

const Contact = () => {
	return (
		<Layout>
			<div className="contactContainer">
				<h2>Let's work together</h2>
				<Link
					to="mailto:angumbao@sandtech.com"
					style={{ textDecoration: 'none' }}
				>
					<motion.h2
						initial={{ opacity: 0, y: '0.5em' }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.5, ease: 'easeIn' }}
						className="h2Link"
					>
						Get in touch.
					</motion.h2>
				</Link>
			</div>
		</Layout>
	);
};

export default Contact;
