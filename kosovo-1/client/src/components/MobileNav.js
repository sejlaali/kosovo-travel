import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import './MobileNav.css'

class MobileNav extends Component {

    render() {
        return ( 
        <div>
                <Menu noOverlay right>
                <a className="menu-item" href="/">Logo</a>
                <a className="menu-item" href="/culture">People and Culture</a>
                <a className="menu-item" href="/activities">Things to See and Do</a>
                <a className="menu-item" href="/auth/login">{this.props.loginOrOut}</a>
                </Menu>
        </div>
        );
    }
}

export default MobileNav;