import React, { Component } from "react";
import "./index.pcss";

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: props.active
        };
    }
    render() {
        const active = this.state.page === this.props.active ? `${this.state.page} active` : "";
        return (
            <div className={`nav ${active}`}>
                <a className={`nav-menu`} onClick={this.handleClick} href="/index.html">
                    首页
                </a>
                <a className={`nav-menu`} onClick={this.handleClick} href="/shop.html">
                    商城
                </a>
                <a className={`nav-menu`} onClick={this.handleClick} href="/demo.html">
                    演示
                </a>
            </div>
        );
    }

    handleClick (e) {
        this.setState({
            page: "shop"
        });
        console.log(e.target);
    };
}

export default MainNav;
