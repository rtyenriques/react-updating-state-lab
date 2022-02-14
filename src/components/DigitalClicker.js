// Code DigitalClicker Component Here
import React from "react"

export default class DigitalClicker extends React.Component {
  constructor(){
      super()
      this.state = {
          timesClicked: 0
      }
  }

  handleClick = () => {
    this.setState(prevState => {
        return {
            timesClicked: prevState.timesClicked + 1
        }
    })
  }

  render(){
      return(
          <div>
          <label>{this.state.timesClicked}</label>
          <br></br>
          <button onClick={this.handleClick}>{this.state.timesClicked}</button>
          </div>
      )
  }
}