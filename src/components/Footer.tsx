import { Link, useLocation } from 'react-router-dom';
import './Footer.sass';

const Footer = () => {
	const socialMediaLinkTitles = ['Facebook', 'Twitter', 'LinkedIn'];
	const location = useLocation();

	return (
		<div className="footerContainer">
			{location.pathname !== '/contact' && (
				<div className="callToAction">
					<h2>Let's work together</h2>
					<Link to="/contact" style={{ textDecoration: 'none' }}>
						<h2 className="h2Link">Get in touch.</h2>
					</Link>
				</div>
			)}
			<div className="linksAndCopyright">
				<div>Copyright 2024</div>
				<div className="footerLinkContainer">
					{socialMediaLinkTitles.map((title: string, idx: number) => (
						<a
							key={idx}
							href={`https://${title.toLowerCase()}.com`}
							className="footerLink"
						>
							{title}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
