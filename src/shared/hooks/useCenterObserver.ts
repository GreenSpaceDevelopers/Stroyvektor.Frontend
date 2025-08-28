import { useEffect } from 'react';

type CenterObserverOptions = {
    verticalPaddingPercent?: number;
    threshold?: number;
    onEnter: (el: Element) => void;
    onLeave?: (el: Element) => void;
};

export function useCenterObserver(
    elements: Array<Element | null>,
    { verticalPaddingPercent = 35, threshold = 0.6, onEnter, onLeave }: CenterObserverOptions,
) {
    useEffect(() => {
        if (!elements.length) return;

        const topBottom = `-${verticalPaddingPercent}%`;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) onEnter(entry.target);
                    else onLeave?.(entry.target);
                });
            },
            {
                root: null,
                rootMargin: `${topBottom} 0% ${topBottom} 0%`,
                threshold,
            },
        );

        elements.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, [elements, verticalPaddingPercent, threshold, onEnter, onLeave]);
}
