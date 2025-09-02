export interface IYMapRating {
    ratings: number;
    reviews: number;
    score: number;
}

interface IYMapOrg {
    rating: IYMapRating;
}

export async function getYandexRatingByOrgId(): Promise<IYMapRating | null> {
    const ymaps = (window as any).ymaps;
    const org = await ymaps.findOrganization(import.meta.env.VITE_YMAPS_ORG_ID);
    const props: IYMapOrg = org?.properties?.getAll?.();

    console.log(props);

    return props.rating;
}
