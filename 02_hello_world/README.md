# Hello World

[Back](https://github.com/donatuss/React_Basic/blob/master/README.md)

##### React Class Component
```java
class ClassComponent extends Component {
    render() {
        return <h1>ClassComponent</h1>
    }
}
```
##### Stateless function Component
```java
const StatelessFunctionComponent = () => <h1>StatelessFunctionComponent</h1>;
```
##### React Class Component by createElement function
```java
class CreateElementFunctionComponent extends Component {
    render() {
        return React.createElement('h1', null, 'CreateElementFunctionComponent');
    }
}
```
