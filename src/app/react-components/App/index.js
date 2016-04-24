import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../actions';

import FormComponent from './Form';
import List from './List';

class App extends Component {

  render() {
    const { datas, actions } = this.props;
    return (
      <div>
        <h1 className="title is-1">React app</h1>
        <FormComponent onSubmitHandler={data => actions.addData(data)} />
        <List values={datas} />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    datas: state.datas,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
