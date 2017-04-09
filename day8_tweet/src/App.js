import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import day2_calculator from './day2_calculator/index.js';
// import day3_tictactoe from './day3_tictactoe/index.js';
// import day4_memoryGame from './day4_memoryGame/index.js';
// import day5_dice from './day5_dice/index.js';
import day6_tweet from './day6_tweet/index.js';

const BasicExample = () => (
  <Router>
    <div>
    <h1> Hi I am Jenny Ching </h1>
    <h2>This is my website collections built with ReactJS.</h2>
      <p>Day1 <Link to="/day1"> Homepage </Link></p>
      <p>Day2 <Link to="/day2"> Calculator </Link></p>
      <p>Day3<Link to="/day3"> TicTacToe </Link></p>
      <p>Day4<Link to="/day4"> Memory Game </Link></p>
      <p>Day5<Link to="/day5"> Dice </Link></p>
      <p>Day6<Link to="/day6"> Tweet </Link></p>


      <Route path="/day6" component={day6_tweet}/>
      
    </div>
  </Router>
)


export default BasicExample