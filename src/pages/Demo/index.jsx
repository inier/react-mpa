import React, { Component, Fragment } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Image from "../../component/Image";

import "./index.pcss";
class Index extends Component {
    render() {
        return (
            <Fragment>
                <Header active="demo" />
                <div className="main con-wrap">
                    <p>这是demo</p>
                    <Image className="" src={require("../../assets/img/1.jpg")} />
                    <Image className="" src={require("../../assets/img/2.jpg")} />
                    <Image className="" src={require("../../assets/img/3.jpg")} />
                    <Image className="" src={require("../../assets/img/4.jpg")} />
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default Index;
