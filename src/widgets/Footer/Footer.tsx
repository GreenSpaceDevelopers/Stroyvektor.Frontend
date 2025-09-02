import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { notifications } from '@mantine/notifications';
import { tryCopyTextAsync } from '@shared/utils';
import { tgIcon, vkIcon } from '@shared/assets/icons/socials';

import mainLogo from '../../shared/assets/mainLogo.svg';
import footerLineUrl from './assets/footerLine.svg';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

const copyEmail = () => {
    tryCopyTextAsync(import.meta.env.VITE_COMPANY_EMAIL);
    notifications.show({
        color: 'green',
        title: 'Скопировано',
        message: '',
    });
};

export const Footer: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerUpper}>
                    <img className={styles.footerUpperLogo} src={mainLogo} about="СтройВектор" />

                    <div className={styles.footerUpperLinks}>
                        <a
                            className={styles.footerUpperLink}
                            href="https://yandex.ru/maps/-/CLEVYEi9"
                            target="_blank"
                        >
                            <MapPinIcon className={styles.footerUpperIcon} />
                        </a>
                        <a
                            className={styles.footerUpperLink}
                            href={`tel:${import.meta.env.VITE_COMPANY_PHONE}`}
                        >
                            <PhoneIcon className={styles.footerUpperIcon} />
                        </a>
                        <a className={styles.footerUpperLink}>
                            <EnvelopeIcon className={styles.footerUpperIcon} onClick={copyEmail} />
                        </a>
                        <a
                            className={styles.footerUpperLink}
                            href={import.meta.env.VITE_COMPANY_TG}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className={styles.footerUpperIcon} src={tgIcon} alt="Telegram" />
                        </a>
                        <a
                            className={styles.footerUpperLink}
                            href={import.meta.env.VITE_COMPANY_VK}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className={styles.footerUpperIcon} src={vkIcon} alt="Telegram" />
                        </a>
                    </div>
                </div>

                <div className={styles.footerCenter}>
                    <div className={clsx(styles.footerCenterBlock, styles.one)}>
                        <a href={pathname === '/' ? '#header' : '/'}>Главная</a>
                        <a href="#aboutUs">О нас</a>
                        <a href="#services">Услуги</a>
                        <a href="#gallery">Портфолио</a>
                        <a href="#mapBlock">Контакты</a>
                        <a href="/privacyPolicy">Политика конфиденциальности</a>
                    </div>

                    <div className={styles.footerCenterBlockCompanyInfo}>
                        <div className={clsx(styles.footerCenterBlock, styles.two)}>
                            <p>Юридический адрес:</p>
                            <p>
                                197375, Россия, г Санкт-Петербург, ул Вербная, дом 4, корпус литера
                                А, оф. №59 пом. 2-Н
                            </p>
                        </div>

                        <div className={clsx(styles.footerCenterBlock, styles.three)}>
                            <p>Р/с № 40702810 2200 0020 6340</p>
                            <p>ИНН 7814851677</p>
                            <p>КПП 781401001</p>
                            <p>+7 (993) 976-16-60</p>
                            <p className={styles.footerCenterBlockStyles}>
                                {import.meta.env.VITE_COMPANY_EMAIL}
                            </p>
                            <p className={styles.footerCenterBlockStyles}>стройвектор78.рф</p>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <img className={styles.footerBottomLine} src={footerLineUrl} alt="" />
                    <p className={styles.footerBottomDesc}>© ООО «СтройВектор» 2025</p>
                </div>
            </div>
        </footer>
    );
};
