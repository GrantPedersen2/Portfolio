'use client'
import React, {useState, useEffect, useRef} from "react";
import BladeContent from "./BladeContent";

export default function Blade(props) {

    const updateCurrentIDX = (idx) => {
            props.buttonEx(props.keyID);
            console.log("my props idx: ", props.idx);
            console.log("currentKey", props.keyID);
    }

    return(
        <>
            <div className={"right-blade-buttons"}>
                <button className={"blade-button"} onClick={updateCurrentIDX}>
                    <span className={"button-label"}>{props.title}</span>
                </button>
            </div>

            {props.idx === props.keyID && (
                <BladeContent onBladeClose={() => {}} idCSS={props.id}>
                    <BladeContent.Header title={props.title}/>
                    <BladeContent.Body>
                        {props.detail}
                    </BladeContent.Body>
                    <BladeContent.Footer>
                        {props.footer}
                    </BladeContent.Footer>
                </BladeContent>
            )}
        </>
    );
};

