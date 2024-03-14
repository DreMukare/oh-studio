import { motion } from 'framer-motion';
import './ImageGallery.sass';

const ImageGallery = () => {
	const imageData = [
		{
			url: '	https://framerusercontent.com/images/wJINOk3BFAbQRx6ZySXfbltPxU.jpg',
			alt: 'Man sitting looking at computer',
		},
		{
			url: 'https://framerusercontent.com/images/O3Foxt0XkzTsjGc74Ap0Hrxtz4c.jpg',
			alt: 'Blurry guy next to lamp',
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0, marginTop: '4em' }}
			animate={{ opacity: 1, marginTop: 0 }}
			transition={{ delay: 1.5, ease: 'easeIn' }}
			className="imageGalleryContainer"
		>
			{imageData.map((image: { url: string; alt: string }, idx: number) => {
				return idx === 1 ? (
					<motion.img
						initial={{ opacity: 0, marginTop: '2.5em' }}
						animate={{ opacity: 1, marginTop: 0 }}
						transition={{ delay: 1.8, ease: 'easeIn' }}
						key={idx}
						src={image.url}
						alt={image.alt}
					/>
				) : (
					<img key={idx} src={image.url} alt={image.alt} />
				);
			})}
		</motion.div>
	);
};

export default ImageGallery;
