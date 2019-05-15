import React, {Component} from 'react';
import './App.css';
import Main from './components/page/Main';
import MyAppBar from "./components/MyAppBar";

class App extends Component {
    render() {
        return (
            <div>
                <MyAppBar/>
                <Main/>
            </div>
        )
    }
}

export default App;
