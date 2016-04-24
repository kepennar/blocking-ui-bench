import React, { Component, PropTypes } from 'react';

export default class FormComponent extends Component {
  data = {};

  handleChange(e, field) {
    this.data[field] = e.target.value;
  }
  onSubmitHandler(e) {
    e.preventDefault();
    this.props.onSubmitHandler(this.data);
  }
  render() {
    const { onSubmitHandler } = this.props;

    return (
      <form name="example-react" onSubmit={e => this.onSubmitHandler(e)}>
        <p className="control">
          <input type="text" className="input" name="title" onChange={e => this.handleChange(e, 'title')} placeholder="title"/>
        </p>
        <p className="control">
          <input type="text" className="input" name="description" onChange={e => this.handleChange(e, 'description')}  placeholder="description"/>
        </p>
        <button type="submit" className="button is-primary" name="add" >Add</button>
      </form>
    );
  }
}
FormComponent.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};
