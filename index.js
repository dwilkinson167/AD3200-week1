import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: ""
        }
    }


    boxClick = (e) => {
        this.setState({
            bgColor: "red"
        })
    }

    render() {
        return (
            <div className="App">

                <header className='headerStyle'>
                    <h1>This is my React refresh assignment.</h1>
                </header>


                <article className='experimentsHolder'>
                    <h2>Uopdate DOM example</h2>
                    <p>This is an example of an onClick event 'rendered' by react.</p>
                    <div className="boxClickCss"
                         style={{backgroundColor: this.state.bgColor}}
                         onClick={this.boxClick}>Click Me!</div>
                </article>

            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
