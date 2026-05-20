/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEFAULT_LOCALE?: string;
  readonly VITE_ICP_RECORD?: string;
  readonly VITE_SITE_REGION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
