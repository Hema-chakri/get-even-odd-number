// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Count 0</h1>
        <p className="count-type">Count is Even</p>
        <button type="button" className="butn">
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
