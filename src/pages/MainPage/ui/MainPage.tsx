import { AboutUs, Header } from './components';
import styles from './MainPage.module.scss';

export const MainPage: React.FC = () => {
    return (
        <div className={styles.mainPage}>
            <Header />
            <AboutUs />
        </div>
    );
};
