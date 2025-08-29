export const isValidPhone = (value: string) => {
    return /^(\+?\d{10,15})$/.test(value.replace(/\s+/g, ''));
};
