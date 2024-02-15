import MarketingTag from './MarketingTag';

const MarketingText = ({ title, text }: { title: string; text: string }) => {
	return (
		<div>
			<MarketingTag title={title} />
			<p className="marketingText">{text}</p>
		</div>
	);
};

export default MarketingText;
