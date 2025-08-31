import useScreenWidth from '@shared/hooks/useScreenWidth';

import headerLine1Url from '../../../assets/header/headerLine1.svg';
import headerLine2Url from '../../../assets/header/headerLine2.svg';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
    const width = useScreenWidth();

    return (
        <header className={styles.header} id="header">
            <div className={styles.headerContent}>
                <div className={styles.headerUpper}>
                    <img src={headerLine1Url} alt="" />
                    <p>Чёткие сроки, прозрачная смета и премиальное качество исполнения</p>
                </div>

                <div className={styles.headerBottom}>
                    <h1>Дома и интерьеры,{width <= 767 && <br />} достойные вас</h1>

                    {width > 575 ? (
                        <img src={headerLine2Url} alt="" />
                    ) : (
                        <img src={headerLine2Url} alt="" />
                    )}

                    <div className={styles.desc}>
                        <p className={styles.descBlock}>
                            Опытная команда, реализующая проекты любой сложности — от квартир
                            до масштабных коммерческих объектов
                        </p>

                        {width > 575 && (
                            <p className={styles.descBlock}>
                                Полный цикл работ: от концепции и дизайна до сдачи готового
                                пространства «под ключ»
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};
