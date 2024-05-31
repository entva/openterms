export type Options = {
  company: string,
  email: string,
  minimumAge?: number,
  updated?: string,
  version?: string,
  website: string,
  conditions?: {
    shop?: boolean,
    tracking?: boolean,
    retargeting?: boolean,
    gdpr?: boolean,
  },
};
