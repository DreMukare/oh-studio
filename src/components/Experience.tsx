import MarketingTag from './MarketingTag';
import MarketingText from './MarketingText';
import Space from './Space';

const Job = ({
	date,
	companyName,
	role,
	tagText,
}: {
	date: string;
	companyName: string;
	role: string;
	tagText: string;
}) => {
	return (
		<div
			style={{
				fontFamily: 'Poppins, sans-serif',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				color: '#828282',
				textAlign: 'center',
				marginRight: '7em',
				marginLeft: '7em',
				marginBottom: '3.5em',
				width: '12em',
				fontSize: '0.9em',
			}}
		>
			<p>{date}</p>
			<p
				style={{
					fontWeight: 'bold',
					fontSize: '1.5em',
					color: '#000',
					margin: 0,
				}}
			>
				{companyName}
			</p>
			<p>{role}</p>
			<MarketingTag title={tagText} />
		</div>
	);
};

const Experience = () => {
	const jobs = [
		{
			date: '2017 - Present',
			companyName: 'OH.STUDIO',
			role: 'Freelance Designer',
			tagText: 'Director',
		},
		{
			date: '2021 - Present',
			companyName: 'Friendly Studio',
			role: 'Lead Product Designer',
			tagText: 'Freelance',
		},
		{
			date: '2022',
			companyName: 'R/GA',
			role: 'Senior Visual Designer',
			tagText: 'Freelance',
		},
		{
			date: '2021',
			companyName: 'R/GA',
			role: 'Senior Visual Designer',
			tagText: 'Freelance',
		},
		{
			date: '2021',
			companyName: 'AKQA',
			role: 'Senior Designer',
			tagText: 'Freelance',
		},
		{
			date: '2020',
			companyName: 'AKQA',
			role: 'Senior Designer',
			tagText: 'Freelance',
		},
		{
			date: '2019',
			companyName: 'UI Centric',
			role: 'Senior Product Designer',
			tagText: 'Freelance',
		},
		{
			date: '2017',
			companyName: 'Agency TK',
			role: 'Senior Digital Designer',
			tagText: 'Permanent',
		},
		{
			date: '2012',
			companyName: 'Agency TK',
			role: 'Digital Designer',
			tagText: 'Permanent',
		},
		{
			date: '2008',
			companyName: 'Next Level',
			role: 'Digital Designer',
			tagText: 'Permanent',
		},
		{
			date: '2009',
			companyName: 'string',
			role: 'Junior Digital Designer',
			tagText: 'Permanent',
		},
	];

	return (
		<div
			style={{
				width: '100%',
				margin: 'auto',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<MarketingText title="Experience" text="Where I've worked" />
			<Space height="4em" />
			<div
				style={{
					display: 'flex',
					width: '90%',
					margin: 'auto',
					flexWrap: 'wrap',
					alignContent: 'center',
					justifyItems: 'center',
				}}
			>
				{jobs.map((job, idx) => (
					<Job
						date={job.date}
						companyName={job.companyName}
						role={job.role}
						tagText={job.tagText}
						key={idx}
					/>
				))}
			</div>
		</div>
	);
};

export default Experience;
