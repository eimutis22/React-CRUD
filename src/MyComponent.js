import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

const defaultProps = {
  title: 'Default App Title'
};

class MyComponent extends Component {
  render() {

    // Tidier way
    const { title, name, onClick } = this.props;

    return (
      <div className="MyComponent">
        <h3>This is a component that is dropped inside another component..</h3>
        <p>Title: {title}</p>
        <p>Name: {name}</p>
        <div>
          <button onClick={onClick}>Click Me</button>
        </div>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
