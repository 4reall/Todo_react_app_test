import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: 'John Smith',
					salary: 800,
					increase: true,
					rise: false,
					id: 1,
				},
				{
					name: 'Alex Green',
					salary: 3000,
					increase: false,
					rise: false,
					id: 2,
				},
				{
					name: 'Jack Braun',
					salary: 5000,
					increase: true,
					rise: false,
					id: 3,
				},
			],
			term: '',
			condition: 'all',
		};
		this.maxId = 4;
	}

	onDelete = (id) => {
		this.setState(({ data }) => {
			return { data: data.filter((item) => item.id !== id) };
		});
	};

	onAdd = ({ name, salary }) => {
		const newUser = {
			name: name,
			salary: salary,
			increase: false,
			rise: false,
			id: this.maxId++,
		};
		this.setState(({ data }) => {
			return { data: [...data, newUser] };
		});
	};

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => {
			return {
				data: data.map((item) => {
					if (item.id === id) {
						return { ...item, [prop]: !item[prop] };
					}
					return item;
				}),
			};
		});
	};

	filterEmpSearch = (emp, term) => {
		const searchReg = new RegExp(`${term}`, 'gi');
		if (term === '') {
			return emp;
		}
		return emp.filter((item) => {
			return searchReg.test(item.name);
		});
	};

	filterEmp = (emp, cond) => {
		switch (cond) {
			case 'rised':
				return emp.filter((item) => item.rise);
			case 'moreThan1000':
				return emp.filter((item) => item.salary > 1000);
			default:
				return emp;
		}
	};

	onChange = (prop, state) => {
		this.setState({ [prop]: state });
	};

	onSalaryChange = (id, salary) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, salary: salary };
				}
				return item;
			}),
		}));
	};

	render() {
		const { data, term, condition } = this.state;
		const employees = data.length;
		const rised = data.filter((item) => item.rise).length;
		const visableData = this.filterEmpSearch(
			this.filterEmp(data, condition),
			term
		);
		// const visableData = this.filterEmp(data, condition);
		return (
			<div className="app">
				<AppInfo employeesNum={employees} employeesAtRiseNum={rised} />

				<div className="search-panel">
					<SearchPanel onChange={this.onChange} />
					<AppFilter onChange={this.onChange} condition={condition} />
				</div>

				<EmployeesList
					data={visableData}
					onDelete={this.onDelete}
					onToggleProp={this.onToggleProp}
					onSalaryChange={this.onSalaryChange}
				/>
				<EmployeesAddForm onAdd={this.onAdd} />
			</div>
		);
	}
}

export default App;
