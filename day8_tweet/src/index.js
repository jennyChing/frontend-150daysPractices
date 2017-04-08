import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <input value={this.props.title} onChange={this.handleChange.bind(this)} autoFocus />
        <h1> {this.props.title} </h1>
      </div>
    );
  }
}

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Tweet here!",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
      </div>
    );
  }
}

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);
