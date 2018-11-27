import React, { Component } from 'react';

class ReportItem extends Component {

  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    const {onDelete, id} = this.props;

    onDelete(id);
  }

  render() {
    const {id, timestamp, product, issue, town} = this.props;

    return (
      <div>
        <span>{timestamp}</span> {' | '}
        <span>{product}</span> {' | '}
        <span>{issue}</span> {' | '}
        <span>{town}</span> {' | '}
        <button onClick={this.onDelete}>Delete</button>
      </div>
    );
  }
}

export default ReportItem;
