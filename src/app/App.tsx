import { Notifications } from '@mantine/notifications';

import { AppRouter } from './routes/AppRouter';

import './App.css';

const App = () => {
    return (
        <div className="appContent">
            <AppRouter />
            <Notifications position="bottom-right" />
        </div>
    );
};

export default App;
