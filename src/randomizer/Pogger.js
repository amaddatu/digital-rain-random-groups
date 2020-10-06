import React, { Component, Fragment } from 'react';

class Pogger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: props.poggerNumber,
            updateHoverPogger: props.updateHoverPogger
        }
    }
    onMouseOverHandler(){
        this.state.updateHoverPogger(this.state.index);
    }

    render(){
        let additionalClasses = "";
        // console.log(this.props.poggerClass);
        if(this.props.poggerClass.length > 0){
            additionalClasses += " " + this.props.poggerClass;
        }
        return(
            <Fragment>
                <img src={"/images/pog-circle.svg"} className={"pog" + additionalClasses} onMouseEnter={this.onMouseOverHandler.bind(this)} alt="POGGER" />
            </Fragment>
        );
    }
}
export default Pogger; 