// Code YouTubeDebugger Component Here
import React from "react"

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    bitRateHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolutionHandler = () => {
       this.setState({
            settings: {
                ...this.state.settings,
                video: {
                resolution: '720p'
                }
                
            }
        }, () => console.log(this.state))
    }


    render(){
        return(
            <div>
                <label>{this.state.settings.bitrate}</label>
                <br></br>
                <button className="bitrate" onClick={this.bitRateHandler}>bitrate
                </button>
                <br></br>
                <label>{this.state.settings.video.resolution}</label>
                <br></br>
                <button className="resolution" onClick={this.resolutionHandler}>resolution</button>
            </div>
        )
    }
}