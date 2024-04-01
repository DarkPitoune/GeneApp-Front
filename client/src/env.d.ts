/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    pb: import("pocketbase").default;
  }
}

interface ImportMetaEnv {
  readonly SECRET_PB_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
