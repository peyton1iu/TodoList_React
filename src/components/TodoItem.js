import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
        // In React, style uses camel case instead of hyphen
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
    }
  }

  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input 
            type='checkbox' 
            onChange={this.props.markComplete.bind(this, id)}
          />
          &nbsp;
          {title}
          <button 
            style={btnStyle}
            onClick={this.props.delTodo.bind(this, id)}
          >
            X
          </button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
