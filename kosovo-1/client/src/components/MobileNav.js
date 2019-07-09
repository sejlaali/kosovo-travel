import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import './MobileNav.css'

class MobileNav extends Component {

    render() {
        return ( 
        <div>
                <Menu noOverlay right>
                    <hr />
                <a className="menu-item" href="/">Logo</a>
                    <hr />
                    <a className="menu-item" href="/culture">People and Culture</a>
                    <hr />
                  <a className="menu-item" href="/activities">Things to See and Do</a>
                </Menu>
        </div>
        );
    }
}

export default MobileNav;