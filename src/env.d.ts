/// <reference types="vite/client" />

export interface ImportMetaEnv {
  // readonly VITE_BASE_PATH: "/" | "/dev/";
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
