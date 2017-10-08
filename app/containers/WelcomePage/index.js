import React from 'react';
import { FormattedMessage } from 'react-intl';
import Stepper from '../../components/Stepper';
import SplashScreen from '../../components/SplashScreen';

export default class WelcomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Stepper />
      </div>
    );
  }
}
