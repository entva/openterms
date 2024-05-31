export type Options = {
  company: string,
  email: string,
  appName: string,
  minimumAge?: number,
  updated?: string,
  version?: string,
  conditions?: {
    shop?: boolean,
    tracking?: boolean,
    retargeting?: boolean,
    gdpr?: boolean,
  },
};
