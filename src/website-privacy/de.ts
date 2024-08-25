import { when } from '../utils';
import type { Options } from './types';

const generator = ({
  company,
  email,
  minimumAge,
  updated,
  version = '1.0',
  website,
  conditions,
}: Options) => `
# Datenschutzerklärung
*Version ${version}${when(updated, ` vom ${updated}`)}.*

Diese Datenschutzerklärung beschreibt, wie Ihre persönlichen Daten gesammelt, verwendet und weitergegeben werden, wenn Sie [${website}](${website}) (die „Website“) besuchen${when(conditions?.shop, ' oder einen Kauf tätigen')}.

## Persönliche Daten, die wir sammeln

Wenn Sie die Website besuchen, sammeln wir automatisch bestimmte Informationen über Ihr Gerät, einschließlich Informationen über Ihren Webbrowser, Ihre IP-Adresse, Ihre Zeitzone und einige der Cookies, die auf Ihrem Gerät installiert sind. Darüber hinaus sammeln wir während Sie auf der Website surfen Informationen über die einzelnen Webseiten, die Sie anzeigen, welche Websites oder Suchbegriffe Sie auf die Website verwiesen haben, und Informationen darüber, wie Sie mit der Website interagieren. Wir bezeichnen diese automatisch gesammelten Informationen als „Geräteinformationen“.

### Wir sammeln Geräteinformationen${when(!conditions?.shop, ' (oder persönliche Informationen)')} mit den folgenden Technologien:

 - „Logdateien“ verfolgen Aktionen, die auf der Website stattfinden, und sammeln Daten einschließlich Ihrer IP-Adresse, Browsertyp, Internetdienstanbieter, Verweis-/Ausstiegsseiten und Datums-/Zeitstempel.
${when(conditions?.tracking, `
 - Datendateien, die auf Ihrem Gerät oder Computer platziert werden und oft eine anonyme eindeutige Kennung enthalten.
 - „Web-Beacons“, „Tags“ und „Pixel“ sind elektronische Dateien, die verwendet werden, um Informationen darüber aufzuzeichnen, wie Sie auf der Website surfen.
`.trim())}

${`
${when(conditions?.shop, 'Zusätzlich, wenn Sie einen Kauf tätigen oder versuchen, einen Kauf über die Website zu tätigen, sammeln wir bestimmte Informationen von Ihnen, einschließlich Ihres Namens, Rechnungsadresse, Lieferadresse, E-Mail-Adresse und Telefonnummer. Wir bezeichnen diese Informationen als „Bestellinformationen.“')}
${when(conditions?.shop, 'Wenn wir in dieser Datenschutzerklärung von „persönlichen Informationen“ sprechen, meinen wir sowohl Geräteinformationen als auch Bestellinformationen.')}
`.trim()}

## Wie verwenden wir Ihre persönlichen Daten?

${when(conditions?.shop, `
Wir verwenden die Bestellinformationen, die wir im Allgemeinen sammeln, um Bestellungen, die über die Website getätigt werden, zu erfüllen (einschließlich der Verarbeitung Ihrer Zahlungsinformationen, der Organisation, der Bereitstellung von Rechnungen und/oder Auftragsbestätigungen). Darüber hinaus verwenden wir diese Bestellinformationen, um:
 - Mit Ihnen zu kommunizieren;
 - Unsere Bestellungen auf potenzielle Risiken oder Betrug zu überprüfen;
 - Wenn es im Einklang mit den Präferenzen steht, die Sie mit uns geteilt haben, Ihnen Informationen oder Werbung in Bezug auf unsere Produkte oder Dienstleistungen bereitzustellen.
