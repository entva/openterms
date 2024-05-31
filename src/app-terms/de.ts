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
# Nutzungsbedingungen
*Version ${version}${when(updated, ` vom ${updated}`)}.*

## Überblick

Diese App wird von ${company} betrieben. Im gesamten App beziehen sich die Begriffe "wir", "uns" und "unser" auf ${company}. ${company} bietet diese App an, einschließlich aller Informationen, Tools und Dienste, die über diese App verfügbar sind, unter der Bedingung Ihrer Zustimmung zu allen hier angegebenen Bedingungen, Richtlinien und Mitteilungen.

Durch die Nutzung unserer App${when(conditions?.shop, ' und/oder den Kauf von etwas bei uns')} nutzen Sie unseren "Service" und stimmen zu, an die folgenden Nutzungsbedingungen ("Nutzungsbedingungen", "Bedingungen"), einschließlich aller zusätzlichen Bedingungen und Richtlinien, die hierin oder per Hyperlink genannt sind, gebunden zu sein. Diese Nutzungsbedingungen gelten für alle Benutzer der App, einschließlich, aber nicht beschränkt auf Benutzer, die Browser, Anbieter, Kunden, Händler und/oder Beitragende von Inhalten sind.

Bitte lesen Sie diese Nutzungsbedingungen sorgfältig durch, bevor Sie auf unsere App zugreifen oder diese nutzen. Durch den Zugriff auf oder die Nutzung eines Teils der App erklären Sie sich damit einverstanden, an diese Nutzungsbedingungen gebunden zu sein. Wenn Sie nicht allen Bedingungen dieses Vertrags zustimmen, dürfen Sie nicht auf die App zugreifen oder keine Dienste nutzen. Wenn diese Nutzungsbedingungen als Angebot angesehen werden, ist die Annahme ausdrücklich auf diese Nutzungsbedingungen beschränkt.

Alle neuen Funktionen oder Tools, die der aktuellen App hinzugefügt werden, unterliegen ebenfalls den Nutzungsbedingungen. Sie können die aktuellste Version der Nutzungsbedingungen jederzeit auf dieser Seite einsehen. Wir behalten uns das Recht vor, Teile dieser Nutzungsbedingungen durch Veröffentlichung von Aktualisierungen und/oder Änderungen an unserer App zu aktualisieren, zu ändern oder zu ersetzen. Es liegt in Ihrer Verantwortung, diese Seite regelmäßig auf Änderungen zu überprüfen. Ihre fortgesetzte Nutzung oder Ihr Zugriff auf die App nach der Veröffentlichung von Änderungen stellt eine Annahme dieser Änderungen dar.

## Dienstbedingungen

Durch Zustimmung zu diesen Nutzungsbedingungen erklären Sie, dass Sie mindestens das Volljährigkeitsalter in Ihrem Bundesstaat oder Ihrer Provinz erreicht haben oder dass Sie das Volljährigkeitsalter in Ihrem Bundesstaat oder Ihrer Provinz erreicht haben und uns Ihre Zustimmung gegeben haben, dass Ihre minderjährigen Angehörigen diese App nutzen dürfen.

Sie dürfen unsere Produkte oder Dienste nicht für illegale oder unbefugte Zwecke verwenden, noch dürfen Sie bei der Nutzung des Dienstes Gesetze in Ihrer Gerichtsbarkeit verletzen (einschließlich, aber nicht beschränkt auf Urheberrechtsgesetze).

Sie dürfen keine schädliche Software oder irgendeinen Code von zerstörerischer Natur übertragen.

Ein Verstoß gegen eine der Bedingungen führt zu einer sofortigen und nicht erstattungsfähigen Kündigung Ihrer Dienste.

## Allgemeine Bedingungen

Wir behalten uns das Recht vor, jedem aus beliebigen Gründen und zu jeder Zeit den Service zu verweigern.

Sie verstehen, dass Ihre Inhalte${when(conditions?.shop, ' (ausgenommen Kreditkarteninformationen)')}, unverschlüsselt übertragen und (a) über verschiedene Netzwerke übertragen werden können; und (b) Änderungen unterliegen, um den technischen Anforderungen von Verbindungsnetzwerken oder Geräten zu entsprechen.${when(conditions?.shop, ' Kreditkarteninformationen werden während der Übertragung über Netzwerke immer verschlüsselt.')}

