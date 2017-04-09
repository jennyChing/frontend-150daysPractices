import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Pip(props) {
  	if (props.className !== "hide") {
  	  return (
	    <div className={props.className} id={props.id}></div>
	  );
  } else {
      return (
	    <div></div>
	);
  }
}

class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			dice1: 6,
			dice2: 6,
		}
	}
	handleClick(){
		var roll1 = Math.floor(Math.random() * 6 + 1);
		var roll2 = Math.floor(Math.random() * 6 + 1);
		this.setState({dice1: roll1, dice2: roll2});
		console.log(this.state.dice1);
	}
	renderPip(d, i) {
	    var className = "pip pip_" + i;
	    var id = "die_" + d + "_pip_" + i;
	    return <Pip className={className} id={id}/>;
	}
	render() {
		if (this.state.dice1 === 6){
			return (
			    <div id="title">
			      <h1>Hey you! Give us roll!</h1>
			        <div className="die_face" id="die_1">
			          {this.renderPip(1, 1)}
			          {this.renderPip(1, 2)}
			          {this.renderPip(1, 3)}
			          {this.renderPip(1, 5)}
			          {this.renderPip(1, 6)}
			          {this.renderPip(1, 7)}
			        </div>
			        <div className="button btn_up" id="shaker">
			          <div className="btn_text" onClick={() => this.handleClick()}>Shake</div>
			        </div>
			    </div>
			);
		} else if (this.state.dice1 === 5){
			return (
			    <div id="title">
			      <h1>Hey you! Give us roll!</h1>
			        <div className="die_face" id="die_1">
			          {this.renderPip(1, 1)}
			          {this.renderPip(1, 3)}
			          {this.renderPip(1, 4)}
			          {this.renderPip(1, 5)}
			          {this.renderPip(1, 7)}
			        </div>
			        <div className="button btn_up" id="shaker">
			          <div className="btn_text" onClick={() => this.handleClick()}>Shake</div>
			        </div>
			    </div>
			);
		} else if (this.state.dice1 === 4){
			return (
			    <div id="title">
			      <h1>Hey you! Give us roll!</h1>
			        <div className="die_face" id="die_1">
			          {this.renderPip(1, 1)}
			          {this.renderPip(1, 3)}
			          {this.renderPip(1, 5)}
			          {this.renderPip(1, 7)}
			        </div>
			        <div className="button btn_up" id="shaker">
			          <div className="btn_text" onClick={() => this.handleClick()}>Shake</div>
			        </div>
			    </div>
			);
		} else if (this.state.dice1 === 3){
			return (
			    <div id="title">
			      <h1>Hey you! Give us roll!</h1>
			        <div className="die_face" id="die_1">
			          {this.renderPip(1, 1)}
			          {this.renderPip(1, 4)}
			          {this.renderPip(1, 7)}
			        </div>
			        <div className="button btn_up" id="shaker">
			          <div className="btn_text" onClick={() => this.handleClick()}>Shake</div>
			        </div>
			    </div>
			);
		} else if (this.state.dice1 === 2){
			return (
			    <div id="title">
			      <h1>Hey you! Give us roll!</h1>
			        <div className="die_face" id="die_1">
			          {this.renderPip(1, 1)}
			          {this.renderPip(1, 7)}
			        </div>
			        <div className="button btn_up" id="shaker">
			          <div className="btn_text" onClick={() => this.handleClick()}>Shake</div>
			        </div>
			    </div>
			);
		} else {
			return (
			    <div id="title">
			      <h1>Hey you! Give us roll!</h1>
			        <div className="die_face" id="die_1">
			          {this.renderPip(1, 4)}
			        </div>
			        <div className="button btn_up" id="shaker">
			          <div className="btn_text" onClick={() => this.handleClick()}>Shake</div>
			        </div>
			    </div>
			);
		}    
  	}
}

ReactDOM.render(
  <Game />,
  document.getElementById('page')
);