import './Footer.sass';

const Footer = () => {
	const socialMediaLinkTitles = ['Facebook', 'Twitter', 'LinkedIn'];

	return (
		<div className="footerContainer">
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
	);
};

export default Footer;
