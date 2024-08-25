import { when } from '../utils';
import type { Options } from './types';

const generator = ({
  company,
  email,
  minimumAge,
  updated,
  version = '1.0',
  appName,
  conditions,
}: Options) => `
# Privacy Policy
*Version ${version}${when(updated, `, effective date: ${updated}`)}.*

This Privacy Policy describes how your Personal Information is collected, used, and shared when you visit${when(conditions?.shop, ' or make a purchase from')} ${appName} (the “Site”).

## Personal information we collect

When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”

### We collect Device Information${when(!conditions?.shop, ' (or Personal Information)')} using the following technologies:

 - “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
${when(conditions?.tracking, `
 - “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
`.trim())}

${`
${when(conditions?.shop, 'Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, email address, and phone number. We refer to this information as “Order Information.”')}
${when(conditions?.shop, 'When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.')}
`.trim()}

## How do we use your Personal Information?

${when(conditions?.shop, `
We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
 - Communicate with you;
 - Screen our orders for potential risk or fraud;
 - When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
`)}
We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our users browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).

## Sharing your Personal Information

We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use a hosting provider to power our App.

We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
${when(conditions?.retargeting, `
## Behavioral advertising
As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.

You can opt out of targeted advertising by:
 - Facebook: https://www.facebook.com/settings/?tab=ads
 - Google: https://www.google.com/settings/ads/anonymous
 - Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads

Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at:  http://optout.aboutads.info/.
`)}
## Do not track
Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.
${when(conditions?.gdpr, `
## General Data Protection Regulation (GDPR)

We are a Data Controller of your information.

${company}'s legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:

 - ${company} needs to perform a contract with you
 - You have given ${company} permission to do so
 - Processing your personal information is in ${company}'s legitimate interests
 - ${company} needs to comply with the law

${company} will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.

If you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you${when(conditions?.shop, ' (for example if you make an order through the Site)')}, or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information may be transferred outside of Europe, including to Canada and the United States.`)}
${when(conditions?.shop, `
## Data retention
When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
`)}
${when(minimumAge, `
## Age restrictions
The Site is not intended for individuals under the age of ${minimumAge}.
`)}
## Changes
We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.

## Contact us
For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at [${email}](mailto:${email}).
`.trim();

export default generator;
