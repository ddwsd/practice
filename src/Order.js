import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'


//add order date and time, order status(taken, completed, etc)
class Order extends Component {

  render(){
    return (
      <div>
        {this.props.order.data.item}
      </div>
    )
  }
}
export default withRouter(Order);
