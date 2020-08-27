// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {

    state = {
        num1: 0,
        num2: 0,
        sum: 0,
        operator: ''
    }
    

    setNum = (e, num) => {
        e.preventDefault();
        this.setState({ [num]: e.target.value});
      }  

    handleOperator = (e) => {
        this.setState({ operator: e.target.value })
    }  

    ranNum = () => {
        if (this.state.operator === '+') {
         this.setState({ sum: (parseInt(this.state.num1) + parseInt(this.state.num2))})
        } else if (this.state.operator === '-') {
         this.setState({ sum: (parseInt(this.state.num1) - parseInt(this.state.num2))})
        } else if (this.state.operator === '*'){
         this.setState({ sum: (parseInt(this.state.num1) * parseInt(this.state.num2))})
        } else if (this.state.operator === '/') {
         this.setState({ sum: (parseInt(this.state.num1) / parseInt(this.state.num2))})
        }
    }  

    render () {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="number" 
                    placeholder="Enter your first number"
                    value={this.state.num1}
                    onChange={(e) => this.setNum (e, 'num1') }
                    />
                    {/* <span>+</span> */}
                    <label>
                        <select value={this.state.operator} onChange={ (e) => this.handleOperator(e)}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                        </select>
                    </label>


                    <input type="number" 
                    placeholder="Enter your first number"
                    value={this.state.num2}
                    onChange={(e) => this.setNum (e, 'num2') }
                    />

                    <button onClick={this.ranNum}>=</button>
                    <h3>Results: {this.state.sum}</h3>
                </div>
            </div>
        );
    }
}

export default Calculator;
