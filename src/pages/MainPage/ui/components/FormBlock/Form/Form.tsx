import clsx from 'clsx';
import { useState } from 'react';

import { BaseLoader } from '@shared/ui/BaseLoader/BaseLoader';
import { IFormData } from '@entities/telegram/models/IFormData';
import { messengerType } from '@shared/types/messengerType';
import { notifications } from '@mantine/notifications';
import { TextInput } from '@shared/ui-kit/input';
import { isValidPhone } from '@shared/utils';
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

    const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleSelectMessengers = (messenger: messengerType) => {
        setMessengers((prev) => {
            if (prev.length === 1 && prev.includes(messenger)) {
                return prev;
            }

            return prev.includes(messenger)
                ? prev.filter((m) => m !== messenger)
                : [...prev, messenger];
        });
    };
    const handleSelectTime = (slot: TimeSlot) => {
        setTime(slot);
    };

    const handleSendMessage = async () => {
        const newErrors: typeof errors = {};

        if (!name.value.trim()) {
            newErrors.name = 'Введите имя';
        }

        if (!phone.value.trim()) {
            newErrors.phone = 'Введите телефон';
        } else if (!isValidPhone(phone.value)) {
            newErrors.phone = 'Некорректный телефон';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setLoading(true);

        const data: IFormData = {
            name: name.value,
            phone: phone.value,
            messengers,
            time,
        };

        try {
            const response = await sendMessage(data);

            if (response) {
                name.reset();
                phone.reset();
                setMessengers(['call']);
                setTime('asap');
                setErrors({});

                notifications.show({
                    color: 'green',
                    title: 'Отправлено',
                    message: 'Мы скоро свяжемся с вами',
                });
            } else {
                notifications.show({
                    color: 'red',
                    title: 'Ошибка',
                    message: 'Не удалось отправить заявку',
                });
            }
        } catch {
            notifications.show({
                color: 'red',
                title: 'Ошибка сети',
                message: 'Попробуйте ещё раз',
            });
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
                <TextInput
                    label="Имя"
                    placeholder="Имя*"
                    value={name.value}
                    onChange={name.onChange}
                    error={errors.name}
                    autoComplete="name"
                    classNames={{
                        root: styles.formInputRoot,
                        input: styles.formInput,
                        label: styles.formInputLabel,
                        error: styles.formInputError,
                    }}
                />

                <TextInput
                    label="Телефон"
                    placeholder="Телефон*"
                    value={phone.value}
                    onChange={phone.onChange}
                    error={errors.phone}
                    autoComplete="phone"
                    classNames={{
                        root: styles.formInputRoot,
                        input: styles.formInput,
                        label: styles.formInputLabel,
                        error: styles.formInputError,
                    }}
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
                        type="submit"
                        disabled={isLoading}
                        className={styles.formButton}
                        onClick={handleSendMessage}
                    >
                        {isLoading ? <BaseLoader size="20px" /> : 'Отправить'}
                    </button>

                    <p className={styles.formButtonDesk}>
                        Нажимая кнопку «Отправить», Вы даёте согласие на обработку персональных
                        данных и соглашаетесь с{' '}
                        <a className={styles.formButtonDeskPrivacyPolicy} href="/privacyPolicy">
                            Политикой конфиденциальности
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
