import { when } from '../utils';
import type { Options } from './types';

const generator = ({
  company,
  email,
  appName,
  updated,
  version = '1.0',
  country,
  conditions,
}: Options) => `
# Terms of Service
*Version ${version}${when(updated, `, effective date: ${updated}`)}.*

## Overview

This App is operated by ${company}. Throughout the App, the terms “we”, “us” and “our” refer to ${company}. ${company} offers this App, including all information, tools and services available from this App to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.

By using our App${when(conditions?.shop, ' and/or purchasing something from us')}, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the App, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.

Please read these Terms of Service carefully before accessing or using our App. By accessing or using any part of the App, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the App or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.

Any new features or tools which are added to the current App shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our App. It is your responsibility to check this page periodically for changes. Your continued use of or access to the App following the posting of any changes constitutes acceptance of those changes.

## Service terms

By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this App.

You may not use our products or services for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).

You must not transmit any malicious software or any code of a destructive nature.

A breach or violation of any of the Terms will result in an immediate non-refundable termination of your Services.

## General conditions

We reserve the right to refuse service to anyone for any reason at any time.

You understand that your content${when(conditions?.shop, ' (not including credit card information)')}, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.${when(conditions?.shop, ' Credit card information is always encrypted during transfer over networks.')}

You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the App through which the service is provided, without express written permission by us.

The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.

## Accuracy, completeness and timeliness of information

We are not responsible if information made available on this site or via our Service is not accurate, complete or current. The material on this site or obtained via our Services is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site or via our Services is at your own risk.

This App may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this App at any time, but we have no obligation to update any information on our App. You agree that it is your responsibility to monitor changes to our App.

## Modifications to the service

${when(conditions?.shop, 'Prices for our products are subject to change without notice.\n\n')}We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.

We shall not be liable to you or to any third-party for any modification${when(conditions?.shop, ', price change')}, suspension or discontinuance of the Service.
${when(conditions?.shop, `

## Products or services

Certain products or services may be available exclusively online through the App. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.

We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product or service at any time. Any offer for any product or service made on this site is void where prohibited.

We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.

## Return Policy

We generally do not offer refunds for our digital services. Due to the preparation work involved before the service is delivered, once a service is purchased, it is considered consumed, and no refund will be provided.

Customers are required to initiate cancellations through our designated cancellation process outlined in the booking confirmation email or by contacting us directly via email: ${email}. Please provide relevant details and adhere to the specified timelines for eligibility.

## Accuracy of billing and account information

We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.

You agree to provide current, complete and accurate purchase and account information for all purchases made on our app. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.
`.trim())}

## Optional tools

We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.

You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.

Any use by you of optional tools offered through the App is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).

We may also, in the future, offer new services and/or features through the App (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.

## Third-party links

Certain content, products and services available via our Service may include materials from third-parties.

Third-party links on this App may direct you to third-party websites and/or Apps that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or Apps, or for any other materials, products, or services of third-parties.

We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party Apps. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.

## User comments, feedback and other submissions

If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.

We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.

You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related App. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.

## Personal information

Your submission of personal information through the store is governed by our Privacy Policy.

## Errors, inaccuracies and omissions

Occasionally there may be information on our App or in the Service that contains typographical errors, inaccuracies or omissions${when(conditions?.shop, ' that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability')}. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information${when(!conditions?.shop, ' or cancel orders')} if any information in the Service or on any related App is inaccurate at any time without prior notice${when(!conditions?.shop, ' (including after you have submitted your order)')}.

We undertake no obligation to update, amend or clarify information in the Service or on any related App${when(!conditions?.shop, ', including without limitation, pricing information,')} except as required by law. No specified update or refresh date applied in the Service or on any related App, should be taken to indicate that all information in the Service or on any related App has been modified or updated.

## Prohibited uses

In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the App or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related App, other Apps, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related App, other Apps, or the Internet. We reserve the right to terminate your use of the Service or any related App for violating any of the prohibited uses.

## Disclaimer of warranties; limitation of liability

We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.

We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.

You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.

You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.

In no case shall ${company}, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.

## Indemnification

You agree to indemnify, defend and hold harmless ${company} and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.

## Severability

In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.

## Termination

The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.

These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our App.

If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).

## Entire agreement

The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.

These Terms of Service and any policies or operating rules posted by us on this App or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).

Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.
${when(country, `
## Governing law

These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of ${country}.
`)}
## Changes to terms of service

You can review the most current version of the Terms of Service at any time at this page.

We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our App. It is your responsibility to check our App periodically for changes. Your continued use of or access to our App or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.

## License
Unless otherwise stated, ${company} and/or its licensors own the intellectual property rights for all material on the App. All intellectual property rights are reserved. You may access this from the App for your own personal use subjected to restrictions set in these terms and conditions.

You must not:
 - Republish any material from ${appName} and other ${company}’s services
 - Sell, rent or sub-license material from ${appName} and other ${company}’s services
 - Reproduce, duplicate or copy material from ${appName} and other ${company}’s services
 - Redistribute content from ${appName} and other ${company}’s services

## Hyperlinking to our content
The following organizations may link to our App without prior written approval:

 - Government agencies
 - Search engines
 - News organizations
 - Online directory distributors may link to our App in the same manner as they hyperlink to the Apps of other listed businesses

These organizations may link to our App so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s website and/or App.

We may consider and approve other link requests from the following types of organizations:

 - commonly-known consumer and/or business information sources
 - dot.com community websites
 - associations or other groups representing charities
 - online directory distributors
 - internet portals
 - accounting, law and consulting firms
 - educational institutions and trade associations

We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of ${company}; and (d) the link is in the context of general resource information.

These organizations may link to our App so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s website and/or App.

If you are one of the organizations listed in paragraph 2 above and are interested in linking to our App, you must inform us by sending an e-mail to [${email}](mailto:${email}). Please include your name, your organization name, contact information as well as the URL of your website.

Approved organizations may hyperlink to our App as follows:

 - By use of our service name
 - By use of any other description of our App being linked to that makes sense within the context and format of content on the linking party’s website.

No use of ${company}’s logo or other artwork will be allowed for linking absent a trademark license agreement.

## Contact information

Questions about the Terms of Service should be sent to us at [${email}](mailto:${email}).
`.trim();

export default generator;
