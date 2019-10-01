import React from 'react'
import Order from './Order'
import { db } from './db'
import { Link } from 'react-router-dom'


class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [

            ]
        };
        db.collection('users').orderBy("timestamp","desc").onSnapshot(snapshot => {
            let copyOrders = []
            snapshot.forEach(element => {
                copyOrders.push({
                    id: element.id,
                    data: element.data()
                });
                this.setState({ orders: copyOrders });
            });
        })

    }

    render() {
        const orders = this.state.orders;
        console.log(this.props);
        const orderList = orders.map((order) => <Link to={this.props.match.url +'/'+ order.id} key={order.id}><Order order={order} /></Link>);
        return (
            <div>
                {orderList}
            </div>
        )
    }
}

export default Orders