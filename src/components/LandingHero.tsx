import { motion } from 'framer-motion';
import HeaderText from './HeaderText';
import './LandingHero.sass';
import MarketingTag from './MarketingTag';

const LandingHero = ({
	isLanding,
	headerText,
}: {
	isLanding: boolean;
	headerText: string;
}) => {
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
			<HeaderText text={headerText} width="60%" style={{}} />
			<motion.div
				initial={{ opacity: 0, marginTop: '4em' }}
				animate={{ opacity: 1, marginTop: 0 }}
				transition={{ delay: 1.5 }}
			>
				{isLanding && <MarketingTags tagTitles={tagTitles} />}
			</motion.div>
		</div>
	);
};

export default LandingHero;
