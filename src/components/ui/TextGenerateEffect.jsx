"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/lib.js";
import PropTypes from "prop-types";
import useVisibilityObserver from "../../utils/useVisibilityObserver.js";

export default function TextGenerateEffect({ words, className, filter = true, duration = 0.5 }) {
    const [scope, animate] = useAnimate();
    const [isTextVisible, elementRef] = useVisibilityObserver(0.1);
    let wordsArray = words.split(" ");

    useEffect(() => {
        if (isTextVisible) {
            animate(
                "span",
                {
                    opacity: 1,
                    filter: filter ? "blur(0px)" : "none",
                },
                {
                    duration: duration ? duration : 1,
                    delay: stagger(0.1),
                }
            );
        }
    }, [isTextVisible, animate, duration, filter]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div ref={elementRef} className={cn("", className)}>
            <div className="mt-4">
                <div className={`mt-6 text-lg leading-8 text-gray-900 ${isTextVisible ? 'opacity-100 animate-fadeInLeft' : 'opacity-0'}`}>
                    {renderWords()}
                </div>
            </div>
        </div>
    );
}

TextGenerateEffect.propTypes = {
    words: PropTypes.string.isRequired,
    className: PropTypes.string,
    filter: PropTypes.bool,
    duration: PropTypes.number,
};
