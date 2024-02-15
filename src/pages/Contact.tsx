import { Link } from 'react-router-dom';
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
					<h2 className="h2Link">Get in touch.</h2>
				</Link>
			</div>
		</Layout>
	);
};

export default Contact;
