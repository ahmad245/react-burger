import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";

import classes from "./Navbar.module.css";
import Sidbar from "../Layout/Sidbar/Sidbar";

class Navbar extends Component {
    state={
        open:false
    }

    handelOpen=()=>{
        this.setState({open:true})
    }
    handelClose=()=>{
        this.setState({open:false})
    }
  preventDefault = (event) => event.preventDefault();

  render() {
    return (
        <div className={classes.Root}>

      <AppBar position="static">
        <Toolbar>
            <Sidbar  open={this.state.open} close={this.handelClose}></Sidbar>
          <IconButton className={classes.Icon} onClick={this.handelOpen} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography className={classes.Links,classes.MuiTypography}>
            <Link  underline='none' className={classes.Link} href="#" onClick={this.preventDefault} color="inherit">
              Burger
            </Link>
            <Link className={classes.Link} href="#" onClick={this.preventDefault} color="inherit">
              Check
            </Link>
          </Typography>

          <Button style={{alignSelf:'right'}} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}
export default Navbar;