Sie erklären sich damit einverstanden, keinen Teil des Dienstes, die Nutzung des Dienstes oder den Zugriff auf den Dienst oder jegliche Kontakte auf der App, über die der Dienst bereitgestellt wird, zu reproduzieren, zu duplizieren, zu kopieren, zu verkaufen, zu verkaufen oder zu nutzen ohne unsere ausdrückliche schriftliche Genehmigung.

Die in diesem Vertrag verwendeten Überschriften dienen nur der Bequemlichkeit und beeinträchtigen nicht die Wirksamkeit oder den Inhalt dieser Bedingungen.

## Richtigkeit, Vollständigkeit und Aktualität der Informationen

Wir sind nicht verantwortlich, wenn auf dieser Website oder über unseren Service verfügbare Informationen nicht korrekt, vollständig oder aktuell sind. Das Material auf dieser Website oder über unsere Dienste wird nur zu allgemeinen Informationszwecken bereitgestellt und sollte nicht als alleinige Grundlage für Entscheidungen herangezogen werden, ohne primäre, genauere, vollständigere oder rechtzeitigere Informationsquellen zu konsultieren. Jegliches Vertrauen in das Material auf dieser Website oder über unsere Dienste erfolgt auf Ihr eigenes Risiko.

Diese App kann bestimmte historische Informationen enthalten. Historische Informationen sind notwendigerweise nicht aktuell und dienen nur Ihrer Referenz. Wir behalten uns das Recht vor, den Inhalt dieser App jederzeit zu ändern, sind jedoch nicht verpflichtet, Informationen auf unserer App zu aktualisieren. Sie erklären sich damit einverstanden, dass es in Ihrer Verantwortung liegt, Änderungen an unserer App zu überwachen.

## Änderungen am Dienst

${when(conditions?.shop, 'Preise für unsere Produkte können sich ohne Vorankündigung ändern.\n\n')}Wir behalten uns das Recht vor, den Service (oder einen Teil oder Inhalt davon) jederzeit ohne Vorankündigung einzustellen oder zu ändern.

Wir haften Ihnen oder Dritten gegenüber nicht für Änderungen${when(conditions?.shop, ', Preisänderungen')}, Aussetzungen oder Einstellungen des Dienstes.
${when(conditions?.shop, `

## Produkte oder Dienstleistungen

Bestimmte Produkte oder Dienstleistungen sind möglicherweise ausschließlich online über die App erhältlich. Diese Produkte oder Dienstleistungen können in begrenzten Mengen vorliegen und unterliegen nur gemäß unserer Rückgaberichtlinie einer Rückgabe oder einem Umtausch.

Wir behalten uns das Recht vor, den Verkauf unserer Produkte oder Dienstleistungen auf bestimmte Personen, geografische Regionen oder Gerichtsbarkeiten zu beschränken, sind jedoch nicht verpflichtet, dies zu tun. Wir können dieses Recht je nach Fall ausüben. Wir behalten uns das Recht vor, die Mengen aller Produkte oder Dienstleistungen, die wir anbieten, zu begrenzen. Alle Beschreibungen von Produkten oder Produkt-Preisgestaltungen können jederzeit nach unserem alleinigen Ermessen ohne Vorankündigung geändert werden. Wir behalten uns das Recht vor, jedes Produkt oder jede Dienstleistung jederzeit einzustellen. Jedes Angebot für ein Produkt oder eine Dienstleistung, das auf dieser Website gemacht wird, ist dort ungültig, wo es gesetzlich untersagt ist.

Wir garantieren nicht, dass die Qualität von Produkten, Dienstleistungen, Informationen oder anderen Materialien, die von Ihnen erworben oder erhalten werden, Ihren Erwartungen entspricht, oder dass Fehler im Dienst behoben werden.

## Rückgaberecht

Wir bieten im Allgemeinen keine Rückerstattungen für unsere digitalen Dienste an. Aufgrund der Vorbereitungsarbeiten, die vor der Bereitstellung des Dienstes erforderlich sind, wird ein Dienst, sobald er gekauft wurde, als verbraucht betrachtet, und es wird keine Rückerstattung gewährt.

Kunden müssen Stornierungen gemäß unserem im Buchungsbestätigungs-E-Mail festgelegten Stornierungsprozess oder durch direkte Kontaktaufnahme mit uns per E-Mail: ${email} einleiten. Bitte geben Sie relevante Details an und halten Sie sich an die angegebenen Fristen für die Berechtigung.

## Richtigkeit von Rechnungs- und Kontoinformationen

Wir behalten uns das Recht vor, jede bei uns platzierte Bestellung abzulehnen. Wir können nach unserem alleinigen Ermessen die gekauften Mengen pro Person, pro Haushalt oder pro Bestellung begrenzen oder stornieren. Diese Einschränkungen können Bestellungen umfassen, die über dasselbe Kundenkonto, dieselbe Kreditkarte und/oder dieselbe Rechnungs- und/oder Versandadresse platziert wurden. Falls wir eine Änderung oder Stornierung einer Bestellung vornehmen, können wir versuchen, Sie zu benachrichtigen, indem wir die E-Mail-Adresse und/oder die Rechnungsadresse/Telefonnummer kontaktieren, die zum Zeitpunkt der Bestellung angegeben wurde. Wir behalten uns das Recht vor, Bestellungen zu begrenzen oder zu verbieten, die unserer alleinigen Einschätzung nach von Händlern, Wiederverkäufern oder Distributoren platziert wurden.

Sie stimmen zu, dass Sie für alle Käufe, die Sie in unserer App tätigen, aktuelle, vollständige und genaue Kauf- und Kontoinformationen bereitstellen werden. Sie stimmen zu, Ihr Konto und andere Informationen, einschließlich Ihrer E-Mail-Adresse und Kreditkartennummern und Ablaufdaten, umgehend zu aktualisieren, damit wir Ihre Transaktionen abschließen und Sie bei Bedarf kontaktieren können.
`.trim())}

