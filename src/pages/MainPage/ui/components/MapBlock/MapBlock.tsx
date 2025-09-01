import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { notifications } from '@mantine/notifications';
import { tryCopyTextAsync } from '@shared/utils';
import { tgIcon, vkIcon } from '@shared/assets/icons/socials';
import useScreenWidth from '@shared/hooks/useScreenWidth';

import MapBlockLine1Url from '../../../assets/mapBlock/mapBlockLine1.svg';
import MapBlockLine2Url from '../../../assets/mapBlock/mapBlockLine2.svg';
import styles from './MapBlock.module.scss';

export const MapBlock: React.FC = () => {
    const width = useScreenWidth();

    const src = `https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=30.276234%2C60.024460&mode=search&oid=189404084518&ol=biz&sll=30.276234%2C60.024460&sspn=0.015020%2C0.004430&text=%D0%A1%D1%82%D1%80%D0%BE%D0%B9%D0%92%D0%B5%D0%BA%D1%82%D0%BE%D1%80&utm_source=share&z=17&theme=dark`;
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
                                <a className={styles.linkEmail} onClick={copyEmail}>
                                    {import.meta.env.VITE_COMPANY_EMAIL}
                                </a>
                            </span>
                            <span>
                                <img className={styles.mapBlockInfoDescIcon} src={tgIcon} />
                                <a
                                    className={styles.linkEmail}
                                    href={import.meta.env.VITE_COMPANY_TG}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @StroyVektor_spb
                                </a>
                            </span>
                            <span>
                                <img className={styles.mapBlockInfoDescIcon} src={vkIcon} />
                                <a
                                    className={styles.linkEmail}
                                    href={import.meta.env.VITE_COMPANY_VK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Строительная компания СтройВектор
                                </a>
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
