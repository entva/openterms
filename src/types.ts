import appPrivacy from './app-privacy';
import appTerms from './app-terms';

import webPrivacy from './website-privacy';
import webTerms from './website-terms';

import imprint from './imprint';

export type AppPrivacyGenerator = typeof appPrivacy;
export type AppTermsGenerator = typeof appTerms;
export type WebPrivacyGenerator = typeof webPrivacy;
export type WebTermsGenerator = typeof webTerms;
export type ImprintGenerator = typeof imprint;

export type GeneratorFunction =
  | AppPrivacyGenerator
  | AppTermsGenerator
  | WebPrivacyGenerator
  | WebTermsGenerator
  | ImprintGenerator;

export type GeneratorLanguage =
  | Parameters<AppPrivacyGenerator>[0]
  | Parameters<AppTermsGenerator>[0]
  | Parameters<WebPrivacyGenerator>[0]
  | Parameters<WebTermsGenerator>[0]
  | Parameters<ImprintGenerator>[0];

export type GeneratorOptions =
  | Parameters<AppPrivacyGenerator>[1]
  | Parameters<AppTermsGenerator>[1]
  | Parameters<WebPrivacyGenerator>[1]
  | Parameters<WebTermsGenerator>[1]
  | Parameters<ImprintGenerator>[1];
