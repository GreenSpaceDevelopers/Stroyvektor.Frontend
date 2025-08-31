import { Notifications } from '@mantine/notifications';
import { Navbar } from '@widgets/index';

import { AppRouter } from './routes/AppRouter';

import './App.css';

const App = () => {
    return (
        <div className="appContent">
            <Navbar />
            <AppRouter />
            <Notifications position="bottom-right" />
        </div>
    );
};

export default App;
