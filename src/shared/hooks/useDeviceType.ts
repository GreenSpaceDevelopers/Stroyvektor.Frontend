import { useEffect, useState } from 'react';

type Device = 'mobile' | 'tablet' | 'desktop';

export function useDeviceType(): Device {
    const [device, setDevice] = useState<Device>('desktop');

    useEffect(() => {
        const update = () => {
            const width = window.innerWidth;
            const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

            if (isTouch && width <= 767) setDevice('mobile');
            else if (isTouch && width <= 1024) setDevice('tablet');
            else setDevice('desktop');
        };

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    return device;
}
