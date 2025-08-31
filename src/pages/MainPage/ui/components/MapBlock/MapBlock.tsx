import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import useScreenWidth from '@shared/hooks/useScreenWidth';
import { notifications } from '@mantine/notifications';
import MapBlockLine1Url from '../../../assets/mapBlock/mapBlockLine1.svg';
import MapBlockLine2Url from '../../../assets/mapBlock/mapBlockLine2.svg';
import styles from './MapBlock.module.scss';
import { tryCopyTextAsync } from '@shared/utils';

export const MapBlock: React.FC = () => {
    const width = useScreenWidth();

    const lat = 60.024459;
    const lon = 30.276234;
    const zoom = 17;

    const ll = encodeURIComponent(`${lon},${lat}`);
    const pt = `${lon},${lat},pm2rdm`;
    const src = `https://yandex.ru/map-widget/v1/?ll=${ll}&z=${zoom}&pt=${pt}&theme=dark`;

    const copyEmail = () => {
        tryCopyTextAsync(import.meta.env.VITE_COMPANY_EMAIL);
        notifications.show({
            color: 'green',
            title: 'Скопировано',
            message: '',
        });
    };

    return (
        <div
            className={styles.mapBlock}
            style={{ borderRadius: 8, overflow: 'hidden' }}
            id="mapBlock"
        >
            <h3 className={styles.mapBlockTitle}>Всегда на связи</h3>

            {width <= 1023 && <img className={styles.mapBlockInfoLine2} src={MapBlockLine2Url} />}

            <div className={styles.mapBlockContent}>
                <div className={styles.mapBlockInfo}>
                    {width > 1023 && (
                        <img className={styles.mapBlockInfoLine} src={MapBlockLine1Url} />
                    )}

                    {width <= 1023 && (
                        <p>
                            Свяжитесь с нами удобным способом — мы ответим на вопросы, поможем
                            рассчитать стоимость и договоримся о встрече
                        </p>
                    )}
                    <div className={styles.mapBlockInfoDesc}>
                        <div className={styles.links}>
                            {width > 1023 && (
                                <p>
                                    Свяжитесь с нами удобным способом — мы ответим на вопросы,
                                    поможем рассчитать стоимость и договоримся о встрече
                                </p>
                            )}

                            <span>
                                <MapPinIcon className={styles.mapBlockInfoDescIcon} />
                                <a href="https://yandex.ru/maps/-/CLEVYEi9" target="_blank">
                                    {import.meta.env.VITE_COMPANY_ADDRESS}
                                </a>
                            </span>

                            <span>
                                <PhoneIcon className={styles.mapBlockInfoDescIcon} />
                                <a href={`tel:${import.meta.env.VITE_COMPANY_PHONE}`}>
                                    {import.meta.env.VITE_COMPANY_PHONE_NORMALIZE}
                                </a>
                            </span>
                            <span>
                                <EnvelopeIcon className={styles.mapBlockInfoDescIcon} />
                                <a onClick={copyEmail}>{import.meta.env.VITE_COMPANY_EMAIL}</a>
                            </span>
                        </div>
                    </div>
                </div>

                <iframe
                    className={styles.yandexMap}
                    src={src}
                    allowFullScreen
                    loading="lazy"
                    title="Карта Яндекс"
                />
            </div>
        </div>
    );
};