## Optionale Werkzeuge

Wir können Ihnen den Zugang zu Tools von Drittanbietern ermöglichen, über die wir weder überwachen noch Kontrolle haben.

Sie erkennen an und stimmen zu, dass wir den Zugang zu solchen Tools "wie besehen" und "wie verfügbar" ohne jegliche Garantien, Darstellungen oder Bedingungen jeglicher Art und ohne jegliche Unterstützung bereitstellen. Wir haften in keiner Weise für Ihre Nutzung optionaler Tools von Drittanbietern.

Die Nutzung von Ihnen angebotener optionaler Tools über die App erfolgt vollständig auf eigenes Risiko und nach eigenem Ermessen, und Sie sollten sicherstellen, dass Sie mit den Bedingungen vertraut sind und diesen zustimmen, unter denen die Tools von den jeweiligen Drittanbieter(n) bereitgestellt werden.

Wir können auch in Zukunft neue Dienste und/oder Funktionen über die App anbieten (einschließlich der Veröffentlichung neuer Tools und Ressourcen). Solche neuen Funktionen und/oder Dienste unterliegen ebenfalls diesen Nutzungsbedingungen.
## Links zu Drittanbieter

Bestimmte Inhalte, Produkte und Dienstleistungen, die über unseren Service verfügbar sind, können Materialien von Drittanbietern enthalten.

Links zu Drittanbieter-Websites und/oder -Apps auf dieser App können Sie zu Websites und/oder Apps von Drittanbietern führen, die nicht mit uns verbunden sind. Wir sind nicht verantwortlich für die Überprüfung oder Bewertung des Inhalts oder der Genauigkeit, und wir garantieren nicht und übernehmen keine Haftung oder Verantwortung für Materialien oder Apps von Drittanbietern oder für andere Materialien, Produkte oder Dienstleistungen von Drittanbietern.

Wir haften nicht für Schäden oder Verletzungen im Zusammenhang mit dem Kauf oder der Nutzung von Waren, Dienstleistungen, Ressourcen, Inhalten oder sonstigen Transaktionen, die im Zusammenhang mit Apps von Drittanbietern getätigt werden. Bitte überprüfen Sie sorgfältig die Richtlinien und Praktiken von Drittanbietern und stellen Sie sicher, dass Sie diese verstehen, bevor Sie eine Transaktion durchführen. Beschwerden, Ansprüche, Bedenken oder Fragen zu Produkten von Drittanbietern sollten an den Drittanbieter gerichtet werden.

