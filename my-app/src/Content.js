import React from "react";
// import {Button} from "reactstrap";
export class Content extends React.Component {
    constructor(param) {
        super(param);
        // super(param);
        console.log('this1',this);
        
        console.log('this',this.props);
        
        // this.textInput = React.createRef();
        // this.forcustext = this.forcustext.bind(this);
    }
    forcustext(){
        // console.log("value", this.textInput.current.value);
    }
    render() {
        // console.log("this.props.name",this.props.name);
        return (
        <div>  
            <input ref={this.textInput }  defaultValue={this.props.name} />
            {/** <Button color="danger" onClick={this.forcustext}>Content</Button>*/}
        </div>);
    }
};