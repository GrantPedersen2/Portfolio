'use client';
import React, {useEffect, useRef, useState} from "react";
import Blade from "./Blade";

export default function Dashboard(props) {
    const [currentIDX, setCurrentIDX] = useState(1);

    const updateCurrentIDX = (idx) => {
        setCurrentIDX(idx)
    }

    const allBlades = props.blades.map((blade, idx) => (
            <Blade key={idx} keyID={blade.keyID} idx={currentIDX} id={blade.id} title={blade.title} detail={blade.detail} footer={blade.footer} buttonEx={updateCurrentIDX}/>
        ));

    return (
        <div className={"dashboard-setup"}>
            <div className={"blade-wrapper"}>
                {allBlades}
            </div>
        </div>
    );
};