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
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Have a lunch')
		]
	};

	createTodoItem(label) {
		return {
			label: label,
			important: false, 
			id: this.maxId += 1,
			done: false
		}
	}

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
		const newItem = this.createTodoItem(text);

		this.setState(({ todoData }) => {
			return {
				todoData: [
					...todoData,
					newItem
				]
			}
		});
	};

	toggleProperty = (arr, id, propName) => {
		const idx = arr.findIndex((el) => el.id === id);

		const oldItem = arr[idx];
		const newItem = {...oldItem, [propName]: !oldItem[propName]};

		return [
				...arr.slice(0, idx),
				newItem, 
				...arr.slice(idx + 1)
			]
	}

	onToggleDone = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		});
	};

	onToggleImportant = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		});
	};


	render() {
		const { todoData } = this.state;
		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className="todo-app">
				<AppHeader toDo={todoCount} done={doneCount} />

				<div className="top-panel d-flex">
				<SearchPanel />
				<ItemStatusFilter />
				</div>

				<TodoList
				todos={ todoData }
				onDeleted={ (id) => this.deleteItem(id) }
				onToggleImportant={ this.onToggleImportant }
				onToggleDone={ this.onToggleDone }
				 />

				<ItemAddForm addItem={ this.addItem } />
			</div>
		);
	}
};

export default App;