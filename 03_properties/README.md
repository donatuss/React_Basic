# Properties on React Components

[Back](https://github.com/donatuss/React_Basic/blob/master/README.md)

#### Prototypes, properties requirement and default value
```javascript
import PropTypes from 'prop-types';

class PropsComponent extends Component {

    render() {
        const {txt1, txt2, num1} = this.props;

        return <div>
            <div>txt1={txt1}</div>
            <div>txt2={txt2}</div>
            <div>num1={num1}</div>
        </div>
    }
}

PropsComponent.propTypes = {
    num1: PropTypes.number.isRequired,
    txt1: PropTypes.string
};

PropsComponent.defaultProps = {
    txt2: "txtProperty-002"
};
```
