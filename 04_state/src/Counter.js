import {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num001: 1,
            num002: 2,
            num003: 3
        };
        this.update003 = this.update003.bind(this);
    }

    update001 = (x, e) => {
        console.log('x =', x);
        console.log('e =', e);
        this.setState({num001: parseInt(e.target.innerText) + x})
    }

    update002 = (x, e) => {
        console.log('x =', x);
        console.log('e =', e);
        this.setState({num002: parseInt(e.target.innerText) + x})
    }

    update003 = (e) => {
        console.log('e =', e);
        this.setState({num003: this.state.num003 + parseInt(e.target.innerText)})
    }

    render() {
        const {num001, num002, num003} = this.state;
        return <div>
            <h2 onClick={this.update001.bind(this, num001)}>{num001}</h2>
            <h2 onClick={(e) => this.update002(num002, e)}>{num002}</h2>
            <h2 onClick={this.update003}>{num003}</h2>
        </div>
    }
}

export default Counter;