import { MapPinIcon } from '@heroicons/react/24/solid';

import styles from './MapBlock.module.scss';

export const MapBlock: React.FC = () => {
    const lat = 59.936043;
    const lon = 30.337548;
    const zoom = 17;

    const ll = encodeURIComponent(`${lon},${lat}`);
    const pt = `${lon},${lat},pm2rdm`;
    const src = `https://yandex.ru/map-widget/v1/?ll=${ll}&z=${zoom}&pt=${pt}&theme=dark`;

    return (
        <div className={styles.mapBlock} style={{ borderRadius: 8, overflow: 'hidden' }}>
            <h3 className={styles.mapBlockTitle}>Всегда на связи</h3>
            <div className={styles.mapBlockContent}>
                <div className={styles.mapBlockInfo}>
                    <div className={styles.mapBlockInfoDesc}>
                        <p>
                            Свяжитесь с нами удобным способом — мы ответим на вопросы, поможем
                            рассчитать стоимость и договоримся о встрече
                        </p>

                        <span>
                            <MapPinIcon width={24} />
                            <a>Санкт-Петербург, ул. Примерная, 15</a>
                        </span>
                        <span>
                            <a>+7 (999) 999-99-99</a>
                        </span>
                        <span>
                            <a>info@stroyvector.ru</a>
                        </span>
                    </div>
                </div>

                <iframe
                    className={styles.yandexMap}
                    src={src}
                    width={730}
                    height={353}
                    allowFullScreen
                    loading="lazy"
                    title="Карта Яндекс"
                />
            </div>
        </div>
    );
};
