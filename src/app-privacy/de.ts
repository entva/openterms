import { when } from '../utils';
import type { Options } from './types';

const generator = ({
  company,
  email,
  appName,
  minimumAge,
  updated,
  version = '1.0',
  conditions,
}: Options) => `
# Datenschutzerklärung
*Version ${version}${when(updated, ` vom ${updated}`)}.*

Diese Datenschutzerklärung beschreibt, wie Ihre persönlichen Informationen gesammelt, verwendet und geteilt werden, wenn Sie${when(conditions?.shop, ' oder einen Kauf tätigen über')} ${appName} (die „App“) nutzen.

## Persönliche Informationen, die wir sammeln

Wenn Sie die App nutzen, sammeln wir automatisch bestimmte Informationen über Ihr Gerät, einschließlich Informationen über Ihr Betriebssystem, Ihre IP-Adresse, Ihre Zeitzone und einige der auf Ihrem Gerät installierten Tracking-Software. Zusätzlich sammeln wir, während Sie die App nutzen, Informationen über die individuellen Ansichten, die Sie öffnen, welche Websites oder Suchbegriffe Sie zur App verwiesen haben, und Informationen darüber, wie Sie mit der App interagieren. Wir bezeichnen diese automatisch gesammelten Informationen als „Geräteinformationen“.

### Wir sammeln Geräteinformationen${when(!conditions?.shop, ' (oder persönliche Informationen)')} mit den folgenden Technologien:

 - „Protokolldateien“ verfolgen Aktionen, die auf der App stattfinden, und sammeln Daten einschließlich Ihrer IP-Adresse, Gerätetyp, Internetdienstanbieter, verweisende/ausgehende Ansichten und Datums-/Zeitstempel.
${when(conditions?.tracking, `
 - Datendateien, die auf Ihrem Gerät oder Computer platziert werden und oft eine anonyme eindeutige Kennung enthalten.
 - „Beacons“, „Tags“ und „Pixel“ sind elektronische Dateien, die verwendet werden, um Informationen darüber aufzuzeichnen, wie Sie die App nutzen.
`.trim())}

${`
${when(conditions?.shop, 'Zusätzlich, wenn Sie einen Kauf tätigen oder versuchen, einen Kauf über die App zu tätigen, sammeln wir bestimmte Informationen von Ihnen, einschließlich Ihres Namens, Rechnungsadresse, Lieferadresse, E-Mail-Adresse und Telefonnummer. Wir bezeichnen diese Informationen als „Bestellinformationen.“')}
${when(conditions?.shop, 'Wenn wir in dieser Datenschutzerklärung von „persönlichen Informationen“ sprechen, sprechen wir sowohl von Geräteinformationen als auch von Bestellinformationen.')}
`.trim()}

## Wie verwenden wir Ihre persönlichen Informationen?

${when(conditions?.shop, `
Wir verwenden die von uns gesammelten Bestellinformationen generell, um Bestellungen, die über die App getätigt werden, zu erfüllen (einschließlich der Verarbeitung Ihrer Zahlungsinformationen, der Organisation des Versands und der Bereitstellung von Rechnungen und/oder Bestellbestätigungen). Zusätzlich verwenden wir diese Bestellinformationen, um:
 - Mit Ihnen zu kommunizieren;
 - Unsere Bestellungen auf potenzielle Risiken oder Betrug zu prüfen; und
 - Ihnen, in Übereinstimmung mit den von Ihnen mit uns geteilten Präferenzen, Informationen oder Werbung in Bezug auf unsere Produkte oder Dienstleistungen bereitzustellen.
