import React, { Component, PropTypes } from 'react';

export default class List extends Component {

  render() {
    const { values } = this.props;
    const dataElement = data => <tr key={data.title} ><td>{data.title}</td><td>{data.description}</td></tr>;
    return (
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {values.map(dataElement)}
        </tbody>
      </table>
    );
  }
}

List.propTypes = {
 values : PropTypes.array.isRequired
};
