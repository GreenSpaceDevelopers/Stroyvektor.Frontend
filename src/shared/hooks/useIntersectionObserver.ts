import { useEffect } from 'react';

const useIntersectionObserver = (selector: string, className: string, threshold: number = 0.5) => {
    useEffect(() => {
        function onEntry(entries: IntersectionObserverEntry[]) {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                }
            });
        }
        
        const options = { threshold: [threshold] };
        const observer = new IntersectionObserver(onEntry, options);
        
        const elements = document.querySelectorAll(selector);
        elements.forEach((elm) => observer.observe(elm));
        
        return () => observer.disconnect();
    }, [selector, className, threshold]);
};

export default useIntersectionObserver;
