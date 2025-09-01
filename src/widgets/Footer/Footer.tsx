import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { notifications } from '@mantine/notifications';
import { tryCopyTextAsync } from '@shared/utils';

import mainLogo from '../../shared/assets/mainLogo.svg';
import footerLineUrl from './assets/footerLine.svg';
import styles from './Footer.module.scss';

const copyEmail = () => {
    tryCopyTextAsync(import.meta.env.VITE_COMPANY_EMAIL);
    notifications.show({
        color: 'green',
        title: 'Скопировано',
        message: '',
    });
};

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerUpper}>
                    <img className={styles.footerUpperLogo} src={mainLogo} about="СтройВектор" />

                    <div className={styles.footerUpperLinks}>
                        <a className={styles.footerUpperLink}>
                            <EnvelopeIcon className={styles.footerUpperIcon} onClick={copyEmail} />
                        </a>
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
