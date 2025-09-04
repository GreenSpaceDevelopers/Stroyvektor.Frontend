import clsx from 'clsx';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Bars3Icon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { mainLogo } from '@shared/assets/icons/main';
import { CompanyConstants } from '@shared/constants';
import useScreenWidth from '@shared/hooks/useScreenWidth';

import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
    const { pathname } = useLocation();
    const width = useScreenWidth();
    const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarContent}>
                    <div className={styles.navbarContentLogoBlock}>
                        <a href={pathname === '/' ? '#header' : '/'}>
                            <img
                                className={styles.navbarContentLogo}
                                src={mainLogo}
                                alt="СтройВектор"
                            />
                        </a>
                    </div>

                    {width > 1100 && (
                        <div className={styles.navbarContentLinks}>
                            <a
                                className={styles.navbarContentLink}
                                href={pathname === '/' ? '#header' : '/'}
                            >
                                ГЛАВНАЯ
                            </a>
                            <a className={styles.navbarContentLink} href="#aboutUs">
                                О НАС
                            </a>
                            <a className={styles.navbarContentLink} href="#services">
                                УСЛУГИ
                            </a>
                            <a className={styles.navbarContentLink} href="#gallery">
                                ПОРТФОЛИО
                            </a>
                            <a className={styles.navbarContentLink} href="#mapBlock">
                                КОНТАКТЫ
                            </a>
                        </div>
                    )}

                    {width > 575 && (
                        <div className={styles.navbarContentPhone}>
                            <PhoneIcon className={styles.navbarContentPhoneIcon} />
                            <a
                                className={styles.navbarContentPhoneNumber}
                                href={`tel:${CompanyConstants.CompanyPhone.value}`}
                            >
                                {CompanyConstants.CompanyPhoneNormalize.value}
                            </a>
                        </div>
                    )}

                    {width > 1100 ? (
                        <a className={styles.navbarContentButton} href="#formBlock">
                            Оставить заявку
                        </a>
                    ) : (
                        <Bars3Icon
                            className={styles.burgerIcon}
                            onClick={() => setMenuVisible(true)}
                        />
                    )}
                </div>
            </nav>

            {width <= 1100 && (
                <div className={clsx(styles.navbarBurgerMenu, { [styles.open]: isMenuVisible })}>
                    <XMarkIcon
                        className={styles.navbarBurgerMenuCloseIcon}
                        onClick={() => setMenuVisible(false)}
                    />

                    <div className={styles.navbarBurgerMenuContentLinks}>
                        <a
                            className={styles.navbarBurgerMenuContentLink}
                            href="#header"
                            onClick={() => setMenuVisible(false)}
                        >
                            ГЛАВНАЯ
                        </a>
                        <a
                            className={styles.navbarBurgerMenuContentLink}
                            href="#aboutUs"
                            onClick={() => setMenuVisible(false)}
                        >
                            О НАС
                        </a>
                        <a
                            className={styles.navbarBurgerMenuContentLink}
                            href="#services"
                            onClick={() => setMenuVisible(false)}
                        >
                            УСЛУГИ
                        </a>
                        <a
                            className={styles.navbarBurgerMenuContentLink}
                            href="#gallery"
                            onClick={() => setMenuVisible(false)}
                        >
                            ПОРТФОЛИО
                        </a>
                        <a
                            className={styles.navbarBurgerMenuContentLink}
                            href="#mapBlock"
                            onClick={() => setMenuVisible(false)}
                        >
                            КОНТАКТЫ
                        </a>
                    </div>

                    {width <= 575 && (
                        <div className={styles.navbarBurgerMenuContentPhone}>
                            <PhoneIcon className={styles.navbarBurgerMenuContentPhoneIcon} />
                            <a
                                className={styles.navbarBurgerMenuContentNumber}
                                href={`tel:${CompanyConstants.CompanyPhone.value}`}
                                onClick={() => setMenuVisible(false)}
                            >
                                {CompanyConstants.CompanyPhoneNormalize.value}
                            </a>
                        </div>
                    )}

                    <a
                        className={styles.navbarBurgerMenuContentButton}
                        href="#formBlock"
                        onClick={() => setMenuVisible(false)}
                    >
                        Оставить заявку
                    </a>
                </div>
            )}
        </>
    );
};
