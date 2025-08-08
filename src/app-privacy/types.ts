export type Options = {
  company: string,
  email: string,
  appName: string,
  minimumAge?: number,
  conditions?: {
    shop?: boolean,
    tracking?: boolean,
    retargeting?: boolean,
    gdpr?: boolean,
  },
};
