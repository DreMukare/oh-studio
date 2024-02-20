import MarketingText from './MarketingText';
import Space from './Space';

const Clients = () => {
	return (
		<div>
			<MarketingText title="Clients" text="Who I've worked with" />
			<Space height="4em" />
			{/* TODO: Finish building out section */}
			{/* <div
				style={{
					display: 'flex',
					width: '90%',
					margin: 'auto',
					flexWrap: 'wrap',
					alignContent: 'center',
					justifyItems: 'center',
				}}
			>
      {iconList.map((icon: Icon, idx) => {
        return <Icon />
      })}
      </div> */}
		</div>
	);
};

export default Clients;