## Benutzerkommentare, Feedback und andere Einsendungen

Wenn Sie auf unsere Bitte hin bestimmte spezifische Einsendungen (zum Beispiel Wettbewerbsbeiträge) senden oder ohne Aufforderung von uns kreative Ideen, Vorschläge, Pläne oder andere Materialien, ob online, per E-Mail, per Post oder auf andere Weise (zusammen "Kommentare") senden, stimmen Sie zu, dass wir jederzeit, ohne Einschränkung, Kommentare, die Sie uns zukommen lassen, bearbeiten, kopieren, veröffentlichen, verteilen, übersetzen und anderweitig in jedem Medium verwenden dürfen. Wir sind nicht verpflichtet (1) Kommentare vertraulich zu behandeln; (2) Entschädigung für Kommentare zu zahlen; oder (3) auf Kommentare zu antworten.

Wir können, sind jedoch nicht verpflichtet, Inhalte zu überwachen, zu bearbeiten oder zu entfernen, die unserer alleinigen Meinung nach rechtswidrig, beleidigend, bedrohlich, verleumderisch, diffamierend, pornografisch, obszön oder anderweitig anstößig sind oder Rechte an geistigem Eigentum oder diese Nutzungsbedingungen verletzen.

Sie stimmen zu, dass Ihre Kommentare keine Rechte Dritter verletzen werden, einschließlich Urheber-, Marken-, Privatsphäre-, Persönlichkeits- oder sonstiger persönlicher oder Eigentumsrechte. Sie stimmen weiterhin zu, dass Ihre Kommentare keine verleumderischen oder anderweitig rechtswidrigen, missbräuchlichen oder obszönen Materialien enthalten werden, oder Computerviren oder andere Malware enthalten, die die Funktionsweise des Dienstes oder einer damit verbundenen App in irgendeiner Weise beeinträchtigen könnten. Sie dürfen keine falsche E-Mail-Adresse verwenden, sich als jemand anderes ausgeben oder uns oder Drittanbieter in Bezug auf die Herkunft von Kommentaren irreführen. Sie sind allein verantwortlich für die von Ihnen gemachten Kommentare und deren Richtigkeit. Wir übernehmen keine Verantwortung und haften nicht für Kommentare, die von Ihnen oder einem Dritten veröffentlicht wurden.

## Persönliche Informationen

Die Übermittlung personenbezogener Daten über den Shop unterliegt unserer Datenschutzrichtlinie.

## Fehler, Ungenauigkeiten und Auslassungen

Gelegentlich können Informationen auf unserer App oder im Service Tippfehler, Ungenauigkeiten oder Auslassungen enthalten${when(conditions?.shop, ', die sich auf Produktbeschreibungen, Preise, Werbeaktionen, Angebote, Versandkosten für Produkte, Transitzeiten und Verfügbarkeit beziehen können')}. Wir behalten uns das Recht vor, Fehler, Ungenauigkeiten oder Auslassungen zu korrigieren und Informationen zu ändern oder zu aktualisieren${when(!conditions?.shop, ' oder Bestellungen zu stornieren')}, wenn Informationen im Service oder auf einer zugehörigen App zu einem beliebigen Zeitpunkt ungenau sind, ohne vorherige Ankündigung${when(!conditions?.shop, ' (einschließlich nachdem Sie Ihre Bestellung aufgegeben haben)')}.

Wir übernehmen keine Verpflichtung, Informationen im Service oder auf einer zugehörigen App zu aktualisieren, zu ändern oder zu klären${when(!conditions?.shop, ', einschließlich, jedoch nicht beschränkt auf Preisinformationen,')} außer wie gesetzlich vorgeschrieben. Ein bestimmtes Update- oder Aktualisierungsdatum, das im Service oder auf einer zugehörigen App angezeigt wird, darf nicht als Hinweis darauf verstanden werden, dass alle Informationen im Service oder auf einer zugehörigen App geändert oder aktualisiert wurden.

## Verbotene Verwendungen

