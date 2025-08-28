import axios from 'axios';

import { IFormData } from '@entities/telegram/models/IFormData';

import { MESSENGER_LABELS } from '../utils/labels/messengerLabels';

export default async function sendMessage(data: IFormData) {
    try {
        const { name, phone, messengers, time } = data;

        const messengersLabel =
            messengers && messengers.length
                ? messengers.map((m) => MESSENGER_LABELS[m]).join(', ')
                : '—';

        const text =
            `🆕 <b>Новая заявка</b>\n\n` +
            `👤 <b>Имя:</b> ${name}\n` +
            `📞 <b>Телефон:</b> ${phone}\n\n` +
            `💬 <b>Cпособ связи:</b> ${messengersLabel}\n\n` +
            `🕐 <b>Удобное время:</b> ${time === 'asap' ? 'Ближайшее время' : time}`;

        const response = await axios.post(
            `https://api.telegram.org/bot${import.meta.env.VITE_TG_BOT_TOKEN}/sendMessage`,
            {
                chat_id: import.meta.env.VITE_TG_CHAT_ID,
                text,
                parse_mode: 'HTML',
                disable_web_page_preview: true,
            },
        );

        return response.status === 200;
    } catch {
        return false;
    }
}
