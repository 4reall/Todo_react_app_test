import './app-filter.css';

const AppFilter = (props) => {
	const data = [
		{ name: 'all', label: 'Все сотрудники' },
		{ name: 'rised', label: 'На повышение' },
		{ name: 'moreThan1000', label: 'З/П больше 1000$' },
	];
	const buttons = data.map(({ name, label }) => {
		const active = props.condition === name;
		const clazz = active ? 'btn-light' : 'btn-outline-light';
		return (
			<button
				className={`btn ${clazz}`}
				type="button"
				key={name}
				onClick={() => {
					props.onChange('condition', name);
				}}>
				{label}
			</button>
		);
	});
	return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
