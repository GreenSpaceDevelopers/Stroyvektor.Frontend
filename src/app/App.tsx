import { Notifications } from '@mantine/notifications';
import { Navbar, Footer } from '@widgets/index';

import { AppRouter } from './routes/AppRouter';

import './App.css';

const App = () => {
    return (
        <>
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
