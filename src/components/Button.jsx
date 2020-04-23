import React, { Component } from "react";

class Button extends Component {
  runParentOnClick = () => {
    this.props.onClick(this.props.name);
  };

  render() {
    return (
      <button
        onClick={this.runParentOnClick}
        className='btn'
        id={this.props.id}
        name={this.props.name}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;
