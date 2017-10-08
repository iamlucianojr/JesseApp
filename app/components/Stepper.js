/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import messages from "../containers/WelcomePage/messages";
import SplashScreen from './SplashScreen';

const styles = {
  root: {
    width: '100%',
    flexGrow: 1,
  },
};

class ProgressMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  render() {
    const classes = this.props.classes;
    return (
      <div>
        <SplashScreen title={messages.screens.one.title} subtitle={messages.screens.one.subtitle} active={this.state.activeStep === 0} />
        <SplashScreen title={messages.screens.two.title} subtitle={messages.screens.two.subtitle} active={this.state.activeStep === 1} />
        <SplashScreen title={messages.screens.three.title} subtitle={messages.screens.three.subtitle} active={this.state.activeStep === 2} />
        <SplashScreen title={messages.screens.four.title} subtitle={messages.screens.four.subtitle} active={this.state.activeStep === 3} />
        <MobileStepper
          type="progress"
          steps={4}
          position="static"
          activeStep={this.state.activeStep}
          className={classes.root}
          nextButton={
            <Button dense onClick={this.handleNext} disabled={this.state.activeStep === 3}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button dense onClick={this.handleBack} disabled={this.state.activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

ProgressMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgressMobileStepper);
