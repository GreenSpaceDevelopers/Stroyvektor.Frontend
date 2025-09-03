import { AboutUs, FormBlock, Gallery, Header, MapBlock, Reviews, Services } from './components';

const MainPage: React.FC = () => {
    return (
        <div>
            <Header />
            <AboutUs />
            <Services />
            <Gallery />
            <FormBlock />
            <MapBlock />
            <Reviews />
        </div>
    );
};

export default MainPage;
