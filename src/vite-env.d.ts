/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly VITE_BACKEND_API_URL: string;
    readonly VITE_FRONTEND_URL: string;
    readonly VITE_IMG_STORAGE_ENDPOINT_URL: string;

    readonly VITE_TG_BOT_TOKEN: string;
    readonly VITE_TG_CHAT_ID: string;

    readonly VITE_COMPANY_PHONE: string;
    readonly VITE_COMPANY_PHONE_NORMALIZE: string;

    readonly VITE_COMPANY_ADDRESS: string;
    readonly VITE_COMPANY_EMAIL: string;

    readonly VITE_COMPANY_TG: string;
    readonly VITE_COMPANY_VK: string;

    readonly VITE_YMAPS_API_KEY: string;
    readonly VITE_YMAPS_ORG_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