`)}
Wir verwenden die gesammelten Geräteinformationen, um uns bei der Überprüfung auf potenzielle Risiken und Betrug zu helfen (insbesondere Ihre IP-Adresse) und allgemeiner, um unsere Website zu verbessern und zu optimieren (zum Beispiel durch Erstellen von Analysen darüber, wie unsere Benutzer auf der Website surfen und mit ihr interagieren, und um den Erfolg unserer Marketing- und Werbekampagnen zu bewerten).

## Weitergabe Ihrer persönlichen Daten

Wir geben Ihre persönlichen Daten an Dritte weiter, um uns bei der Nutzung Ihrer persönlichen Daten zu helfen, wie oben beschrieben. Zum Beispiel verwenden wir einen Hosting-Anbieter, um unsere Website zu betreiben.

Wir können Ihre persönlichen Daten auch weitergeben, um geltende Gesetze und Vorschriften einzuhalten, um auf eine Vorladung, einen Durchsuchungsbefehl oder andere gesetzliche Anfragen nach Informationen zu reagieren oder um unsere Rechte anderweitig zu schützen.
${when(conditions?.retargeting, `
## Verhaltensbasierte Werbung
Wie oben beschrieben, verwenden wir Ihre persönlichen Daten, um Ihnen gezielte Werbung oder Marketingkommunikation bereitzustellen, von der wir glauben, dass sie für Sie von Interesse sein könnte. Weitere Informationen darüber, wie gezielte Werbung funktioniert, finden Sie auf der Bildungsseite der Network Advertising Initiative (NAI) unter http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.

Sie können sich von gezielter Werbung abmelden:
 - Facebook: https://www.facebook.com/settings/?tab=ads
 - Google: https://www.google.com/settings/ads/anonymous
 - Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads

Darüber hinaus können Sie sich von einigen dieser Dienste abmelden, indem Sie das Opt-out-Portal der Digital Advertising Alliance unter http://optout.aboutads.info/ besuchen.
`)}
## Nicht verfolgen
Bitte beachten Sie, dass wir die Datenerfassungs- und Nutzungspraktiken unserer Website nicht ändern, wenn wir ein Do Not Track-Signal von Ihrem Browser sehen.
${when(conditions?.gdpr, `
## Allgemeine Datenschutzverordnung (GDPR)

Wir sind ein Datenverantwortlicher für Ihre Informationen.

Die rechtliche Grundlage von ${company} für die Erfassung und Verwendung der in dieser Datenschutzerklärung beschriebenen persönlichen Informationen hängt von den persönlichen Daten ab, die wir sammeln, und dem spezifischen Kontext, in dem wir die Informationen sammeln:

 - ${company} muss einen Vertrag mit Ihnen erfüllen
 - Sie haben ${company} die Erlaubnis dazu gegeben
 - Die Verarbeitung Ihrer persönlichen Daten liegt im berechtigten Interesse von ${company}
 - ${company} muss geltendem Recht entsprechen

${company} wird Ihre persönlichen Daten nur so lange aufbewahren, wie es für die in dieser Datenschutzerklärung festgelegten Zwecke erforderlich ist. Wir werden Ihre Informationen aufbewahren und verwenden, soweit dies erforderlich ist, um unseren gesetzlichen Verpflichtungen nachzukommen, Streitigkeiten beizulegen und unsere Richtlinien durchzusetzen.

Wenn Sie ein europäischer Einwohner sind, beachten Sie bitte, dass wir Ihre Informationen verarbeiten, um Verträge zu erfüllen, die wir möglicherweise mit Ihnen haben${when(conditions?.shop, ' (zum Beispiel, wenn Sie eine Bestellung über die Website aufgeben)')}, oder anderweitig unsere oben genannten berechtigten Geschäftsinteressen zu verfolgen. Darüber hinaus beachten Sie bitte, dass Ihre Informationen möglicherweise außerhalb Europas, einschließlich Kanada und den Vereinigten Staaten, übertragen werden.`)}
${when(conditions?.shop, `
## Datenaufbewahrung
Wenn Sie eine Bestellung über die Website aufgeben, werden wir Ihre Bestellinformationen für unsere Aufzeichnungen aufbewahren, es sei denn, und bis Sie uns auffordern, diese Informationen zu löschen.
`)}
${when(minimumAge, `
## Altersbeschränkungen
Die Website ist nicht für Personen unter ${minimumAge} Jahren bestimmt.
`)}
## Änderungen
Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um beispielsweise Änderungen unserer Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen zu berücksichtigen.

## Kontakt

Für weitere Informationen über unsere Datenschutzpraktiken, wenn Sie Fragen haben oder wenn Sie eine Beschwerde einreichen möchten, kontaktieren Sie uns bitte per E-Mail unter [${email}](mailto:${email}).
`.trim();

export default generator;
