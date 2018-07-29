import React, {Component} from "react";

export default class SearchComponent extends Component {
    styleContiner = {
        padding: 25
    };

    constructor() {
        super();
        this.state = {
            searchTerm: ''
        }
    }

    handleSerach(e) {
        e.preventDefault();
        this.props.onSerach(this.state.searchTerm);
    }

    hanldeOnChange(e) {
        const searchTerm = e.target.value;
        this.setState({
            searchTerm
        });
    }

    render() {
        return (
            <div style={this.styleContiner}>
                <form className="form-inline" onSubmit={this.handleSerach.bind(this)}>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" 
                            value={this.state.searchTerm} 
                            className="form-control" 
                            placeholder="Enter Movie Name" 
                            onChange={this.hanldeOnChange.bind(this)}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Serach</button>
                </form>
            </div> 
        )
    }   
}