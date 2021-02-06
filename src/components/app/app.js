import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

class App extends Component {

	maxId = 100;

	state = {
		todoData: [
			{ label: 'Drink Coffee', important: false, id: 1 },
			{ label: 'Make Awesome App', important: true, id: 2 },
			{ label: 'Have a lunch', important: false, id: 3 }
		]
	};

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);

			return {
				todoData: [
					...todoData.slice(0, idx), 
					...todoData.slice(idx + 1)
				]
			};
		});
	};

	addItem = (text) => {
		const newItem = {
			label: text,
			important: false, 
			id: this.maxId += 1
		}

		this.setState(({ todoData }) => {
			return {
				todoData: [
					...todoData,
					newItem
				]
			}
		});
	};

	render() {
		const { todoData } = this.state;
		return (
			<div className="todo-app">
				<AppHeader toDo={1} done={3} />

				<div className="top-panel d-flex">
				<SearchPanel />
				<ItemStatusFilter />
				</div>

				<TodoList 
				todos={ todoData }
				onDeleted={ (id) => this.deleteItem(id) } />

				<ItemAddForm addItem={ this.addItem } />
			</div>
		);
	}
};

export default App;