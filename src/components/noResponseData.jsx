import React, {Component} from "react";

export default class NoDataComponent extends Component {
    styles = {
        paddingLeft: 40
    }

    render() {
        return <p style={this.styles}>No data available with this search</p>;
    }
}