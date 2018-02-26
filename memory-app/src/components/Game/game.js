import React, { Component } from "react";
import data from "../../images.json";


// Set game state // 

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            score: 0,
            topScore: 0
        };

        // in case need to Bind // 
    }

    // Life cycle // 
    componentDidMount(){
    // this.setState({ data: this.shuffleData(this.state.data) });
    }


    render(){
        return (
            <div>



            </div>


        )
    }


}