import React, { Component } from 'react'
import { db } from './db';
import TakeOrderButton from './TakeOrder'

class FullOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: {
                item: '',
                contact: '',
            },
        }

        const thisId = this.props.match.params.id;
        let newOrder = null;
        db.collection("users").doc(thisId).onSnapshot(snapshot => {
            newOrder = snapshot.data();
            this.setState({ order: newOrder });
        })
    }





    render() {
        const order = this.state.order;
        console.log(this.props);
        let post = null;
        if (!this.state.order) {
            post = <h1>NOT FOUND</h1>
        }
        else {
            post = (
                <div>
                    <h1>{order.item}</h1>
                    <h2>{order.contact}</h2>
                    <TakeOrderButton id={this.props.match.params.id}/>

                </div>
            )
        }
        return post;
    }
}

export default FullOrder;