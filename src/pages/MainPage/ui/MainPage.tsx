import { AboutUs, FormBlock, Gallery, Header, MapBlock, Services } from './components';
import styles from './MainPage.module.scss';

export const MainPage: React.FC = () => {
    return (
        <div className={styles.mainPage}>
            <Header />
            <AboutUs />
            <Services />
            <Gallery />
            <FormBlock />
            <MapBlock />
            <div className={styles.mainPageOtz}>
                <iframe
                    className={styles.mainPageOtz}
                    src="https://yandex.ru/maps-reviews-widget/189404084518?comments"
                ></iframe>
            </div>
        </div>
    );
};
