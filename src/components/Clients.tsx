import MarketingText from './MarketingText';
import Space from './Space';

import {
	LogoXbox,
	LogoXing,
	LogoWindows,
	LogoPwa,
	LogoPlaystation,
	LogoMastodon,
	LogoIonic,
	LogoGitlab,
	LogoAppleAr,
	LogoAmplify,
} from '@styled-icons/ionicons-solid';

import { Venmo, Upwork } from '@styled-icons/boxicons-logos';

const Clients = () => {
	const iconList = [
		LogoXbox,
		LogoXing,
		LogoWindows,
		LogoPwa,
		LogoPlaystation,
		LogoMastodon,
		LogoIonic,
		LogoGitlab,
		LogoAppleAr,
		LogoAmplify,
		Venmo,
		Upwork,
	];

	return (
		<div
			style={{
				marginTop: '8em',
				marginBottom: '8em',
			}}
		>
			<MarketingText title="Clients" text="Who I've worked with" />
			<Space height="4em" />

			<div
				style={{
					display: 'flex',
					width: '90%',
					margin: 'auto',
					flexWrap: 'wrap',
					gap: '6em',
					alignContent: 'center',
					justifyItems: 'center',
				}}
			>
				{iconList.map((icon, idx) => {
					const Icon = icon;
					return (
						<Icon
							key={idx}
							style={{
								margin: '2em 5em',
								height: '8em',
								width: '4em',
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Clients;
