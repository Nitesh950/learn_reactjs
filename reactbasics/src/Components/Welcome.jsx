import React from "react";
import { Component } from "react";

class Welcome extends Component{
    render(){
        return(
            <>
            <h2>This is a class component for {this.props.name}</h2>
            {this.props.children}
            </>
        ) 

    }
}

export default Welcome