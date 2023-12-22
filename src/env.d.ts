/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STAGE: "local" | "test" | "prod";
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
