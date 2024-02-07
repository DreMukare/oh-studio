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
		<div>
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
		</div>
	);
};

export default LandingGallery;