Zusätzlich zu anderen Verboten gemäß den Nutzungsbedingungen ist es Ihnen untersagt, die App oder deren Inhalte zu verwenden: (a) für jegliche rechtswidrige Zwecke; (b) andere dazu aufzufordern, rechtswidrige Handlungen durchzuführen oder daran teilzunehmen; (c) gegen internationale, bundesstaatliche, landesrechtliche oder kommunale Vorschriften, Regeln, Gesetze oder örtliche Verordnungen zu verstoßen; (d) unsere geistigen Eigentumsrechte oder die geistigen Eigentumsrechte anderer zu verletzen; (e) zu belästigen, missbrauchen, beleidigen, schaden, verleumden, verunglimpfen, einschüchtern oder diskriminieren aufgrund von Geschlecht, sexueller Orientierung, Religion, Ethnizität, Rasse, Alter, nationaler Herkunft oder Behinderung; (f) falsche oder irreführende Informationen bereitzustellen; (g) Viren oder andere Arten von bösartigem Code hochzuladen oder zu übertragen, die auf irgendeine Weise die Funktionalität oder den Betrieb des Dienstes oder einer zugehörigen App, anderer Apps oder des Internets beeinträchtigen könnten; (h) personenbezogene Daten anderer zu sammeln oder zu verfolgen; (i) Spam zu versenden, zu fischen, zu pharmen, vorzutäuschen, zu spinnen, zu crawlen oder zu scrapen; (j) für einen obszönen oder unmoralischen Zweck; oder (k) die Sicherheitsfunktionen des Dienstes oder einer zugehörigen App, anderer Apps oder des Internets zu umgehen oder zu beeinträchtigen. Wir behalten uns das Recht vor, Ihre Nutzung des Dienstes oder einer zugehörigen App zu beenden, wenn Sie gegen eine der verbotenen Verwendungen verstoßen.

## Haftungsausschluss für Garantien; Haftungsbeschränkung

Wir garantieren nicht, vertreten oder gewährleisten, dass die Nutzung unseres Dienstes unterbrechungsfrei, rechtzeitig, sicher oder fehlerfrei ist.

Wir garantieren nicht, dass die Ergebnisse, die durch die Nutzung des Dienstes erzielt werden können, genau oder zuverlässig sind.

Sie erklären sich damit einverstanden, dass wir von Zeit zu Zeit den Dienst für unbestimmte Zeiträume oder jederzeit ohne vorherige Ankündigung stornieren können.

Sie erklären sich ausdrücklich damit einverstanden, dass Ihre Nutzung des Dienstes oder die Unfähigkeit, den Dienst zu nutzen, auf Ihr alleiniges Risiko geht. Der Dienst und alle Produkte und Dienstleistungen, die Ihnen über den Dienst geliefert werden, werden (sofern nicht ausdrücklich von uns angegeben) "wie besehen" und "wie verfügbar" für Ihre Nutzung bereitgestellt, ohne jegliche Darstellung, Gewährleistung oder Bedingung, sei es ausdrücklich oder stillschweigend, einschließlich aller stillschweigenden Gewährleistungen oder Bedingungen der Marktgängigkeit, der handelsüblichen Qualität, der Eignung für einen bestimmten Zweck, der Haltbarkeit, des Titels und der Nichtverletzung.

In keinem Fall haften ${company}, unsere Direktoren, leitenden Angestellten, Mitarbeiter, Partner, Vertreter, Auftragnehmer, Praktikanten, Lieferanten, Dienstleister oder Lizenzgeber für Verletzungen, Verluste, Ansprüche oder direkte, indirekte, zufällige, strafrechtliche, spezielle oder Folgeschäden jeglicher Art, einschließlich, aber nicht beschränkt auf entgangenen Gewinn, entgangene Einnahmen, entgangene Einsparungen, Verlust von Daten, Ersatzkosten oder ähnliche Schäden, unabhängig davon, ob sie auf Vertrag, unerlaubter Handlung (einschließlich Fahrlässigkeit), verschuldensunabhängiger Haftung oder anderweitig beruhen, die sich aus Ihrer Nutzung des Dienstes oder aus Produkten ergeben, die mithilfe des Dienstes erworben wurden, oder aus einem anderen Anspruch, der in irgendeiner Weise mit Ihrer Nutzung des Dienstes oder eines Produkts zusammenhängt, einschließlich, aber nicht beschränkt auf, Fehler oder Auslassungen in Inhalten oder Verlust oder Schäden jeglicher Art,

