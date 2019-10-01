import React, { Component } from 'react'
import { addOrder } from './db.js'
import { Redirect } from 'react-router-dom'

class SubmitButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted :false,
    }
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton(e) {
    addOrder(
      this.props.data
    );
    this.setState({ submitted: true });
  }

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/orders"/>
    }
    return (
      <div>
        {redirect}
        <button onClick={this.clickButton}>Click Me!</button>
      </div>
    )
  }
}

export default SubmitButton;