import MarketingTag from './MarketingTag';

const MarketingText = ({ title, text }: { title: string; text: string }) => {
	return (
		<div
			style={{
				width: '50%',
				margin: 'auto',
				fontFamily: 'Poppins, sans-serif',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<MarketingTag title={title} />
			<p
				style={{
					fontWeight: 'bold',
					fontSize: '2em',
					textAlign: 'center',
				}}
			>
				{text}
			</p>
		</div>
	);
};

export default MarketingText;
