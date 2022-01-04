import {Component} from "react";

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    tick = () => this.setState({date: new Date()});

    componentDidMount() {
        console.log("componentDidMount")
        this.intervalId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
        clearInterval(this.intervalId);
    }

    render() {
        return <div>
            <div>Current time: {this.state.date.toLocaleTimeString()}</div>
        </div>
    }
}

export default Clock;