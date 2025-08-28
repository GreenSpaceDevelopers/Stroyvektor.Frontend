import useScreenWidth from '@shared/hooks/useScreenWidth';

import headerLine1Url from '../../../assets/aboutUs/aboutUsLine1.svg';
import headerLine2Url from '../../../assets/aboutUs/aboutUsLine2.svg';
import headerLine3Url from '../../../assets/aboutUs/aboutUsLine3.svg';
import headerLine4Url from '../../../assets/aboutUs/aboutUsLine4.svg';
import headerLine5Url from '../../../assets/aboutUs/aboutUsLine5.svg';
import headerLinePhoneUrl from '../../../assets/aboutUs/aboutUsLinePhone.svg';
import styles from './AboutUs.module.scss';

export const AboutUs: React.FC = () => {
    const width = useScreenWidth();

    return (
        <div className={styles.aboutUs}>
            <h3>Почему мы?</h3>

            <div className={styles.desc}>
                <p className={styles.descBlock}>
                    Каждый проект для нас — это уникальная история, в которой важно всё: от первой
                    встречи до последнего штриха. Мы работаем так, чтобы результат не только
                    соответствовал вашим ожиданиям, но и превосходил их.
                </p>

                <p className={styles.descBlock}>
                    Нам доверяют сложные задачи, потому что мы умеем превращать идеи в реальные
                    пространства, где комфорт и эстетика идут рука об руку с надёжностью.
                    {width > 575 ? <br /> : undefined} В основе нашей работы — чёткие процессы,
                    внимание к деталям и умение находить лучшие решения в любых условиях.
                </p>
            </div>

            <div className={styles.stats}>
                {width > 575 && <img className={styles.line1} src={headerLine1Url} alt="" />}
                <div className={styles.stat}>
                    <h4>9</h4>
                    <p>
                        лет опыта
                        <br /> в индустрии
                    </p>
                </div>
                <img
                    className={styles.line2}
                    src={width > 575 ? headerLine2Url : headerLinePhoneUrl}
                    alt=""
                />
                <div className={styles.stat}>
                    <h4>100+</h4>
                    <p>
                        профессионалов
                        <br /> в команде
                    </p>
                </div>
                <img
                    className={styles.line3}
                    src={width > 575 ? headerLine3Url : headerLinePhoneUrl}
                    alt=""
                />
                <div className={styles.stat}>
                    <h4>300+</h4>
                    <p>
                        проектов
                        <br /> реализовано
                    </p>
                </div>
                <img
                    className={styles.line4}
                    src={width > 575 ? headerLine4Url : headerLinePhoneUrl}
                    alt=""
                />
                <div className={styles.stat}>
                    <h4>20</h4>
                    <p>
                        текущих
                        <br /> проектов
                    </p>
                </div>
                <img
                    className={styles.line5}
                    src={width > 575 ? headerLine5Url : headerLinePhoneUrl}
                    alt=""
                />
                <div className={styles.stat}>
                    <h4>4,9</h4>
                    <p>
                        средняя оценка
                        <br /> клиентов
                    </p>
                </div>
                {width > 575 && <img className={styles.line5} src={headerLine5Url} alt="" />}
            </div>
        </div>
    );
};
