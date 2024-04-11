import React from "react";
import Header from "@/components/layout/frontend/Header";
import Footer from "@/components/layout/frontend/Footer";

const Frontend = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
}
export default Frontend;