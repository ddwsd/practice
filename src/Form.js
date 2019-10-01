import React from 'react';
import SubmitButton from './Submit'


class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            details: '',
        }

        this.textChange = this.textChange.bind(this);
    }

    textChange(e) {
        const name = e.target.name;
        this.setState({ [name]: e.target.value  });
      }


    render(){
        const text = this.state.text;
        const details = this.state.details;
        const copyState = {...this.state};
        return (
            <fieldset>
            <legend>Enter anything you want!</legend>
            Item:
            <input value={text} name='text'
              onChange={this.textChange} /><br />
            Contact:
            <input value={details} name='details'
              onChange={this.textChange}/>
            <h1>{text.length}</h1>
            <SubmitButton data ={copyState} />
          </fieldset>
        )
    }
}


export default Form;