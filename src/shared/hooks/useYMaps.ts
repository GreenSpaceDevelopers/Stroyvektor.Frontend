import { useEffect, useState } from 'react';

let loadingPromise: Promise<void> | null = null;

export function useYMaps(apiKey = import.meta.env.VITE_YMAPS_API_KEY as string) {
    const [ready, setReady] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if ((window as any).ymaps?.ready) {
            (window as any).ymaps.ready(() => setReady(true));
            return;
        }

        if (!apiKey) {
            setError('Missing VITE_YMAPS_API_KEY');
            return;
        }

        if (!loadingPromise) {
            loadingPromise = new Promise<void>((resolve, reject) => {
                const script = document.createElement('script');
                script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
                script.async = true;
                script.onload = () => {
                    try {
                        (window as any).ymaps.ready(() => resolve());
                    } catch (e) {
                        reject(e);
                    }
                };
                script.onerror = () => reject(new Error('Failed to load Yandex Maps API'));
                document.head.appendChild(script);
            });
        }

        loadingPromise
            .then(() => setReady(true))
            .catch((e) => setError(e instanceof Error ? e.message : String(e)));
    }, [apiKey]);

    return { ready, error };
}
