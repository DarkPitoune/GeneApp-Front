/// <reference path="../.astro/actions.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    pb: import("pocketbase").default;
  }
}

interface ImportMetaEnv {
  readonly SECRET_PB_URL: string;
  readonly SECRET_ALGOLIA_ID: string;
  readonly SECRET_ALGOLIA_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "tailwind-scrollbar-hide";
declare module "astro-htmx";