## Haftungsfreistellung

Sie erklären sich damit einverstanden, ${company} und unser Mutterunternehmen, Tochtergesellschaften, verbundene Unternehmen, Partner, leitende Angestellte, Direktoren, Vertreter, Auftragnehmer, Lizenzgeber, Dienstleister, Subunternehmer, Lieferanten, Praktikanten und Mitarbeiter von jeglichen Ansprüchen oder Forderungen, einschließlich angemessener Anwaltskosten, schadlos zu halten, die von Dritten aufgrund Ihrer Verletzung dieser Nutzungsbedingungen oder der darin durch Bezugnahme einbezogenen Dokumente oder Ihrer Verletzung von Gesetzen oder Rechten Dritter geltend gemacht werden.

## Teilunwirksamkeit

Sollte eine Bestimmung dieser Nutzungsbedingungen für ungültig, nichtig oder nicht durchsetzbar befunden werden, so bleibt diese Bestimmung dennoch in dem gesetzlich zulässigen Umfang durchsetzbar, und der unwirksame Teil wird von diesen Nutzungsbedingungen abgetrennt; diese Feststellung beeinträchtigt nicht die Gültigkeit und Durchsetzbarkeit der übrigen Bestimmungen.

## Kündigung

Die Verpflichtungen und Haftungen der Parteien, die vor dem Kündigungsdatum entstanden sind, bleiben für alle Zwecke auch nach Beendigung dieser Vereinbarung bestehen.

Diese Nutzungsbedingungen sind wirksam, sofern sie nicht von Ihnen oder uns gekündigt werden. Sie können diese Nutzungsbedingungen jederzeit kündigen, indem Sie uns mitteilen, dass Sie unsere Dienste nicht mehr nutzen möchten, oder wenn Sie aufhören, unsere App zu verwenden.

Falls Sie unserer alleinigen Einschätzung nach gegen eine Bestimmung dieser Nutzungsbedingungen verstoßen haben oder wir den Verdacht haben, dass Sie gegen eine Bestimmung dieser Nutzungsbedingungen verstoßen haben, können wir diese Vereinbarung jederzeit ohne Vorankündigung kündigen. In diesem Fall bleiben Sie für alle bis zum Kündigungsdatum fälligen Beträge haftbar, und/oder wir können Ihnen entsprechend den Zugriff auf unsere Dienste (oder einen Teil davon) verweigern.

## Gesamte Vereinbarung

Die Unterlassung von uns, ein Recht oder eine Bestimmung dieser Nutzungsbedingungen auszuüben oder durchzusetzen, stellt keinen Verzicht auf dieses Recht oder diese Bestimmung dar.

Diese Nutzungsbedingungen und alle von uns auf dieser App oder im Zusammenhang mit dem Service veröffentlichten Richtlinien oder Betriebsregeln stellen die gesamte Vereinbarung und das Verständnis zwischen Ihnen und uns dar und regeln Ihre Nutzung des Dienstes, wobei sie alle vorherigen oder gleichzeitigen Vereinbarungen, Mitteilungen und Vorschläge, ob mündlich oder schriftlich, zwischen Ihnen und uns (einschließlich, aber nicht beschränkt auf frühere Versionen der Nutzungsbedingungen) ersetzen.

Etwaige Unklarheiten bei der Auslegung dieser Nutzungsbedingungen sind nicht zu Lasten der verfassenden Partei auszulegen.
${when(country, `
## Rechtswahl

Diese Nutzungsbedingungen und alle separaten Vereinbarungen, durch die wir Ihnen Dienstleistungen anbieten, unterliegen den Gesetzen von ${country} und sind entsprechend auszulegen.
`)}
## Änderungen der Nutzungsbedingungen

Sie können jederzeit die aktuellste Version der Nutzungsbedingungen auf dieser Seite einsehen.

Wir behalten uns das Recht vor, nach unserem alleinigen Ermessen jeden Teil dieser Nutzungsbedingungen durch Veröffentlichung von Updates und Änderungen auf unserer App zu aktualisieren, zu ändern oder zu ersetzen. Es liegt in Ihrer Verantwortung, unsere App regelmäßig auf Änderungen zu überprüfen. Ihre fortgesetzte Nutzung oder Ihr Zugriff auf unsere App oder den Service nach der Veröffentlichung von Änderungen an diesen Nutzungsbedingungen stellt die Annahme dieser Änderungen dar.

