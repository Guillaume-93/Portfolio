import { useEffect, useRef, useState } from 'react';

const useVisibilityObserver = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: threshold || 0.1,
            }
        );

        const currentElementRef = elementRef.current;

        if (currentElementRef) {
            observer.observe(currentElementRef);
        }

        return () => {
            if (currentElementRef) {
                observer.unobserve(currentElementRef);
            }
        };
    }, [threshold]);

    return [isVisible, elementRef];
};

export default useVisibilityObserver;