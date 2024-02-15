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
				<img
					className="landingImage"
					src={imageUrl}
					alt={`Brand image of ${brandName}`}
				/>
			) : (
				<video
					className="landingVideo"
					src={videoUrl}
					loop={true}
					autoPlay
					playsInline
				></video>
			)}
			<div className="overlay">
				<div className="overlayContent">
					<p className="brandName">{brandName}</p>
					<div>
						<ArrowCircleUpLeft className="imageLinkIcon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingImage;
