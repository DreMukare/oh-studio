import LandingHero from '../components/LandingHero';
import Layout from '../components/Layout';

const Landing = () => {
	return (
		<Layout>
			<LandingHero
				isLanding
				headerText="A brand and product designer working with clients globally"
			/>
		</Layout>
	);
};

export default Landing;
