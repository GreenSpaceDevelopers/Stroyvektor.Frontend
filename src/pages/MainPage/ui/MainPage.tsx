import { AboutUs, FormBlock, Header, MapBlock, Services } from './components';
import styles from './MainPage.module.scss';

export const MainPage: React.FC = () => {
    return (
        <div className={styles.mainPage}>
            <Header />
            <AboutUs />
            <Services />
            <FormBlock />
            <MapBlock />
        </div>
    );
};
