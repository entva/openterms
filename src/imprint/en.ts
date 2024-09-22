import { when } from '../utils';
import type { Options } from './types';

const generator = ({
  email,
  address,
  phone,
  vat,
}: Options) => `
# Imprint

## Liability disclaimer

### Liability for contents
The contents of our pages have been created with the utmost care. However, we cannot assume any liability for the correctness, completeness and up-to-dateness of the contents. As a service provider, we are responsible for our own content on these pages in accordance with the general laws. However, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under the general laws remain unaffected. Liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. If we become aware of any such infringements, we will remove the relevant content immediately.


### Liability for links
Our product contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.


## Licenses

The images used on this website are royalty-free, a source reference is not required.


## Contact information

- **Email**: [${email}](mailto:${email})
${when(address, `- **Mail:** ${address}`)}
${when(phone, `- **Phone**: ${phone}`)}
${when(vat, `- **VAT ID**: ${vat}`)}
`.trim();

export default generator;
