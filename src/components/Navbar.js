import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { startLogout } from '../actions/auth';

const Navbar = ({ email, startLogout }) => (
    <div className="navbar">
        <Link to="/write"><Button><CreateOutlinedIcon /></Button></Link>
        <Link to={`/users/${email.split('@')[0]}`}><Button><DescriptionOutlinedIcon /></Button></Link>
        <Link to="/settings"><Button><SettingsOutlinedIcon /></Button></Link>
        <Button style={{float: "right"}} onClick={startLogout}><ExitToAppOutlinedIcon /></Button>
    </div>
);

const mapStateToProps = (state) => ({
    email: state.auth.user.email
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);