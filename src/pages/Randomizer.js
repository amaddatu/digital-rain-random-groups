import React, { Component, Fragment } from 'react';
import '../randomizer/randomizer.scss';

class Randomizer extends Component {
    render() {
        return (
            <header className="App-header">
                <div className="influence-sphere">
                    { (() => {
                        let frag = [];
                        for(let i = 0; i < 1000; i++){
                            //max-width 600;
                            // circle is 20px;
                            // 30
                            let additionalClasses = "";
                            if(i === 0){
                                additionalClasses += " pog-top-left";
                            }
                            if(i === 1){
                                additionalClasses += " pog-top-center";
                            }
                            if(i === 2){
                                additionalClasses += " pog-top-right";
                            }
                            if(i === 30){
                                additionalClasses += " pog-mid-left";
                            }
                            if(i === 31){
                                additionalClasses += " pog-mid-center";
                            }
                            if(i === 32){
                                additionalClasses += " pog-mid-right";
                            }
                            if(i === 60){
                                additionalClasses += " pog-bot-left";
                            }
                            if(i === 61){
                                additionalClasses += " pog-bot-center";
                            }
                            if(i === 62){
                                additionalClasses += " pog-bot-right";
                            }
                            frag.push(<img src={"/images/pog-circle.svg"} className={"pog" + additionalClasses} alt="POGGER" />);

                        }
                        return (
                            <Fragment>
                                {frag}
                            </Fragment>
                        );
                    })()}
                    <img src={"/images/pog-circle.svg"} className="pog" alt="POGGER" />
                </div>
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