## Lizenz
Sofern nicht anders angegeben, besitzen ${company} und/oder seine Lizenzgeber die geistigen Eigentumsrechte an allen Inhalten der App. Alle geistigen Eigentumsrechte bleiben vorbehalten. Sie dürfen diese von der App für Ihre persönliche Nutzung abrufen, unterliegen jedoch den in diesen Geschäftsbedingungen festgelegten Einschränkungen.

Sie dürfen nicht:
 - Material von ${appName} und anderen Diensten von ${company} erneut veröffentlichen
 - Material von ${appName} und anderen Diensten von ${company} verkaufen, vermieten oder unterlizenzieren
 - Material von ${appName} und anderen Diensten von ${company} vervielfältigen, duplizieren oder kopieren
 - Inhalte von ${appName} und anderen Diensten von ${company} neu verteilen

## Verlinkung auf unsere Inhalte
Folgende Organisationen dürfen ohne vorherige schriftliche Genehmigung auf unsere App verlinken:

 - Regierungsbehörden
 - Suchmaschinen
 - Nachrichtenorganisationen
 - Online-Verzeichnisanbieter dürfen auf dieselbe Weise auf unsere App verlinken, wie sie auf die Apps anderer gelisteter Unternehmen verlinken

Diese Organisationen dürfen auf unsere App verlinken, solange der Link: (a) in keiner Weise irreführend ist; (b) nicht fälschlicherweise eine Förderung, Genehmigung oder Billigung der verlinkenden Partei und ihrer Produkte und/oder Dienstleistungen impliziert; und (c) in den Kontext der Website und/oder App der verlinkenden Partei passt.

Wir können andere Linkanfragen von folgenden Arten von Organisationen prüfen und genehmigen:

 - allgemein bekannte Verbraucher- und/oder Geschäftsinformationsquellen
 - Websites der Dot-Com-Community
 - Verbände oder andere Gruppen, die Wohltätigkeitsorganisationen vertreten
 - Online-Verzeichnisanbieter
 - Internetportale
 - Wirtschaftsprüfungs-, Rechts- und Beratungsunternehmen
 - Bildungseinrichtungen und Handelsverbände

Wir werden Linkanfragen von diesen Organisationen genehmigen, wenn wir entscheiden, dass: (a) der Link uns nicht negativ darstellt oder unseren akkreditierten Unternehmen schadet; (b) die Organisation keine negativen Aufzeichnungen bei uns hat; (c) der Nutzen für uns aus der Sichtbarkeit des Hyperlinks den Mangel an ${company} ausgleicht; und (d) der Link im Kontext allgemeiner Ressourceninformationen steht.

Diese Organisationen dürfen auf unsere App verlinken, solange der Link: (a) in keiner Weise irreführend ist; (b) nicht fälschlicherweise eine Förderung, Genehmigung oder Billigung der verlinkenden Partei und ihrer Produkte und/oder Dienstleistungen impliziert; und (c) in den Kontext der Website und/oder App der verlinkenden Partei passt.

Wenn Sie eine der Organisationen sind, die in Absatz 2 oben aufgeführt sind und an einer Verlinkung auf unsere App interessiert sind, müssen Sie uns dies per E-Mail an [${email}](mailto:${email}) mitteilen. Bitte geben Sie Ihren Namen, den Namen Ihrer Organisation, Ihre Kontaktdaten sowie die URL Ihrer Website an.

Genehmigte Organisationen dürfen auf unsere App wie folgt verlinken:

 - Durch Verwendung unseres Dienstnamens
 - Durch Verwendung jeder anderen Beschreibung unserer App, auf die verlinkt wird, die im Kontext und im Format des Inhalts auf der Website der verlinkenden Partei Sinn macht.

Keine Verwendung des Logos oder anderer Grafiken von ${company} ist ohne eine Markenlizenzvereinbarung gestattet.

## Kontaktinformationen

Fragen zu den Nutzungsbedingungen senden Sie bitte an uns unter [${email}](mailto:${email}).
`.trim();

export default generator;
