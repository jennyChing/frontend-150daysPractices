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
  document.getElementById('dice_container')
);


// $(document).ready(function () {
// 	$('.pip_4').hide();

// 	pressBtn('#shaker');

// 	$('#shaker').on('click', function() {
		
// 			$('h1').text('Shake, shake, shake...');
// 			$('h1').addClass('shake');

// 		setTimeout(function(){
// 			var roll1 = makeDieFace('#die_1');
// 			var roll2 = makeDieFace('#die_2');

// 			$('h1').removeClass('shake');

// 			if (roll1+roll2 == 2){
// 				$('h1').text('Snake eyes!');
// 			} else {
// 				$('h1').text(roll1 + roll2);				
// 			}

// 		}, 1000);

// 	});

// 	function pressBtn(button) {
// 		$('#shaker').on('mousedown', function() {
// 			$(this).removeClass('btn_up');
// 			$(this).addClass('btn_down');
// 		});
// 		$('#shaker').on('mouseup', function() {
// 			$(this).removeClass('btn_down');
// 			$(this).addClass('btn_up');
// 		});
// 	}


// 	function makeDieFace(dieId) {
// 		var roll = Math.floor(Math.random() * 6 + 1);
// 		var all = dieId + ' .pip';
// 		var pip_1 = dieId + '_pip_1';
// 		var pip_2 = dieId + '_pip_2';
// 		var pip_3 = dieId + '_pip_3';
// 		var pip_4 = dieId + '_pip_4';
// 		var pip_5 = dieId + '_pip_5';
// 		var pip_6 = dieId + '_pip_6';
// 		var pip_7 = dieId + '_pip_7';
		

// 		if (roll == 1){
// 			$(all).hide();
// 			$(pip_4).show();
// 		}
// 		if (roll == 2){
// 			$(all).hide();
// 			$(pip_1 + ', ' + pip_7).show();
// 		}
// 		if (roll == 3){
// 			$(all).hide();
// 			$(pip_1 + ', ' + pip_4 + ', ' + pip_7).show();
// 		}
// 		if (roll == 4){
// 			$(all).show();
// 			$(pip_2 + ', ' + pip_4 + ', ' + pip_6).hide();
// 		}
// 		if (roll == 5){
// 			$(all).show();
// 			$(pip_2 + ', ' + pip_6).hide();
// 		}
// 		if (roll == 6){
// 			$(all).show();
// 			$(pip_4).hide();
// 		}

// 		return roll;
// 	}	
// });
