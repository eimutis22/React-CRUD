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

  componentWillMount() {
    console.log('--- WILL MOUNT ---');
  }

  componentDidMount() {
    console.log('--- DID MOUNT ---');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('--- WILL UPDATE ---')

    console.log('Props: ', this.props);
    console.log('State: ', this.state);

    console.log('Next Props: ', nextProps);
    console.log('Next State: ', nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('--- DID UPDATE ---')

    console.log('Props: ', this.props);
    console.log('State: ', this.state);

    console.log('Prev Props: ', prevProps);
    console.log('Prev State: ', prevState); 
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (true)
      return true; // Component can update

    return false; // Component can't update
  }

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
