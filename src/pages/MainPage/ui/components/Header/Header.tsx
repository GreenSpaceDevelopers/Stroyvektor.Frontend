import useScreenWidth from '@shared/hooks/useScreenWidth';

import headerLine1Url from '../../../assets/header/headerLine1.svg';
import headerLine2Url from '../../../assets/header/headerLine2.svg';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
    const width = useScreenWidth();

    return (
        <header className={styles.header}>
            <div className={styles.headerUpper}>
                <img src={headerLine1Url} alt="" />
                <text>Чёткие сроки, прозрачная смета и премиальное качество исполнения</text>
            </div>

            <div className={styles.headerBottom}>
                <h1>Дома и интерьеры, достойные вас</h1>

                {width > 575 ? (
                    <img src={headerLine2Url} alt="" />
                ) : (
                    <img src={headerLine2Url} alt="" />
                )}

                <div className={styles.desc}>
                    <text className={styles.descBlock}>
                        Опытная команда, реализующая проекты любой сложности — от квартир
                        до масштабных коммерческих объектов
                    </text>

                    {width > 575 && (
                        <text className={styles.descBlock}>
                            Полный цикл работ: от концепции и дизайна до сдачи готового пространства
                            «под ключ»
                        </text>
                    )}
                </div>
            </div>
        </header>
    );
};
