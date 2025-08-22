'use client';
import {createContext, useContext, useEffect} from "react";
import "../styles/blade.css";

// @ts-ignore
const bladeContext = createContext();

export default function BladeContent({children, onBladeClose, idCSS}) {
    return (
        <div className={"blade"} id={idCSS}>
            <bladeContext.Provider value={{ onBladeClose }}>
                {children}
            </bladeContext.Provider>
        </div>
    );
};

BladeContent.Header = function BladeHeader(props){
    return (
            <h1 style={{color: "#fffff"}}>
                {props.title}
            </h1>
    );
}

BladeContent.Body = function BladeBody(props) {
    return (
        <>{props.children}</>
    );
}

BladeContent.Footer = function BladeFooter(props) {
    return <div>{props.children}</div>;
}