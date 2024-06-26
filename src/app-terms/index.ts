import { run } from '../utils';
import type { Options } from './types';
import en from './en';
import de from './de';
import ru from './ru';

const locales = { en, de, ru };
const schema = { company: 'string', email: 'string', appName: 'string' };

export default (locale: keyof typeof locales, options: Options) => (
  run<Options>(locales[locale], schema, options)
);
