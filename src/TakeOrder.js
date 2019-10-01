import React, { Component } from 'react'
import { updateStatus } from './db'
import {Redirect} from 'react-router-dom'

class TakeOrderButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
        }

        this.takeOrder = this.takeOrder.bind(this);
    }

    takeOrder(e) {
        updateStatus("pending", this.props.id);
        this.setState({submitted: true});
    }

    render() {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/orders" />
        }
        return (
            <div>
                {redirect}
                <button onClick={this.takeOrder}>Take up order!</button>
            </div>

        )
    }
}

export default TakeOrderButton;