import Proptypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export default class Autocomplete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isClosed: false
        }
    }

    //Function to open suggestion container
    openSuggestions = () => {
        this.setState({isClosed: true});
    }

    //Function to close suggestion container
    closeSuggestions = () => {
        this.setState({isClosed: false});
    }

    //Function to determine when to open suggestion container
    renderSuggestions = () => {
        //console.log(this.props.suggestions.length, this.props.selectedValue.trim().length);
        return this.props.suggestions.length > 0 || this.props.selectedValue.trim().length > 0;
    }

    componentWillReceiveProps = (nextprops) => {
        if(!this.state.isClosed)
            this.openSuggestions();
    }

    render() {
        //Flag to show suggestion container
        const shouldOpen = this.state.isClosed && this.renderSuggestions();
        let content;
        //console.log(shouldOpen, this.state.isClosed, this.renderSuggestions(), '@', this.props.selectedValue);
        if( this.props.suggestions.length > 0 ) {
            content  =  this.props.suggestions.map((suggestion, index) => {
                let labels = this.props.labels.map(label => {
                    if(!suggestion[label])
                        throw new Error(`No property named ${label} found in suggestion item`);
                    return suggestion[label];
                });
                return(
                    <li key={index}
                    onClick={() => {this.props.getSelectedItem(suggestion); this.closeSuggestions();}}
                    className="suggestion-list">
                        <div className="suggestion-item">
                            {labels.join(' : ')}
                        </div>
                    </li>
                )
            });
        } else {
            content = (
                <li
                className="suggestion-list">
                    <div className="suggestion-item">
                        {this.props.notFoundContent || 'No Results Found'}
                    </div>
                </li>
            );
        }

        return(
            <div>
                <div className="form-group mg-b-0">
                    <input type="text" className="form-control"
                    placeholder={ this.props.placeholder || 'Type here to search'}
                    value={this.props.selectedValue} onChange={(e) => this.props.getSuggestions(e.target.value)}/>
                </div>
                <div>
                    <ul className="suggestion-container" style={{display: shouldOpen ? 'block' : 'none' }}>
                         {content}
                    </ul>
                </div>
            </div>
        )
    }
}

Autocomplete.proptypes = {
    placeholder: Proptypes.string,
    selectedValue: Proptypes.string,
    suggestions: Proptypes.array.isRequired,
    labels: Proptypes.array.isRequired,
    getSelectedItem: Proptypes.func.isRequired,
    getSuggestions: Proptypes.func.isRequired,
    notFoundContent: Proptypes.string
}
