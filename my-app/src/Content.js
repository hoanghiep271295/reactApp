import React from "react";
import {Button} from "reactstrap";
export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.forcustext = this.forcustext.bind(this);
    }
    forcustext(){
        console.log("value", this.textInput.current.value);
    }
    render() {
        return (
        <div>  
            <input ref={this.textInput }  />
            <Button color="danger" onClick={this.forcustext}>Content</Button>
        </div>);
    }
};