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
		<div className="imageGalleryContainer">
			{imageData.map((image: { url: string; alt: string }, idx: number) => (
				<img key={idx} src={image.url} alt={image.alt} />
			))}
		</div>
	);
};

export default ImageGallery;
