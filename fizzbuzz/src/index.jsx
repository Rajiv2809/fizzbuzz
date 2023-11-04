import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

function CounterDisplay({count}){
  if (count === 0){
    return <p>{count}</p>;
  }
  if (count %5 === 0 && count %7 === 0  ){
    return <p>FizzBuzz</p>;
  }
  if (count %5 === 0){
    return <p>Fizz</p>;

  }
  if(count %7 === 0 ){
    return <p>Buzz</p>;
  }

  return <p>{count}</p>;
}
function IncreaseButton({ increase }) {
  return (
    <div>
      <button onClick={increase}>+ Increase</button>
    </div>
  );
}

function ResetButton({ reset }) {
  return (
    <div>
      <button onClick={reset}>- Reset</button>
    </div>
  );
}

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onIncreaseEventHandler = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  onResetEventHandler = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<CounterApp />);
