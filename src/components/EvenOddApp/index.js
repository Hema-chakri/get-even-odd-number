// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState({count: Math.floor(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="title">Count {count}</h1>
        {count % 2 === 0 ? (
          <p className="count-type">Count is Even</p>
        ) : (
          <p className="count-type">Count is Odd</p>
        )}
        <button type="button" className="butn" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="random-num">
          *Increase By Random Number between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
