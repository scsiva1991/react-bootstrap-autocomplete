import Proptypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class Autocomplete extends React.Component {
    render() { 
        return(
            <div>
                <div className="form-group">
                    <input type="text" className="form-control"
                    placeholder={ this.props.placeholder || 'Type here to search'}/>
                </div>
            </div>
        )
    }
}

Autocomplete.proptypes = {
    placeholder: Proptypes.string
}
