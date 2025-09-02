import styles from './Reviews.module.scss';
import { useEffect, useState } from 'react';
import { Rating } from '@mantine/core';
import { getYandexRatingByOrgId, IYMapRating } from '@shared/api/yandex';
import { useYMaps } from '@shared/hooks/useYMaps';

import yandexIcon from '../../../assets/reviews/yandexIcon.svg';
import yandexMapIcon from '../../../assets/reviews/yandexMapIcon.svg';

export const Reviews: React.FC = () => {
    const { ready, error } = useYMaps();
    const [rating, setRating] = useState<IYMapRating | null>(null);

    useEffect(() => {
        if (!ready) return;
        getYandexRatingByOrgId()
            .then(setRating)
            .catch(() => setRating(null));
    }, [ready]);

    if (error) {
        console.warn('YMaps error:', error);
    }

    return (
        <div className={styles.reviews}>
            <div className={styles.reviewsContent}>
                <h3 className={styles.reviewsTitle}>Проверено клиентами</h3>

                <div className={styles.reviewsContentWrapper}>
                    <div className={styles.rating}>
                        <div className={styles.ratingHeader}>
                            <p className={styles.ratingHeaderTitle}>{rating?.score ?? 0} из 5</p>
                            <Rating
                                className={styles.ratingHeaderRating}
                                value={rating?.score ?? 0}
                                size={30}
                                readOnly
                            />
                        </div>

                        <h4 className={styles.ratingTitle}>СтройВектор</h4>

                        <div className={styles.ratingCenter}>
                            <div className={styles.ratingCenterUpper}>
                                <img src={yandexIcon} alt="yandex" />
                                <img src={yandexMapIcon} alt="yandex" />
                                <p>Карты</p>
                            </div>
                            <p className={styles.ratingCenterBottom}>
                                На основе {rating?.ratings ?? 0} оценок
                            </p>
                        </div>
                        <a
                            className={styles.ratingButton}
                            href="https://yandex.ru/maps/-/CLEVYEi9"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Оставить отзыв
                        </a>
                    </div>

                    <iframe
                        className={styles.reviewsComments}
                        src="https://yandex.ru/maps-reviews-widget/189404084518?comments"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};
