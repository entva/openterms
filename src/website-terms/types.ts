export type Options = {
  company: string,
  email: string,
  website: string,
  country?: string,
  conditions?: {
    shop?: boolean,
    registration?: boolean,
  },
};