`)}
Wir verwenden die von uns gesammelten Geräteinformationen, um uns zu helfen, potenzielle Risiken und Betrug zu erkennen (insbesondere Ihre IP-Adresse) und um unsere App generell zu verbessern und zu optimieren (zum Beispiel durch die Erstellung von Analysen darüber, wie unsere Nutzer die App durchsuchen und mit ihr interagieren, und um den Erfolg unserer Marketing- und Werbekampagnen zu bewerten).
## Teilen Ihrer persönlichen Informationen

Wir teilen Ihre persönlichen Informationen mit Dritten, um uns bei der Nutzung Ihrer persönlichen Informationen zu unterstützen, wie oben beschrieben. Zum Beispiel verwenden wir einen Hosting-Anbieter, um unsere von der App genutzten Server zu betreiben.

Wir können Ihre persönlichen Informationen auch teilen, um geltende Gesetze und Vorschriften einzuhalten, um auf eine Vorladung, einen Durchsuchungsbefehl oder eine andere rechtliche Aufforderung, die wir erhalten, zu reagieren oder um unsere Rechte anderweitig zu schützen.
${when(conditions?.retargeting, `
## Verhaltensbasierte Werbung
Wie oben beschrieben, verwenden wir Ihre persönlichen Informationen, um Ihnen gezielte Werbung oder Marketingkommunikationen bereitzustellen, von denen wir glauben, dass sie für Sie von Interesse sein könnten. Für weitere Informationen darüber, wie gezielte Werbung funktioniert, können Sie die Bildungsseite der Network Advertising Initiative („NAI“) unter http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work besuchen.

Sie können gezielte Werbung abbestellen:
 - Facebook: https://www.facebook.com/settings/?tab=ads
 - Google: https://www.google.com/settings/ads/anonymous
 - Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads

Zusätzlich können Sie einige dieser Dienste abbestellen, indem Sie das Opt-out-Portal der Digital Advertising Alliance unter http://optout.aboutads.info/ besuchen.
`)}
## Do Not Track
Bitte beachten Sie, dass wir die Datenerfassungs- und Nutzungspraktiken unserer App nicht ändern, wenn wir ein Do Not Track-Signal von Ihrem Betriebssystem sehen.
${when(conditions?.gdpr, `
## Allgemeine Datenschutzverordnung (DSGVO)

Wir sind ein Datenverantwortlicher Ihrer Informationen.

Die rechtliche Grundlage von ${company} für die Erfassung und Nutzung der in dieser Datenschutzerklärung beschriebenen persönlichen Informationen hängt von den persönlichen Informationen ab, die wir sammeln, und dem spezifischen Kontext, in dem wir die Informationen sammeln:

 - ${company} muss einen Vertrag mit Ihnen erfüllen
 - Sie haben ${company} die Erlaubnis dazu gegeben
 - Die Verarbeitung Ihrer persönlichen Informationen liegt im berechtigten Interesse von ${company}
 - ${company} muss das Gesetz einhalten

 ${company} wird Ihre persönlichen Informationen nur so lange aufbewahren, wie es für die in dieser Datenschutzerklärung festgelegten Zwecke erforderlich ist. Wir werden Ihre Informationen aufbewahren und verwenden, soweit dies erforderlich ist, um unseren rechtlichen Verpflichtungen nachzukommen, Streitigkeiten zu lösen und unsere Richtlinien durchzusetzen.

Wenn Sie ein europäischer Einwohner sind, beachten Sie bitte, dass wir Ihre Informationen verarbeiten, um Verträge zu erfüllen, die wir möglicherweise mit Ihnen haben${when(conditions?.shop, ' (zum Beispiel, wenn Sie eine Bestellung über die App tätigen)')}, oder anderweitig, um unsere oben aufgeführten berechtigten Geschäftsinteressen zu verfolgen. Darüber hinaus beachten Sie bitte, dass Ihre Informationen außerhalb Europas übertragen werden können, einschließlich nach Kanada und in die Vereinigten Staaten.`)}
${when(conditions?.shop, `
## Datenspeicherung
Wenn Sie eine Bestellung über die App aufgeben, werden wir Ihre Bestellinformationen für unsere Unterlagen aufbewahren, es sei denn, Sie bitten uns, diese Informationen zu löschen.
`)}
${when(minimumAge, `
## Altersbeschränkungen
Die App ist nicht für Personen unter ${minimumAge} Jahren bestimmt.
`)}
## Änderungen
Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um zum Beispiel Änderungen unserer Praktiken oder aus anderen operativen, rechtlichen oder regulatorischen Gründen zu berücksichtigen.

## Kontaktinformationen

Für weitere Informationen über unsere Datenschutzpraktiken, wenn Sie Fragen haben oder wenn Sie eine Beschwerde einreichen möchten, kontaktieren Sie uns bitte per E-Mail unter [${email}](mailto:${email}).
`.trim();

export default generator;
