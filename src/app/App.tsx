import { Notifications } from '@mantine/notifications';
import { Navbar, Footer } from '@widgets/index';
import { ScrollToTop } from '@shared/utils/ScrollToTop';

import { AppRouter } from './routes/AppRouter';

import './App.css';

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <div className="appContent">
                <AppRouter />
            </div>
            <Footer />

            <Notifications position="bottom-right" />
        </>
    );
};

export default App;
