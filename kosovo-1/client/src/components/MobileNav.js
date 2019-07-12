import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import './MobileNav.css'
import kosovoImg from "../components/assets/kosovo-flag.png"

class MobileNav extends Component {

    render() {
        return ( 
        <div>
                <Menu noOverlay right>
                <a className="menu-item" href="/"><img id="header-img" src={kosovoImg} />Home 
</a>
               <hr/>
                <a className="menu-item" href="/culture">People and Culture</a>
                <hr/>
                <a className="menu-item" href="/activities">Things to See and Do</a>
                <hr/>
                <a className="menu-item" href="/auth/login">{this.props.loginOrOut}</a>
                <hr/>
                </Menu>
        </div>
        );
    }
}

export default MobileNav;