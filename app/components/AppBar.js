// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import MenuIcon from 'material-ui-icons/Menu';
import SimpleMenu from './SimpleMenu';
//import MiniDrawer from './MiniDrawer';
import BottomNavigation from './BottomNavigation';
import SimpleBadge from './SimpleBadge';

const styles = theme => ({
  root: {
    marginTop: 0,
    width: '100%',
  },
  fab: {
    margin: theme.spacing.unit * 2,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Tooltip id="tooltip-top-end" title="Open Menu" placement="bottom">
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                <SimpleMenu></SimpleMenu>
            </IconButton>
          </Tooltip>
          <Typography type="title" color="inherit" className={classes.flex}>
            { props.title }
          </Typography>
          <SimpleBadge />
          <Tooltip id="tooltip-top-end" title="Login" placement="bottom">
            <Button color="contrast">{ props.login }</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>

        <BottomNavigation />


    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
