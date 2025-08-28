export const MESSENGER_LABELS = {
    call: 'Звонок',
    whatsApp: 'WhatsApp',
    telegram: 'Telegram',
    max: 'MAX',
} as const;

export type messengerType = keyof typeof MESSENGER_LABELS;
