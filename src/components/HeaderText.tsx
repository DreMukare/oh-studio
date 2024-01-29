import './HeaderText.sass';

const HeaderText = (props: { text: string }) => {
	const { text } = props;
	return <p className="headerText">{text}</p>;
};

export default HeaderText;
