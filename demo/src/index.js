import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from '../../dist/index';
import {countries} from './countryList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            suggestions: [],
            labels : ['country', 'capital'],
            selectedValue: ''
        }
    }

    getSelectedItem = (item) => {
        this.setState({selectedValue: item.country});
    }

    getSuggestions = (searchText) => { 
        let suggestions = [];
        if( searchText != "" ) {
            suggestions = countries.filter((country)=>{
                return country.country.toLowerCase().startsWith(searchText.trim().toLowerCase());
            });
        }
        this.setState({selectedValue: searchText, suggestions});
    }

    render(){
        return(
            <div>
                <div className="container">
                    <h1>Success!!</h1>
                    <Autocomplete placeholder="Yippeeee" suggestions={this.state.suggestions}
                    labels={this.state.labels} getSelectedItem={this.getSelectedItem}
                    selectedValue={this.state.selectedValue} getSuggestions={this.getSuggestions}
                    notFoundContent="Not Found"/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
