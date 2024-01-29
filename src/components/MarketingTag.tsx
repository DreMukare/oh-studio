import './MarketingTag.sass';

const MarketingTag = (props: { title: string }) => {
	const { title } = props;
	return <div className="marketingTag">{title}</div>;
};

export default MarketingTag;
