import { getImgUrl } from '@shared/utils';

import { Form } from './Form/Form';
import styles from './FormBlock.module.scss';

export const FormBlock: React.FC = () => {
    return (
        <div
            className={styles.formBlock}
            style={{ backgroundImage: `url(${getImgUrl('formBg.png')})` }}
            id="formBlock"
        >
            <div className={styles.formBlockContent}>
                <div className={styles.formBlockTitles}>
                    <h3 className={styles.formBlockTitle}>Заполнить анкету, чтобы получить КП</h3>
                    <p className={styles.formBlockSubtitle}>
                        Оставьте свои контактные данные, мы свяжемся с вами в течение 24 часов.
                    </p>
                </div>

                <div className={styles.formBlockForm}>
                    <Form />
                </div>
            </div>
        </div>
    );
};
