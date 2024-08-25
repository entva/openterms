export type Options = {
  company: string,
  email: string,
  updated?: string,
  version?: string,
  website: string,
  country?: string,
  conditions?: {
    shop?: boolean,
    registration?: boolean,
  },
};
