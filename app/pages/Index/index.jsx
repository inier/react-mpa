import React, { Component, Fragment } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

import "../../public/css/index.pcss";

class Index extends Component {
    render() {
        return (
            <Fragment>
                <Header active="index" />
                <div className="main con-wrap">这是首页</div>
                <Footer />
            </Fragment>
        );
    }
}

export default Index;
