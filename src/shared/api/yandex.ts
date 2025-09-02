import { IYMapOrg } from '@entities/yandex/models/IYMapOrg';
import { IYMapRating } from '@entities/yandex/models/IYMapRating';

export async function getYandexRatingByOrgId(): Promise<IYMapRating | null> {
    const ymaps = (window as any).ymaps;
    const org = await ymaps.findOrganization(import.meta.env.VITE_YMAPS_ORG_ID);
    const props: IYMapOrg = org?.properties?.getAll?.();

    return props.rating;
}
