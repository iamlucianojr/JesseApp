import React from 'react';
import { FormattedMessage } from 'react-intl';
import Stepper from '../../components/Stepper';
import messages from './messages';

export default class WelcomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Stepper />
    );
  }
}
