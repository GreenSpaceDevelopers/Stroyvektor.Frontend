import mainLogo from '../../shared/assets/mainLogo.svg';
import footerLineUrl from './assets/footerLine.svg';
import styles from './Footer.module.scss';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

import { tgIcon, whatsappIcon, vkIcon } from '@shared/assets/icons/socials';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerUpper}>
                    <img className={styles.footerUpperLogo} src={mainLogo} about="СтройВектор" />

                    <div className={styles.footerUpperLinks}>
                        <a className={styles.footerUpperLink}>
                            <EnvelopeIcon />
                        </a>
                        <a className={styles.footerUpperLink}>
                            <MapPinIcon />
                        </a>
                        <a className={styles.footerUpperLink}>
                            <PhoneIcon />
                        </a>
                        <a className={styles.footerUpperLink}>
                            <img src={tgIcon} />
                        </a>
                        <a className={styles.footerUpperLink}>
                            <img src={whatsappIcon} />
                        </a>
                        <a className={styles.footerUpperLink}>
                            <img src={vkIcon} />
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
