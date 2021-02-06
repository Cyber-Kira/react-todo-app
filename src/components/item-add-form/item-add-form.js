import React, { Component }from 'react';

import './item-add-form.css';

class ItemAddForm extends Component {

	render() {
    return (
      <div className="item-add-form">
        <input 
          type='text'
          className="form-control add-input"
          placeholder="Add new item"></input>
        <button 
          className="btn btn-outline-secondary"
          onClick={ () => this.props.addItem('hello') }>
          Add Item
        </button>
      </div>
    );
  };
};

export default ItemAddForm;