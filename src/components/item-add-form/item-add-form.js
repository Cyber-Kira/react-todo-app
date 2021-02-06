import React, { Component }from 'react';

import './item-add-form.css';

class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    e.target.reset();
  };

	render() {
    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        <input 
          type='text'
          className="form-control"
          placeholder="Add new item"
          onChange={ this.onLabelChange }></input>
        <button 
          className="btn btn-outline-secondary">
          Add Item
        </button>
      </form>
    );
  };
};

export default ItemAddForm;