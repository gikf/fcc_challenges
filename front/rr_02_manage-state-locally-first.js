class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => ({
      messages: [...state.messages, state.input],
      input: ''
    }));
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
          <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
          <button onClick={this.submitMessage.bind(this)}>Add</button>
          <ul>
            {this.state.messages.map((item,j) => {
              return <li key={j}>{item}</li>            
            })}
          </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
