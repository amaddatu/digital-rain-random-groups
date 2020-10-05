import React, { Component } from 'react';
import '../randomizer/randomizer.scss';

class Randomizer extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={"/images/pog-circle.svg"} className="pog" alt="POGGER" />
                <p>
                    Randomizer Page
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        );
    }
}

export default Randomizer;