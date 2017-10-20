import React from 'react';
import Stepper from '../../components/Stepper';

export default class WelcomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    selectedItem: 0
  };

  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this)
  }

  handler(e) {
    e.preventDefault();

    this.setState({
      selectedItem: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Stepper handler={this.handler} />

        <h1>{this.state.selectedItem}</h1>
      </div>
    );
  }
}
