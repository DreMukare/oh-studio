import './HeaderText.sass';

const HeaderText = (props: {
	text: string;
	width: string;
	style: { [key: string]: string };
}) => {
	const { text, width, style } = props;
	return (
		<p className="headerText" style={{ width: width, ...style }}>
			{text}
		</p>
	);
};

export default HeaderText;
