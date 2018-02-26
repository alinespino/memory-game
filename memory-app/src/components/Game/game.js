import React, { Component } from "react";
import data from "../../images.json";
// pending to import header, navbar, container, footer //


// Set game state // 

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            score: 0,
            topScore: 0
        };

// ### DELETE THIS ###  in case need to Bind, will go here  ### //
    }

// Life cycle // 
componentDidMount(){
    this.setState({data: this.shuffleCards(this.state.data)});
    }

// CORRECT GUESS // ADD POINTS TO SCORE // 

handleCorrectGuess = (newData) => {
// Starting scores in initial state : 0 //
    const{topScore, score} = this.state;
    // create new score and new top score to keep track of highest scores // 
    const newScore = score +1;
    // If new score is greater than current top score: new topScore will be new score, if not top score will remain.
    const newTopScore = newScore > topScore ? newScore: topScore;
    
    // Update state // 
    this.setState({
        data: this.shuffleCards(newData),
        score: newScore,
        topScore: newTopScore
    });
};


// // INCORRECT GUESS // 
// Once the user's score is reset after an incorrect guess, the game should restart.

handleIncorrectGuess = (data) => {
    this.setState({
        data: this.resetScore(data),
        score:0
    });
};

// SHUFFLE CARDS // 
// Every time an image is clicked, the images rendered to the page should
//  shuffle themselves in a random order.

shuffleCards = data => {

      for (let i= data.length -1 ; i > 0; i++){
          const j = Math.floor(Math.random() * (i + 1));
          const temp = data[i];
          data[i] = data[j];
          data[j] = temp;
      }
      return data;
}

//* RESET SCORE // 
//The user's score should be incremented when clicking an image for the first time. 
//The user's score should be reset to 0 if they click the same image more than once.

resetScore = (data) => {
    // ... puts all objects in array // 
    const resetScore = data.map(item => ({ ...item, clicked:false}));
    return this.shuffleData(resetScore);
}


// HANDLE CLICKS // Each image should listen for click events. //
// track cards by id, assign if guess was correct or incorrect // 
handleClicks = (id) => {
    let correctGuess = false;
    const newData = this.state.data.map(item => {
        const newItem = { ...item };
        if (newItem.id === id) {
            if(!newItem.clicked){
                newItem.clicked = true;
                correctGuess = true;
            }
        }
        return newItem;
    });
    correctGuess ? this.handleCorrectGuess(newData) : this.handleIncorrectGuess(newData);
    
};


// RENDER APP //

    render(){
        return (
            <div>
               <h1>Test</h1>


            </div>
        )
    }

};

export default Game;