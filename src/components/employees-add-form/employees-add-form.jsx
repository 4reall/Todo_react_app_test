import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			salary: "",
		};
	}

	handleNameChange = (e) => {
		this.setState(() => ({
			name: e.target.value,
		}));
	};

	handleSalaryChange = (e) => {
		this.setState(() => ({
			salary: e.target.value,
		}));
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.name || !this.state.salary) {
			return;
		}
		this.props.onAdd(this.state);
		this.setState(() => ({
			name: "",
			salary: "",
		}));
	};

	render() {
		const { name, salary } = this.state;

		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form className="add-form d-flex" onSubmit={this.onSubmit}>
					<input
						type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						value={name}
						onChange={this.handleNameChange}
					/>
					<input
						type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						value={salary}
						onChange={this.handleSalaryChange}
					/>
					<button type="submit" className="btn btn-outline-light">
						Добавить
					</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;
