import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey: key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            !key
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${key}]`
          }
        </p>
      </div>
    );
  }
}
