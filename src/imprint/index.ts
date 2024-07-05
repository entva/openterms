import { run } from '../utils';
import type { Options } from './types';
import en from './en';
import de from './de';
import ru from './ru';

const locales = { en, de, ru };
const schema = { email: 'string', address: 'string' };

export default (locale: keyof typeof locales, options: Options) => (
  run<Options>(locales[locale], schema, options)
);
