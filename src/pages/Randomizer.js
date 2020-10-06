import React, { Component, Fragment } from 'react';
import '../randomizer/randomizer.scss';
import Pogger from '../randomizer/Pogger';

class Randomizer extends Component {
    constructor(props){
        super(props);
        let poggers = [];
        for(let i = 0; i < 1000; i++){
            poggers.push("");
        }
        let width = 600;
        let poggerWidth = 20;
        this.state={
            poggers: poggers,
            width: width,
            poggerWidth: poggerWidth,
            poggerTopLeft: -1 * (width / poggerWidth) - 1,
            poggerTopLeftExcludeMod: (width / poggerWidth) - 1,
            poggerTopCenter: -1 * (width / poggerWidth),
            poggerTopRight: -1 * (width / poggerWidth) + 1,
            poggerTopRightExcludeMod: 0,
            poggerMidLeft: -1,
            poggerMidLeftExcludeMod: (width / poggerWidth) - 1,
            poggerMidRight: 1,
            poggerMidRightExcludeMod: 0,
            poggerBotLeft: (width / poggerWidth) - 1,
            poggerBotLeftExcludeMod: (width / poggerWidth) - 1,
            poggerBotCenter: (width / poggerWidth),
            poggerBotRight: (width / poggerWidth) + 1,
            poggerBotRightExcludeMod: 0
        };
        // *****************

        // let pogPosition = "";
        // if(i === 0){
        //     pogPosition = " pog-top-left";
        // }
        // if(i === 1){
        //     pogPosition = " pog-top-center";
        // }
        // if(i === 2){
        //     pogPosition = " pog-top-right";
        // }
        // if(i === 30){
        //     pogPosition = " pog-mid-left";
        // }
        // if(i === 31){
        //     pogPosition = " pog-mid-center";
        // }
        // if(i === 32){
        //     pogPosition = " pog-mid-right";
        // }
        // if(i === 60){
        //     pogPosition = " pog-bot-left";
        // }
        // if(i === 61){
        //     pogPosition = " pog-bot-center";
        // }
        // if(i === 62){
        //     pogPosition = " pog-bot-right";
        // }
        //******************
    }
    updateHoverPogger(index){
        console.log(index);
        let poggers = this.state.poggers;
        for(let i = 0; i < poggers.length; i++){
            let poggerTopLeft = index + this.state.poggerTopLeft;
            if(poggerTopLeft % (this.state.width / this.state.poggerWidth) === this.state.poggerTopLeftExcludeMod){
                poggerTopLeft = -1;
            }
            let poggerTopRight = index + this.state.poggerTopRight;
            if(poggerTopRight % (this.state.width / this.state.poggerWidth) === this.state.poggerTopRightExcludeMod){
                poggerTopRight = -1;
            }
            
            let poggerTopCenter = index + this.state.poggerTopCenter;

            let poggerMidLeft = index + this.state.poggerMidLeft;
            if(poggerMidLeft % (this.state.width / this.state.poggerWidth) === this.state.poggerMidLeftExcludeMod){
                poggerMidLeft = -1;
            }
            let poggerMidRight = index + this.state.poggerMidRight;
            if(poggerMidRight % (this.state.width / this.state.poggerWidth) === this.state.poggerMidRightExcludeMod){
                poggerMidRight = -1;
            }

            let poggerBotLeft = index + this.state.poggerBotLeft;
            if(poggerBotLeft % (this.state.width / this.state.poggerWidth) === this.state.poggerBotLeftExcludeMod){
                poggerBotLeft = -1;
            }
            let poggerBotRight = index + this.state.poggerBotRight;
            if(poggerBotRight % (this.state.width / this.state.poggerWidth) === this.state.poggerBotRightExcludeMod){
                poggerBotRight = -1;
            }
            
            let poggerBotCenter = index + this.state.poggerBotCenter;


            if(i === index){
                poggers[i] = "pog-mid-center";
            }
            else if(i === poggerTopLeft){
                poggers[i] = "pog-top-left";
            }
            else if(i === poggerTopCenter){
                poggers[i] = "pog-top-center";
            }
            else if(i === poggerTopRight){
                poggers[i] = "pog-top-right";
            }
            else if(i === poggerMidLeft){
                poggers[i] = "pog-mid-left";
            }
            else if(i === poggerMidRight){
                poggers[i] = "pog-mid-right";
            }
            else if(i === poggerBotLeft){
                poggers[i] = "pog-bot-left";
            }
            else if(i === poggerBotCenter){
                poggers[i] = "pog-bot-center";
            }
            else if(i === poggerBotRight){
                poggers[i] = "pog-bot-right";
            }
            else{
                poggers[i] = "";
            }
        }
        this.setState({poggers: poggers});
    }
    render() {
        return (
            <header className="App-header">
                <div className="influence-sphere">
                    { (() => {
                        let frag = [];
                        for(let i = 0; i < this.state.poggers.length; i++){
                            //max-width 600;
                            // circle is 20px;
                            // 30
                            //frag.push(<img src={"/images/pog-circle.svg"} className={"pog" + additionalClasses} alt="POGGER" />);
                            frag.push(<Pogger poggerClass={this.state.poggers[i]} poggerNumber={i} updateHoverPogger={this.updateHoverPogger.bind(this)} key={"pogger-" + i}/>);
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