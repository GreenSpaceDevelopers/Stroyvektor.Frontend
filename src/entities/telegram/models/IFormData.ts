import { messengerType } from '~/shared/utils/labels/messengerLabels';

export interface IFormData {
    name: string;
    phone: string;
    messengers: messengerType[];
    time: string;
}
