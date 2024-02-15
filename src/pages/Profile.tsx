import HeaderText from '../components/HeaderText';
import ImageGallery from '../components/ImageGallery';
import Layout from '../components/Layout';

const Profile = () => {
	return (
		<Layout>
			<HeaderText
				text="Hey 👋🏼 I'm Oli"
				width="auto"
				style={{ paddingTop: '4em', paddingBottom: '3em' }}
			/>
			<ImageGallery />
		</Layout>
	);
};

export default Profile;
