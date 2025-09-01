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
        </div>
    );
};
