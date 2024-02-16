export interface PortraitResponse {
  id: number;
  attributes: Portrait;
}

export interface Portrait {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: [Object];
  hash: string;
  ext: string; // file extension, e.g. '.jpg'
  mime: string; // file type (MIME type)
  size: number; // file size
  url: string; // relative url
  previewUrl: null;
  provider: "local";
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}
