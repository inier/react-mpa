import React, { Component, Fragment } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

class Index extends Component {
    render() {
        return (
            <Fragment>
                <Header active="demo" />
                <div className="main">这是demo</div>
                <Footer />
            </Fragment>
        );
    }
}

export default Index;
