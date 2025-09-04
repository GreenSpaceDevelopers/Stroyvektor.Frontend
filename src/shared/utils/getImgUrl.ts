import { BucketsConstants } from '../constants';

export const getImgUrl = (imgFileName: string, bucketName?: string) => {
    if (bucketName) {
        return import.meta.env.VITE_IMG_STORAGE_ENDPOINT_URL + bucketName + imgFileName;
    }

    return (
        import.meta.env.VITE_IMG_STORAGE_ENDPOINT_URL + BucketsConstants.StaticBucket + imgFileName
    );
};
