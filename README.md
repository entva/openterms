# OpenTerms
Generate legal texts in markdown format. Lightweight, 0 dependencies. A good starter template to feed to ChatGPT or to use programmatically directly.

**DISCLAIMER:** OpenTerms is not a replacement for a lawyer and can't be held responsible for any damages you incur while using it's content. This software is provided "as is" under the [MIT License](./LICENSE) with neither liability nor warranty.

# Usage:

```javascript
import { appPrivacy, appTerms, webPrivacy, webTerms } from '@entva/openterms';

const options = {
  company: 'Example, Inc.',
  email: 'contact@example.com',
  website: 'https://example.com'
};

// Currently supports 'en' and 'de' locales
const markdown = webTerms('en', options);
```

## Options

### appPrivacy
```javascript
export type Options = {
  company: string,
  email: string,
  appName: string,
  minimumAge?: number,
  updated?: string,
  version?: string,
  conditions?: {
    shop?: boolean,
    tracking?: boolean,
    retargeting?: boolean,
    gdpr?: boolean,
  },
};
```

### appTerms
```javascript
export type Options = {
  company: string,
  email: string,
  appName: string,
  updated?: string,
  version?: string,
  country?: string,
  conditions?: {
    shop?: boolean,
  },
};
```

### webPrivacy
```javascript
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
```

### webTerms
```javascript
export type Options = {
  company: string,
  email: string,
  updated?: string,
  version?: string,
  website: string,
  country?: string,
  conditions?: {
    shop?: boolean,
  },
};
```

## Formatting output

### As plain text

You can use [remove-markdown](https://github.com/stiang/remove-markdown) module to clean up any markup:
```javascript
import removeMd from 'remove-markdown';

const text = removeMd(generator('en', options));
```

### As HTML

You can use [marked](https://github.com/markedjs/marked) to render HTML:
```javascript
import marked from 'marked';

const text = marked(generator('en', options));
```

### As a React component

You can use [react-markdown](https://github.com/rexxars/react-markdown) to avoid dangerouslySetInnerHTML:
```javascript
import React from 'react';
import ReactMarkdown from 'react-markdown';

const node = <ReactMarkdown>{generator('en', options)}</ReactMarkdown>;
```
