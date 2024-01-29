import HeaderText from './HeaderText';
import './LandingHero.sass';
import MarketingTag from './MarketingTag';

const LandingHero = () => {
	const tagTitles = ['Branding', 'Product', 'Design Systems'];

	const MarketingTags = (props: { tagTitles: string[] }) => {
		const { tagTitles } = props;

		return (
			<div className="marketingTags">
				Expertise{' '}
				{tagTitles.map((title: string, idx: number) => (
					<MarketingTag title={title} key={idx} />
				))}
			</div>
		);
	};

	return (
		<div className="landingHeroContainer">
			<HeaderText text="A brand and product designer working with clients globally" />
			<MarketingTags tagTitles={tagTitles} />
		</div>
	);
};

export default LandingHero;
