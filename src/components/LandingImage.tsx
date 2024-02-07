import { useNavigate } from 'react-router-dom';
import './LandingImage.sass';
import { ArrowCircleUpLeft } from '@styled-icons/fluentui-system-filled';

const LandingImage = (props: {
	imageUrl?: string;
	brandName: string;
	videoUrl?: string;
}) => {
	const { imageUrl, brandName, videoUrl } = props;
	const navigate = useNavigate();

	return (
		<div
			className="imageContainer"
			onClick={() => {
				navigate(`/projects/${brandName.toLowerCase()}`);
			}}
		>
			{imageUrl ? (
				<img src={imageUrl} alt={`Brand image of ${brandName}`} />
			) : (
				<video
					className="landingVideo"
					src={videoUrl}
					loop
					autoPlay
					playsInline
				></video>
			)}
			<div>
				<p>{brandName}</p>
				<div>
					<ArrowCircleUpLeft />
				</div>
			</div>
		</div>
	);
};

export default LandingImage;
