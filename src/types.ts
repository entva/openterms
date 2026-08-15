import type appPrivacy from './app-privacy';
import type appTerms from './app-terms';

import type webPrivacy from './website-privacy';
import type webTerms from './website-terms';

import type imprint from './imprint';

export type AppPrivacyGenerator = typeof appPrivacy;
export type AppTermsGenerator = typeof appTerms;
export type WebPrivacyGenerator = typeof webPrivacy;
export type WebTermsGenerator = typeof webTerms;
export type ImprintGenerator = typeof imprint;

export type GeneratorFunction = AppPrivacyGenerator
  | AppTermsGenerator
  | WebPrivacyGenerator
  | WebTermsGenerator
  | ImprintGenerator;

export type GeneratorLanguage = Parameters<AppPrivacyGenerator>[0]
  | Parameters<AppTermsGenerator>[0]
  | Parameters<WebPrivacyGenerator>[0]
  | Parameters<WebTermsGenerator>[0]
  | Parameters<ImprintGenerator>[0];

export type GeneratorOptions = Parameters<AppPrivacyGenerator>[1]
  | Parameters<AppTermsGenerator>[1]
  | Parameters<WebPrivacyGenerator>[1]
  | Parameters<WebTermsGenerator>[1]
  | Parameters<ImprintGenerator>[1];
