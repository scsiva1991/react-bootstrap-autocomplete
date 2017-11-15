import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from '../../dist/index';

class App extends React.Component {
    render(){
        return(
            <div>
                <div className="container">
                    <h1>Success!!</h1>
                    <Autocomplete placeholder="Yippeeee"/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
