export const when = (condition: unknown, value: string) => (condition ? value : '');

export const validate = <T=Record<string, unknown>>(schema: Partial<T>, options: T): string[] => (
  Object.keys(schema)
    .reduce((acc, item) => {
      const key = item as keyof T;
      const type = schema[key];
      const value = options[key];
      if (type && typeof type !== 'string') {
        return [...acc, ...validate<typeof value>(type, value)];
      }
      if (typeof value !== type) return [...acc, key as string];
      return acc;
    }, [] as string[])
);

type GeneratorFn<T> = (options: T) => string;

const REGEX_NEWLINES = /\n{2,}/g;
const REGEX_SPACES = / {2,}/g;
const normalize = (content: string) => (
  content
    .replace(REGEX_NEWLINES, '\n\n')
    .replace(REGEX_SPACES, ' ')
);

export const run = <T=Record<string, unknown>>(
  generator: GeneratorFn<T>,
  schema: Partial<T>,
  options: T,
) => {
  const errors = validate<T>(schema, options);
  if (errors.length) throw new Error(`Following options are invalid or missing: ${errors.join(', ')}`);
  const content = generator(options);
  return normalize(content);
};
