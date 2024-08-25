import { when } from '../utils';
import type { Options } from './types';

const generator = ({
  company,
  email,
  updated,
  version = '1.0',
  website,
  country,
  conditions,
}: Options) => `
# Terms of Service
*Version ${version}${when(updated, `, effective date: ${updated}`)}.*

## Overview

This website is operated by ${company}. Throughout the site, the terms “we”, “us” and “our” (Platform, Service) refer to ${company}. ${company} offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.

By visiting our site${when(conditions?.shop, ' and/or purchasing something from us')}, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.

Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.

Any new features or tools which are added to the current site shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.

## Service terms

${when(conditions?.minAge, ' By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.')}

You may not use our products or services for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).

You must not transmit any malicious software or any code of a destructive nature.

A breach or violation of any of the Terms will result in an immediate non-refundable termination of your Services.

## General conditions

We reserve the right to refuse service to anyone for any reason at any time.

You understand that your content${when(conditions?.shop, ' (not including credit card information)')}, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.${when(conditions?.shop, ' Credit card information is always encrypted during transfer over networks.')}

You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.

${when(conditions?.shop, 'The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.')}

## Accuracy, completeness and timeliness of information

We are not responsible if information made available on this site or via our Service is not accurate, complete or current. The material on this site or obtained via our Services is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site or via our Services is at your own risk.

The Client is solely responsible for the content and legality of the content they publish. The Client guarantees that they will consider all applicable legal standards, particularly personal rights, copyrights, and data protection laws, and that the Client will not use the Web-Site for any unlawful actions, including, but not limited to, creating, using, or distributing malware while using the Web-Site.

${when(conditions?.shop, ` The Client must keep login data to the Web-Site in a safe place and may only provide it to authorized employees. The Client agrees to comply with all security measures, functional, and other limitations of the Web-Site. In particular, the Client is not allowed to remove, bypass, deactivate, or otherwise circumvent protective or authentication mechanisms or use the Web-Site for purposes other than those provided or expressly stated in this Agreement. Furthermore, the Client is not permitted to provide the Web-Site to third parties and/or go beyond the plan they have purchased.

You agree to provide current, complete, and accurate purchase and account information for all purchases made on our website. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.
')}

The Client must regularly and at their own risk create backups of their data, both on their local systems and on the Platform provided by ${company}.


## Modifications to the service

${when(conditions?.shop, 'Prices for our products are subject to change without notice.\n\n')}We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.

We shall not be liable to you or to any third-party for any modification${when(conditions?.shop, ', price change')}, suspension or discontinuance of the Service.

The average availability of the Platform is 99% per year. This excludes necessary scheduled maintenance work, as well as disruptions beyond our control; in particular, force majeure events. If possible, the Site will inform the Client of scheduled maintenance work in advance in text form (e.g., by email). However, we expressly reserve the right to carry out unscheduled maintenance work if necessary, especially if it is required for data security and operation.

${company} may change the functionality of the Platform at any time to a reasonable extent for the Client. A change is particularly reasonable if it becomes necessary for a valid reason—for example, due to failures in the services provided by subcontractors or for security reasons—and the operating performance defined in the service description is essentially maintained, as well as our core obligations.

${when(conditions?.shop, `

## Products or services

To fully utilize our services, you need to register. Registration is done by completing an online form with various details, including the company/professional enterprise's email address and setting a password. 

Your provision of personal information is governed by our Privacy Policy.

Operation and maintenance of the Platform are our responsibility. The Client is not entitled to claim specific positioning or specific functions of the Platform or the Client's Products.

We do not guarantee that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations or that any errors in the Service will be corrected.

Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.

We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product or service at any time. Any offer for any product or service made on this site is void where prohibited.

We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.

##. **Payment**  
The payment method we accept is a credit card. We may add other payment methods in the future at our discretion. We use third-party payment providers to process payments as stated in the relevant section of our website.

We reserve the right to refuse any purchase you make with us. We may, at our discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed under the same customer account, the same credit card, and/or orders that use the same billing address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the email and/or billing address/phone number provided at the time the order was made.

## **Availability**  
We reserve the right, but are not obligated, to limit the provision of our products or Services to any person, geographic region, or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services we offer. All descriptions of products or product pricing are subject to change at any time without notice, at our discretion. We reserve the right to discontinue any product or service at any time. Any offer for any product or service made on this site is void where prohibited.

${company}, in particular, has the right to block access to the site if:

* There are signs that the Client's login data has been or will be misused or that the login data has been or will be transferred to an unauthorized third party, or that the login data is used by more than one individual;  
* There are signs that third parties have otherwise gained access to the IT infrastructure provided by the Client;  
* There are signs that the Client's Content violates applicable laws and/or this Agreement;  
* Blocking or deletion is necessary for technical reasons;  
* There is an obligation to block access or delete Client Content or Product in accordance with applicable laws or by court or official order;  
* The Client delays payment of the agreed fee by more than two weeks;  
* The Client has provided incorrect or invalid contact details, and communication between ${company} and the Client is no longer possible;  
* The Client has provided incorrect payment details, and the regular fulfillment of obligations is not guaranteed.


## Refund Policy

We generally do not offer refunds for our digital services. Due to the preparation work involved before the service is delivered, once a service is purchased, it is considered consumed, and no refund will be provided. The service is considered used as soon as you make payment.

Customers are required to initiate subscription cancellations through our designated cancellation process outlined in the booking confirmation email or by contacting us directly via email: ${email}. Please provide relevant details and adhere to the specified timelines for eligibility.

## Accuracy of billing and account information

We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.

You agree to provide current, complete and accurate purchase and account information for all purchases made on our website. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.
`.trim())}

## Additional tools

We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.

You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.

Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).

We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.

## Third-party links

Certain content, products and services available via our Service may include materials from third-parties.

Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.

We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.

## Personal information

Your submission of personal information through the store is governed by our Privacy Policy.

## Errors, inaccuracies and omissions

Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions${when(conditions?.shop, ' that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability')}. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information${when(!conditions?.shop, ' or cancel orders')} if any information in the Service or on any related website is inaccurate at any time without prior notice${when(!conditions?.shop, ' (including after you have submitted your order)')}.

We undertake no obligation to update, amend or clarify information in the Service or on any related website${when(!conditions?.shop, ', including without limitation, pricing information,')} except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.

## Prohibited uses

In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.

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

These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.

If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).

## Entire agreement

The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.

These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).

Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.
${when(country, `
## Governing law

These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of ${country}.
`)}
## Changes to terms of service

You can review the most current version of the Terms of Service at any time at this page.

We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.

## License
Unless otherwise stated, ${company} and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may access this from the website for your own personal use subjected to restrictions set in these terms and conditions.

You must not:
 - Republish any material from ${website} and other ${company}’s services
 - Sell, rent or sub-license material from ${website} and other ${company}’s services
 - Reproduce, duplicate or copy material from ${website} and other ${company}’s services
 - Redistribute content from ${website} and other ${company}’s services


## Contact information

Questions about the Terms of Service should be sent to us at [${email}](mailto:${email}).
`.trim();

export default generator;
