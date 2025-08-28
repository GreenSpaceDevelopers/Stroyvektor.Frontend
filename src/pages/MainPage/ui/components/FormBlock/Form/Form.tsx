import clsx from 'clsx';
import { useState } from 'react';

import { BaseLoader } from '@shared/ui/BaseLoader/BaseLoader';
import { IFormData } from '@entities/telegram/models/IFormData';
import { messengerType } from '@shared/types/messengerType';
import sendMessage from '@shared/api/telegram';
import useInputString from '@shared/hooks/useInputString';

import formLineUrl from '../../../../assets/form/Line 2.svg';
import { timeSlots } from '../timeSlots';
import styles from './Form.module.scss';

type TimeSlot = (typeof timeSlots)[number]['id'];

export const Form: React.FC = () => {
    const name = useInputString('');
    const phone = useInputString('');

    const [messengers, setMessengers] = useState<messengerType[]>(['call']);
    const [time, setTime] = useState<TimeSlot>('asap');

    const [isLoading, setLoading] = useState<boolean>(false);

    const handleSelectMessengers = (messenger: messengerType) => {
        setMessengers((prev) =>
            prev.includes(messenger) ? prev.filter((m) => m !== messenger) : [...prev, messenger],
        );
    };

    const handleSelectTime = (slot: TimeSlot) => {
        setTime(slot);
    };

    const handleSendMessage = async () => {
        if (!name.value || !phone.value || messengers.length === 0) {
            return;
        }

        setLoading(true);

        const data: IFormData = {
            name: name.value,
            phone: phone.value,
            messengers: messengers,
            time: time,
        };

        try {
            const response = await sendMessage(data);

            if (response) {
                name.reset();
                phone.reset();
                setMessengers(['call']);
                setTime('asap');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.form}>
            <div className={styles.formHeader}>
                <h4 className={styles.formHeaderTitle}>Оставьте заявку</h4>
                <img className={styles.formHeaderImg} src={formLineUrl} alt="" />
            </div>

            <div className={styles.formInputs}>
                <input
                    autoComplete="name"
                    className={styles.formInput}
                    value={name.value}
                    onChange={name.onChange}
                    placeholder="Имя*"
                />
                <input
                    autoComplete="phone"
                    className={styles.formInput}
                    value={phone.value}
                    onChange={phone.onChange}
                    placeholder="Телефон*"
                />
            </div>

            <div className={styles.formMessengers}>
                <h4 className={styles.formMessengersTitle}>Выберите способ связи</h4>

                <div className={styles.formMessengersItems}>
                    <button
                        className={clsx(styles.formMessengersItem, {
                            [styles.selected]: messengers.includes('call'),
                        })}
                        onClick={() => handleSelectMessengers('call')}
                    >
                        Звонок
                    </button>
                    <button
                        className={clsx(styles.formMessengersItem, {
                            [styles.selected]: messengers.includes('whatsApp'),
                        })}
                        onClick={() => handleSelectMessengers('whatsApp')}
                    >
                        WhatsApp
                    </button>
                    <button
                        className={clsx(styles.formMessengersItem, {
                            [styles.selected]: messengers.includes('telegram'),
                        })}
                        onClick={() => handleSelectMessengers('telegram')}
                    >
                        Telegram
                    </button>
                    <button
                        className={clsx(styles.formMessengersItem, {
                            [styles.selected]: messengers.includes('max'),
                        })}
                        onClick={() => handleSelectMessengers('max')}
                    >
                        MAX
                    </button>
                </div>
            </div>

            <div className={styles.formTimes}>
                <h4 className={styles.formTimesTitle}>Выберите удобное время</h4>

                <div className={styles.formTimesItems}>
                    {timeSlots.map((s) => (
                        <button
                            key={s.id}
                            type="button"
                            className={clsx(styles.formTimesItem, {
                                [styles.selected]: time === s.id,
                            })}
                            onClick={() => handleSelectTime(s.id)}
                        >
                            {s.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.formFooter}>
                <img className={styles.formFooterImg} src={formLineUrl} alt="" />
                <div className={styles.formButtonBlock}>
                    <button
                        type="button"
                        disabled={isLoading}
                        className={styles.formButton}
                        onClick={handleSendMessage}
                    >
                        {isLoading ? <BaseLoader size="20px" /> : 'Отправить'}
                    </button>

                    <p className={styles.formButtonDesk}>
                        Нажимая кнопку «Отправить», Вы даёте согласие на обработку персональных
                        данных и соглашаетесь с Политикой конфиденциальности
                    </p>
                </div>
            </div>
        </div>
    );
};
