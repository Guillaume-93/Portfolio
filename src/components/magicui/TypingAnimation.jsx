"use client";

import Proptype from "prop-types";
import { cn } from "../../utils/lib.js";
import { useEffect, useState } from "react";

export default function TypingAnimation({ text, duration = 150, className }) {
    const [displayedText, setDisplayedText] = useState("");
    const [i, setI] = useState(0);

    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prevState) => prevState + text.charAt(i));
                setI(i + 1);
            } else {
                clearInterval(typingEffect);
            }
        }, duration);

        return () => {
            clearInterval(typingEffect);
        };
    }, [duration, i, text]);

    return (
        <h1
            className={cn(
                "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
                className,
            )}
        >
            {displayedText ? displayedText : text}
        </h1>
    );
}

TypingAnimation.propTypes = {
    text: Proptype.string.isRequired,
    duration: Proptype.number,
    className: Proptype.string,
};
