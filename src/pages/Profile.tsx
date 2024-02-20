import Experience from '../components/Experience';
import HeaderText from '../components/HeaderText';
import ImageGallery from '../components/ImageGallery';
import Layout from '../components/Layout';
import MarketingText from '../components/MarketingText';
import Space from '../components/Space';

const Profile = () => {
	return (
		<Layout>
			<HeaderText
				text="Hey 👋🏼 I'm Oli"
				width="auto"
				style={{ paddingTop: '4em', paddingBottom: '3em' }}
			/>
			<ImageGallery />
			<Space height="4em" />
			<MarketingText
				title="About"
				text="A freelance designer based in the UK. I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences."
			/>
			<Space height="4em" />
			<Experience />
		</Layout>
	);
};

export default Profile;
