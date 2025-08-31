import clsx from 'clsx';
import { useState } from 'react';

import { Bars3Icon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import useScreenWidth from '@shared/hooks/useScreenWidth';

import mainLogo from '../../shared/assets/mainLogo.svg';
import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
    const [isMenuVisible, setMenuVisible] = useState<boolean>(false);
    const width = useScreenWidth();

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarContent}>
                    <div className={styles.navbarContentLogoBlock}>
                        <a href="#header">
                            <img
                                className={styles.navbarContentLogo}
                                src={mainLogo}
                                alt="СтройВектор"
                            />
                        </a>
                    </div>

                    {width > 1023 && (
                        <div className={styles.navbarContentLinks}>
                            <a className={styles.navbarContentLink} href="#header">
                                ГЛАВНАЯ
                            </a>
                            <a className={styles.navbarContentLink} href="#aboutUs">
                                О НАС
                            </a>
                            <a className={styles.navbarContentLink} href="#services">
                                УСЛУГИ
                            </a>
                            <a className={styles.navbarContentLink}>ПОРТФОЛИО</a>
                            <a className={styles.navbarContentLink} href="#mapBlock">
                                КОНТАКТЫ
                            </a>
                        </div>
                    )}

                    {width > 575 && (
                        <div className={styles.navbarContentPhone}>
                            <PhoneIcon className={styles.navbarContentPhoneIcon} />
                            <a className={styles.navbarContentPhoneNumber} href="tel:+79939761660">
                                +7 (993) 976-16-60
                            </a>
                        </div>
                    )}

                    {width > 1023 ? (
                        <a className={styles.navbarContentButton} href="#formBlock">
                            Рассчитать стоимость
                        </a>
                    ) : (
                        <Bars3Icon
                            className={styles.burgerIcon}
                            onClick={() => setMenuVisible(true)}
                        />
                    )}
                </div>
            </nav>

            {width <= 1023 && (
                <div className={clsx(styles.navbarBurgerMenu, { [styles.open]: isMenuVisible })}>
                    <XMarkIcon
                        className={styles.navbarBurgerMenuCloseIcon}
                        onClick={() => setMenuVisible(false)}
                    />

                    <div className={styles.navbarBurgerMenuContentLinks}>
                        <a className={styles.navbarBurgerMenuContentLink} href="#header">
                            ГЛАВНАЯ
                        </a>
                        <a className={styles.navbarBurgerMenuContentLink} href="#aboutUs">
                            О НАС
                        </a>
                        <a className={styles.navbarBurgerMenuContentLink} href="#services">
                            УСЛУГИ
                        </a>
                        <a className={styles.navbarBurgerMenuContentLink}>ПОРТФОЛИО</a>
                        <a className={styles.navbarBurgerMenuContentLink} href="#mapBlock">
                            КОНТАКТЫ
                        </a>
                    </div>

                    {width <= 575 && (
                        <div className={styles.navbarBurgerMenuContentPhone}>
                            <PhoneIcon className={styles.navbarBurgerMenuContentPhoneIcon} />
                            <a
                                className={styles.navbarBurgerMenuContentNumber}
                                href="tel:+79939761660"
                            >
                                +7 (993) 976-16-60
                            </a>
                        </div>
                    )}

                    <a className={styles.navbarBurgerMenuContentButton} href="#formBlock">
                        Рассчитать стоимость
                    </a>
                </div>
            )}
        </>
    );
};
