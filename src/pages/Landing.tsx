import LandingGallery from '../components/LandingGallery';
import LandingHero from '../components/LandingHero';
import Layout from '../components/Layout';
import { getImageData } from '../utils/images';

const Landing = () => {
	const imagesData = getImageData();

	return (
		<Layout>
			<LandingHero
				isLanding
				headerText="A brand and product designer working with clients globally"
			/>
			<LandingGallery imagesData={imagesData} />
		</Layout>
	);
};

export default Landing;
