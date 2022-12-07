class ExampleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isCLicked: false };
    }
    render() {
        if (this.state.isCLicked) {
            return 'You clicked  me';
        }
        return React.createElement(
            'button',
            { onClick: () => this.setState({ isCLicked: true }) },
            'Click me!'
        );
    }
}
const domContainer = document.querySelector('#root');
// create the root of react dom
const root = ReactDOM.createRoot(domContainer);
// render what we see

root.render(React.createElement("h1", {}, "Our First React page has rendered"));

root.render(React.createElement("h1", {}, "Our First React page has rendered"));


