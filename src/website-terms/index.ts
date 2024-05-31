import { run } from '../utils';
import type { Options } from './types';
import en from './en';
import de from './de';

const locales = { en, de };
const schema = { company: 'string', email: 'string', website: 'string' };

export default (locale: keyof typeof locales, options: Options) => (
  run<Options>(locales[locale], schema, options)
);
