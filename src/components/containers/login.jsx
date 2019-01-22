import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/user';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClickLogin = this.handleClickLogin.bind(this);
  }

  handleClickLogin = () => {
    this.props.onLogin();
  };

  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label for="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pwd"
          />
        </div>

        <button type="button" onClick={this.handleClickLogin} className="btn btn-default">
          Submit
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => {
      dispatch(login());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
