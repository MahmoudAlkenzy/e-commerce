import React, { useEffect, useRef, useState } from 'react';
/* eslint-disable react/prop-types */ // TODO: upKgrade to latest eslint tooling

export default function ImageZoom(props) {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    function imageZoom(e) {
        const { clientX, clientY, offsetX, offsetY, target } = e;
        console.log(offsetX, offsetY, target, e);
        setPosition({ top: offsetY, left: offsetX });
    }
    useEffect(() => {
        document
            .getElementById('zoom')
            ?.addEventListener('mousemove', imageZoom);
        return document.removeEventListener('mousemove', imageZoom);
    }, [props]);
    console.log(props);
    return (
        <div
            id="zoom"
            className="position-relative bg-dark w-100 overflow-hidden z-1"
        >
            <img alt="hamada" {...props} />
            <div style={position} className="zoom"></div>
        </div>
    );
}
