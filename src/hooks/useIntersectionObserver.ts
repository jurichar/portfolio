// hooks/useIntersectionObserver.ts
import { useEffect, useRef } from "react";

const useIntersectionObserver = (
    elementRef,
    { threshold = 0.1, root = null, rootMargin = "0%" },
    callback
) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(
            ([entry]) => {
                callback(entry);
            },
            {
                threshold,
                root,
                rootMargin,
            }
        );

        const { current: currentObserver } = observer;

        if (elementRef.current) {
            currentObserver.observe(elementRef.current);
        }

        return () => {
            currentObserver.disconnect();
        };
    }, [elementRef, threshold, root, rootMargin, callback]);
};

export default useIntersectionObserver;
