import { useCallback, useMemo, useRef, useState } from 'react';

import { useCenterObserver } from '@shared/hooks/useCenterObserver';
import { useDeviceType } from '@shared/hooks/useDeviceType';

import serviceAdditionalLineUrl from '../../../assets/services/serviceAdditionalLine.svg';
import { Service } from './Service/Service';
import { blockContent1, blockContent2, blockContent3, blockContent4 } from './blockContents';
import styles from './Services.module.scss';

export const Services: React.FC = () => {
    const [hoveringService, setHoveringService] = useState<number | null>(1);
    const device = useDeviceType();
    const isTouchDevice = device === 'mobile';

    const refs = useRef<Array<HTMLDivElement | null>>([]);
    const setRefAt = (index: number) => (el: HTMLDivElement | null) => {
        refs.current[index] = el;
    };

    useCenterObserver(
        useMemo(() => refs.current, [refs.current.length]),
        {
            verticalPaddingPercent: 35,
            threshold: 0.6,
            onEnter: useCallback(
                (el: Element) => {
                    if (!isTouchDevice) return;
                    const idx = refs.current.findIndex((r) => r === el);
                    if (idx !== -1) setHoveringService(idx + 1);
                },
                [isTouchDevice],
            ),
            onLeave: useCallback(
                (el: Element) => {
                    if (!isTouchDevice) return;
                    const idx = refs.current.findIndex((r) => r === el);
                    if (idx !== -1 && hoveringService === idx + 1) {
                        setHoveringService(null);
                    }
                },
                [isTouchDevice, hoveringService],
            ),
        },
    );

    return (
        <div className={styles.services} id="services">
            <h3 className={styles.servicesTitle}>создаём для вас</h3>

            <div className={styles.servicesBlocks}>
                <Service
                    ref={setRefAt(0)}
                    title={blockContent1.title}
                    subtitle={blockContent1.subtitle}
                    description={blockContent1.description}
                    price={blockContent1.price}
                    isHovering={hoveringService === 1}
                    onMouseEnter={() => setHoveringService(1)}
                    onMouseLeave={() => setHoveringService(null)}
                    disableMouseHover={isTouchDevice}
                />
                <Service
                    ref={setRefAt(1)}
                    title={blockContent2.title}
                    subtitle={blockContent2.subtitle}
                    description={blockContent2.description}
                    price={blockContent2.price}
                    isHovering={hoveringService === 2}
                    onMouseEnter={() => setHoveringService(2)}
                    onMouseLeave={() => setHoveringService(null)}
                    disableMouseHover={isTouchDevice}
                />
                <Service
                    ref={setRefAt(2)}
                    title={blockContent3.title}
                    subtitle={blockContent3.subtitle}
                    description={blockContent3.description}
                    price={blockContent3.price}
                    isHovering={hoveringService === 3}
                    onMouseEnter={() => setHoveringService(3)}
                    onMouseLeave={() => setHoveringService(null)}
                    disableMouseHover={isTouchDevice}
                />
                <Service
                    ref={setRefAt(3)}
                    title={blockContent4.title}
                    subtitle={blockContent4.subtitle}
                    description={blockContent4.description}
                    price={blockContent4.price}
                    isHovering={hoveringService === 4}
                    onMouseEnter={() => setHoveringService(4)}
                    onMouseLeave={() => setHoveringService(null)}
                    disableMouseHover={isTouchDevice}
                />
            </div>

            <div className={styles.servicesAdditional}>
                <h4 className={styles.servicesAdditionalTitle}>Дополнительные услуги</h4>

                <div className={styles.servicesAdditionalRaw}>
                    <span className={styles.servicesAdditionalRawHeader}>
                        <p className={styles.servicesAdditionalRawTitle}>замер помещения</p>
                        <p className={styles.servicesAdditionalRawTitle}>5 000 ₽</p>
                    </span>
                    <img
                        className={styles.servicesAdditionalRawImg}
                        src={serviceAdditionalLineUrl}
                        alt=""
                    />
                    <p className={styles.servicesAdditionalRawSubtitle}>
                        Выезд специалиста, составление обмеренного плана, консультация
                    </p>
                </div>

                <div className={styles.servicesAdditionalRaw}>
                    <span className={styles.servicesAdditionalRawHeader}>
                        <p className={styles.servicesAdditionalRawTitle}>технический проект</p>
                        <p className={styles.servicesAdditionalRawTitle}>600 ₽ / м²</p>
                    </span>
                    <img
                        className={styles.servicesAdditionalRawImg}
                        src={serviceAdditionalLineUrl}
                        alt=""
                    />
                    <p className={styles.servicesAdditionalRawSubtitle}>
                        Разработка проектной документации объекта (2D)
                    </p>
                </div>

                <div className={styles.servicesAdditionalRaw}>
                    <span className={styles.servicesAdditionalRawHeader}>
                        <p className={styles.servicesAdditionalRawTitle}>Дизайн-проект</p>
                        <p className={styles.servicesAdditionalRawTitle}>2 000 ₽ / м²</p>
                    </span>
                    <img
                        className={styles.servicesAdditionalRawImg}
                        src={serviceAdditionalLineUrl}
                        alt=""
                    />
                    <p className={styles.servicesAdditionalRawSubtitle}>
                        Инструкция по созданию Вашего будущего интерьера
                    </p>
                </div>

                <div className={styles.servicesAdditionalRaw}>
                    <span className={styles.servicesAdditionalRawHeader}>
                        <p className={styles.servicesAdditionalRawTitle}>home staging</p>
                        <p className={styles.servicesAdditionalRawTitle}>1 000 ₽ / м²</p>
                    </span>
                    <img
                        className={styles.servicesAdditionalRawImg}
                        src={serviceAdditionalLineUrl}
                        alt=""
                    />
                    <p className={styles.servicesAdditionalRawSubtitle}>
                        Предпродажная подготовка квартиры
                    </p>
                </div>

                <div className={styles.servicesAdditionalRaw}>
                    <span className={styles.servicesAdditionalRawHeader}>
                        <p className={styles.servicesAdditionalRawTitle}>Клининг</p>
                        <p className={styles.servicesAdditionalRawTitle}>500 ₽ / м²</p>
                    </span>
                    <img
                        className={styles.servicesAdditionalRawImg}
                        src={serviceAdditionalLineUrl}
                        alt=""
                    />
                    <p className={styles.servicesAdditionalRawSubtitle}>Профессиональная уборка</p>
                </div>
            </div>
        </div>
    );
};
