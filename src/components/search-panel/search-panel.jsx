import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}

	handleSearchChange(e) {
		const term = e.target.value;
		this.setState({ term });
		this.props.onChange('term', term);
	}

	render() {
		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="Найти сотрудника"
				value={this.state.term}
				onChange={(e) => {
					this.handleSearchChange(e);
				}}
			/>
		);
	}
}

export default SearchPanel;
