/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly VITE_BACKEND_API_URL: string;
    readonly VITE_FRONTEND_URL: string;

    readonly VITE_TG_BOT_TOKEN: string;
    readonly VITE_TG_CHAT_ID: string;

    readonly VITE_COMPANY_PHONE: string;
    readonly VITE_COMPANY_PHONE_NORMALIZE: string;
    readonly VITE_COMPANY_EMAIL: string;
    readonly VITE_COMPANY_ADDRESS: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
