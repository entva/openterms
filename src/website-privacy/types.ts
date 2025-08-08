export type Options = {
  company: string,
  email: string,
  minimumAge?: number,
  website: string,
  conditions?: {
    shop?: boolean,
    tracking?: boolean,
    retargeting?: boolean,
    gdpr?: boolean,
  },
};
