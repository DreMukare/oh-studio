import { motion } from 'framer-motion';
import LandingImage from './LandingImage';
import './LandingGallery.sass';

type ImageData = {
	videoUrl?: string;
	imageUrl?: string;
	brandName: string;
};

const LandingGallery = (props: { imagesData: ImageData[] }) => {
	const { imagesData } = props;

	return (
		<motion.div
			initial={{ opacity: 0, y: '8em' }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 2.25, ease: 'easeIn' }}
			className="landingGalleryContainer"
		>
			{imagesData.map((image: ImageData, idx: number) => {
				return (
					<LandingImage
						imageUrl={image.imageUrl}
						videoUrl={image.videoUrl}
						brandName={image.brandName}
						key={idx}
					/>
				);
			})}
		</motion.div>
	);
};

export default LandingGallery;
