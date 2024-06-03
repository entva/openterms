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
# Allgemeine Geschäftsbedingungen
*Version ${version}${when(updated, ` vom ${updated}`)}.*

## Übersicht

Diese Website wird von der ${company} betrieben. Auf der gesamten Website beziehen sich die Begriffe "wir", "uns" und "unser" auf die ${company}. Die ${company} bietet diese Website, einschließlich aller Informationen, Tools und Dienste, die auf dieser Website verfügbar sind, für Sie als Nutzer an, sofern Sie alle hier aufgeführten Bedingungen, Konditionen, Richtlinien und Hinweise akzeptieren.

Durch den Besuch unserer Website${when(conditions?.shop, ' und/oder den Kauf von etwas bei uns')} nutzen Sie unseren "Service" und stimmen zu, durch die folgenden Bedingungen und Konditionen ("AGB", "Bedingungen") gebunden zu sein, einschließlich der zusätzlichen Bedingungen und Konditionen und Richtlinien, auf die hier Bezug genommen wird und/oder die per Hyperlink verfügbar sind. Diese AGB gelten für alle Benutzer der Website, einschließlich, ohne Einschränkung, Benutzer, die Browser, Anbieter, Kunden, Händler und/oder Beitragende von Inhalten sind.

Bitte lesen Sie diese AGB sorgfältig durch, bevor Sie unsere Website aufrufen oder nutzen. Durch den Zugriff auf oder die Nutzung eines Teils der Website erklären Sie sich damit einverstanden, an diese AGB gebunden zu sein. Wenn Sie mit allen Bedingungen und Konditionen dieser Vereinbarung nicht einverstanden sind, dürfen Sie nicht auf die Website zugreifen oder irgendwelche Dienste nutzen. Wenn diese AGB als Angebot betrachtet werden, ist die Annahme ausdrücklich auf diese AGB beschränkt.

Alle neuen Funktionen oder Tools, die der aktuellen Website hinzugefügt werden, unterliegen ebenfalls den AGB. Sie können die aktuellste Version der AGB jederzeit auf dieser Seite einsehen. Wir behalten uns das Recht vor, jeden Teil dieser AGB durch Veröffentlichung von Aktualisierungen und/oder Änderungen auf unserer Website zu aktualisieren, zu ändern oder zu ersetzen. Es liegt in Ihrer Verantwortung, diese Seite regelmäßig auf Änderungen zu überprüfen. Ihre fortgesetzte Nutzung oder Ihr Zugriff auf die Website nach der Veröffentlichung von Änderungen stellt die Annahme dieser Änderungen dar.

## Servicebedingungen

Durch die Zustimmung zu diesen AGB erklären Sie, dass Sie mindestens das Alter der Volljährigkeit in Ihrem Bundesland oder Ihrer Provinz erreicht haben oder dass Sie das Alter der Volljährigkeit in Ihrem Bundesland oder Ihrer Provinz erreicht haben und uns Ihre Zustimmung gegeben haben, damit Minderjährige in Ihrem Haushalt diese Website nutzen können.

Sie dürfen unsere Produkte oder Dienstleistungen nicht für einen illegalen oder unbefugten Zweck verwenden, noch dürfen Sie, bei der Nutzung des Dienstes, gegen Gesetze in Ihrer Gerichtsbarkeit verstoßen (einschließlich, aber nicht beschränkt auf Urheberrechtsbestimmungen).

Sie dürfen keine schädliche Software oder einen Code von zerstörerischer Natur übertragen.

Ein Verstoß gegen eine der Bedingungen führt zu einer sofortigen Beendigung unserer Dienste an Sie.

## Allgemeine Bedingungen

Wir behalten uns das Recht vor, jedem aus jedem Grund und zu jeder Zeit den Service zu verweigern.

Sie verstehen, dass Ihre Inhalte${when(conditions?.shop, ' (ohne Kreditkarteninformationen)')}, möglicherweise unverschlüsselt übertragen werden und (a) Übertragungen über verschiedene Netzwerke umfassen; und (b) Änderungen zur Konformität und Anpassung an die technischen Anforderungen von Verbindungsnetzwerken oder Geräten umfassen.${when(conditions?.shop, ' Kreditkarteninformationen werden während der Übertragung über Netzwerke immer verschlüsselt.')}

Sie erklären sich damit einverstanden, keinen Teil des Dienstes, die Nutzung des Dienstes oder den Zugriff auf den Dienst oder jeglichen Kontakt auf der Website, über den der Service bereitgestellt wird, ohne ausdrückliche schriftliche Genehmigung durch uns zu reproduzieren, zu duplizieren, zu kopieren, zu verkaufen, weiterzuverkaufen oder zu nutzen.

Die in dieser Vereinbarung verwendeten Überschriften dienen nur der Bequemlichkeit und beeinträchtigen oder berühren diese Bedingungen nicht anderweitig.

## Richtigkeit, Vollständigkeit und Aktualität der Informationen

Wir übernehmen keine Verantwortung dafür, dass Informationen auf dieser Website oder über unseren Service nicht korrekt, vollständig oder aktuell sind. Das Material auf dieser Website oder über unsere Dienste wird nur zu allgemeinen Informationszwecken bereitgestellt und sollte nicht als alleinige Grundlage für Entscheidungen herangezogen oder verwendet werden, ohne primäre, genauere, vollständigere oder zeitgerechtere Informationsquellen zu konsultieren. Jedes Vertrauen in das Material auf dieser Website oder über unsere Dienste erfolgt auf Ihr eigenes Risiko.

Diese Website kann bestimmte historische Informationen enthalten. Historische Informationen sind notwendigerweise nicht aktuell und werden nur zu Ihrer Referenz bereitgestellt. Wir behalten uns das Recht vor, den Inhalt dieser Website jederzeit zu ändern, aber wir haben keine Verpflichtung, Informationen auf unserer Website zu aktualisieren. Sie erklären sich damit einverstanden, dass es Ihre Verantwortung ist, Änderungen auf unserer Website zu überwachen.

## Änderungen am Service

${when(conditions?.shop, 'Preise für unsere Produkte können sich jederzeit ohne Vorankündigung ändern.\n\n')}Wir behalten uns das Recht vor, den Service (oder Teile oder Inhalte davon) jederzeit ohne Vorankündigung zu ändern oder einzustellen.

Wir haften Ihnen oder Dritten nicht für Änderungen${when(conditions?.shop, ', Preisänderungen')}, Aussetzungen oder Einstellungen des Dienstes.

${when(conditions?.shop, `

## Produkte oder Dienstleistungen

Bestimmte Produkte oder Dienstleistungen können ausschließlich online über die Website erhältlich sein. Diese Produkte oder Dienstleistungen können begrenzte Mengen haben und unterliegen nur gemäß unserer Rückgaberichtlinie einer Rückgabe oder Umtausch.

Wir behalten uns das Recht vor, den Verkauf unserer Produkte oder Dienstleistungen auf jede Person, geografische Region oder Gerichtsbarkeit zu beschränken, sind jedoch nicht dazu verpflichtet. Wir können dieses Recht von Fall zu Fall ausüben. Wir behalten uns das Recht vor, die Mengen aller von uns angebotenen Produkte oder Dienstleistungen zu begrenzen. Alle Beschreibungen von Produkten oder Produktkosten können jederzeit ohne Vorankündigung nach unserem alleinigen Ermessen geändert werden. Wir behalten uns das Recht vor, jedes Produkt oder jede Dienstleistung jederzeit einzustellen. Jedes Angebot für ein Produkt oder eine Dienstleistung auf dieser Website ist ungültig, wo gesetzlich verboten.

Wir garantieren nicht, dass die Qualität von Produkten, Dienstleistungen, Informationen oder anderen Materialien, die Sie erwerben oder erhalten, Ihren Erwartungen entspricht, oder dass Fehler im Service behoben werden.

## Rückgaberichtlinie

Wir bieten im Allgemeinen keine Rückerstattungen für unsere digitalen Dienstleistungen an. Aufgrund der Vorbereitungsarbeiten, die vor der Erbringung der Dienstleistung erforderlich sind, gilt eine gekaufte Dienstleistung als verbraucht, und es wird keine Rückerstattung gewährt.

Kunden müssen Stornierungen über unseren festgelegten Stornierungsprozess gemäß der in der Buchungsbestätigungs-E-Mail angegebenen oder durch direkte Kontaktaufnahme mit uns per E-Mail: ${email} initiieren. Bitte geben Sie relevante Details an und halten Sie sich an die angegebenen Fristen für die Berechtigung.

## Richtigkeit von Abrechnungs- und Kontoinformationen

Wir behalten uns das Recht vor, jede Bestellung, die Sie bei uns aufgeben, abzulehnen. Wir können nach eigenem Ermessen die pro Person, pro Haushalt oder pro Bestellung gekauften Mengen begrenzen oder stornieren. Diese Einschränkungen können Bestellungen umfassen, die unter demselben Kundenkonto, derselben Kreditkarte und/oder Bestellungen platziert wurden, die dieselbe Rechnungs- und/oder Versandadresse verwenden. Im Falle einer Änderung oder Stornierung einer Bestellung werden wir möglicherweise versuchen, Sie zu benachrichtigen, indem wir die E-Mail- und/oder Rechnungsadresse/Telefonnummer kontaktieren, die zum Zeitpunkt der Bestellung angegeben wurden. Wir behalten uns das Recht vor, Bestellungen zu beschränken oder zu verbieten, die unserer alleinigen Meinung nach von Händlern, Wiederverkäufern oder Distributoren platziert wurden.

Sie erklären sich damit einverstanden, dass Sie aktuelle, vollständige und genaue Kauf- und Kontoinformationen für alle Einkäufe auf unserer Website bereitstellen. Sie erklären sich damit einverstanden, Ihr Konto und andere Informationen, einschließlich Ihrer E-Mail-Adresse und Kreditkartennummern und Ablaufdaten, unverzüglich zu aktualisieren, damit wir Ihre Transaktionen abschließen und Sie bei Bedarf kontaktieren können.
`.trim())}

## Optionale Tools

Wir können Ihnen Zugang zu Tools von Drittanbietern gewähren, über die wir weder die Überwachung noch die Kontrolle noch den Input haben.

Sie erkennen an und stimmen zu, dass wir den Zugang zu solchen Tools "wie besehen" und "wie verfügbar" ohne jegliche Garantien, Darstellungen oder Bedingungen jeglicher Art und ohne jegliche Billigung gewähren. Wir haften in keiner Weise für Ihre Nutzung optionaler Tools von Drittanbietern.

Die Nutzung von optionalen Tools, die über die Website angeboten werden, erfolgt vollständig auf Ihr eigenes Risiko und Ihre eigene Diskretion, und Sie sollten sicherstellen, dass Sie mit den Bedingungen vertraut sind und diesen zustimmen, unter denen Tools von den jeweiligen Drittanbieter(n) bereitgestellt werden.

Wir können auch in Zukunft neue Dienste und/oder Funktionen über die Website anbieten (einschließlich der Veröffentlichung neuer Tools und Ressourcen). Solche neuen Funktionen und/oder Dienste unterliegen ebenfalls diesen AGB.

## Links zu Drittanbietern

Bestimmte Inhalte, Produkte und Dienstleistungen, die über unseren Service verfügbar sind, können Materialien von Drittanbietern enthalten.

Links zu Drittanbieter-Websites auf dieser Website können Sie auf Websites von Drittanbietern weiterleiten, die nicht mit uns verbunden sind. Wir sind nicht verantwortlich für die Prüfung oder Bewertung des Inhalts oder die Genauigkeit, und wir geben keine Garantie und übernehmen keine Haftung oder Verantwortung für Materialien oder Websites von Drittanbietern oder für andere Materialien, Produkte oder Dienstleistungen von Drittanbietern.

Wir haften nicht für Schäden oder Verluste, die im Zusammenhang mit dem Kauf oder der Nutzung von Waren, Dienstleistungen, Ressourcen, Inhalten oder anderen Transaktionen stehen, die im Zusammenhang mit Websites von Drittanbietern getätigt werden. Bitte überprüfen Sie sorgfältig die Richtlinien und Praktiken von Drittanbietern und stellen Sie sicher, dass Sie sie verstehen, bevor Sie eine Transaktion eingehen. Beschwerden, Ansprüche, Bedenken oder Fragen zu Produkten von Drittanbietern sollten direkt an den Drittanbieter gerichtet werden.

## Benutzerkommentare, Feedback und andere Einreichungen

Wenn Sie auf unsere Anfrage bestimmte spezifische Einreichungen (zum Beispiel Wettbewerbsbeiträge) senden oder ohne eine Anfrage von uns kreative Ideen, Vorschläge, Angebote, Pläne oder andere Materialien, ob online, per E-Mail, per Post oder auf andere Weise (zusammen "Kommentare"), stimmen Sie zu, dass wir jederzeit ohne Einschränkung, bearbeiten, kopieren, veröffentlichen, verteilen, übersetzen und anderweitig in jedem Medium verwenden können alle Kommentare, die Sie uns übermitteln. Wir sind nicht verpflichtet (1) Kommentare vertraulich zu behandeln; (2) eine Entschädigung für Kommentare zu zahlen; oder (3) auf Kommentare zu antworten.

Wir können, sind aber nicht verpflichtet, Inhalte zu überwachen, zu bearbeiten oder zu entfernen, die wir nach unserem alleinigen Ermessen für rechtswidrig, beleidigend, bedrohlich, verleumderisch, diffamierend, pornografisch, obszön oder anderweitig anstößig oder für Verstöße gegen das geistige Eigentum einer Partei oder diese AGB halten.

Sie stimmen zu, dass Ihre Kommentare keine Rechte Dritter verletzen werden, einschließlich Urheberrechten, Markenrechten, Datenschutzrechten, Persönlichkeitsrechten oder anderen persönlichen oder Eigentumsrechten. Sie stimmen weiterhin zu, dass Ihre Kommentare keine diffamierenden oder anderweitig rechtswidrigen, missbräuchlichen oder obszönen Materialien enthalten oder keine Computerviren oder andere Schadsoftware enthalten, die die Funktionalität oder den Betrieb des Dienstes oder einer verwandten Website auf irgendeine Weise beeinträchtigen könnten. Sie dürfen keine falsche E-Mail-Adresse verwenden, sich nicht als jemand anderes ausgeben oder uns oder Dritte anderweitig über die Herkunft von Kommentaren täuschen. Sie sind allein verantwortlich für alle von Ihnen gemachten Kommentare und deren Richtigkeit. Wir übernehmen keine Verantwortung und übernehmen keine Haftung für Kommentare, die von Ihnen oder einem Dritten veröffentlicht werden.

## Persönliche Informationen

Die Übermittlung persönlicher Informationen durch den Shop unterliegt unserer Datenschutzrichtlinie.

## Fehler, Ungenauigkeiten und Auslassungen

Gelegentlich können Informationen auf unserer Website oder im Dienst Fehler, Ungenauigkeiten oder Auslassungen enthalten${when(conditions?.shop, ', die sich auf Produktbeschreibungen, Preise, Werbeaktionen, Angebote, Versandkosten, Transitzeiten und Verfügbarkeit beziehen können')}. Wir behalten uns das Recht vor, Fehler, Ungenauigkeiten oder Auslassungen zu korrigieren und Informationen${when(!conditions?.shop, ' zu ändern oder Bestellungen zu stornieren')}, wenn Informationen im Dienst oder auf einer verwandten Website zu einem beliebigen Zeitpunkt ungenau sind, ohne vorherige Ankündigung${when(!conditions?.shop, ' (auch nachdem Sie Ihre Bestellung aufgegeben haben)')}.

Wir übernehmen keine Verpflichtung, Informationen im Dienst oder auf einer verwandten Website zu aktualisieren, zu ändern oder zu klären${when(!conditions?.shop, ', einschließlich Preisinformationen,')} außer wie gesetzlich vorgeschrieben. Ein bestimmtes Aktualisierungs- oder Aktualisierungsdatum, das im Dienst oder auf einer verwandten Website angewendet wird, sollte nicht als Hinweis darauf angesehen werden, dass alle Informationen im Dienst oder auf einer verwandten Website geändert oder aktualisiert wurden.

## Verbotene Verwendungen

Zusätzlich zu anderen Verboten gemäß den AGB ist es untersagt, die Website oder deren Inhalt zu verwenden: (a) für jegliche rechtswidrige Zwecke; (b) um andere zur Durchführung oder Teilnahme an rechtswidrigen Handlungen zu bewegen oder aufzufordern; (c) um internationale, bundesstaatliche, provinzielle oder staatliche Vorschriften, Regeln, Gesetze oder örtliche Verordnungen zu verletzen; (d) um unsere Rechte an geistigem Eigentum oder die Rechte anderer zu verletzen; (e) um aufgrund von Geschlecht, sexueller Orientierung, Religion, Ethnizität, Rasse, Alter, nationaler Herkunft oder Behinderung zu belästigen, zu missbrauchen, zu beleidigen, zu schädigen, zu diffamieren, zu verleumden, zu verunglimpfen, zu bedrohen oder zu diskriminieren; (f) um falsche oder irreführende Informationen zu übermitteln; (g) um Viren oder andere Arten von bösartigem Code hochzuladen oder zu übertragen, die auf irgendeine Weise die Funktionalität oder den Betrieb des Dienstes oder einer verwandten Website, anderer Websites oder des Internets beeinträchtigen können; (h) um persönliche Informationen anderer zu sammeln oder zu verfolgen; (i) um zu spammen, zu phishen, zu farmen, zu pretexten, zu spidern, zu crawlen oder zu scrapen; (j) für jegliche obszöne oder unmoralische Zwecke; oder (k) um die Sicherheitsmerkmale des Dienstes oder einer verwandten Website, anderer Websites oder des Internets zu umgehen oder zu beeinträchtigen. Wir behalten uns das Recht vor, Ihre Nutzung des Dienstes oder einer verwandten Website zu beenden, wenn Sie gegen eine der untersagten Verwendungen verstoßen.

## Haftungsausschluss; Haftungsbeschränkung

Wir garantieren, vertreten oder gewährleisten nicht, dass Ihre Nutzung unseres Dienstes unterbrechungsfrei, rechtzeitig, sicher oder fehlerfrei sein wird.

Wir garantieren nicht, dass die Ergebnisse, die aus der Nutzung des Dienstes erzielt werden können, genau oder zuverlässig sind.

Sie erklären sich damit einverstanden, dass wir von Zeit zu Zeit den Dienst für unbestimmte Zeit entfernen oder den Dienst jederzeit ohne Benachrichtigung an Sie kündigen können.

Sie erklären sich ausdrücklich damit einverstanden, dass Ihre Nutzung des Dienstes oder Ihre Unfähigkeit, den Dienst zu nutzen, auf Ihr alleiniges Risiko erfolgt. Der Dienst und alle Produkte und Dienstleistungen, die Ihnen über den Dienst geliefert werden (außer wie von uns ausdrücklich angegeben), werden "wie besehen" und "wie verfügbar" zur Verfügung gestellt, ohne jegliche Zusicherung, Garantien oder Bedingungen jeglicher Art, sei es ausdrücklich oder stillschweigend, einschließlich aller stillschweigenden Garantien oder Bedingungen der Marktgängigkeit, der handelsüblichen Qualität, der Eignung für einen bestimmten Zweck, der Haltbarkeit, des Titels und der Nichtverletzung.

In keinem Fall haften die ${company}, unsere Direktoren, leitenden Angestellten, Mitarbeiter, verbundenen Unternehmen, Agenten, Auftragnehmer, Praktikanten, Lieferanten, Dienstleister oder Lizenzgeber für Verletzungen, Verluste, Ansprüche oder direkte, indirekte, zufällige, strafende, spezielle oder Folgeschäden jeglicher Art, einschließlich, aber nicht beschränkt auf entgangene Gewinne, entgangene Einnahmen, entgangene Einsparungen, Verlust von Daten, Ersatzkosten oder ähnliche Schäden, unabhängig davon, ob sie auf Vertrag, unerlaubter Handlung (einschließlich Fahrlässigkeit), verschuldensunabhängiger Haftung oder anderweitig beruhen, die sich aus Ihrer Nutzung eines Teils des Dienstes oder der über den Dienst erworbenen Produkte oder Dienstleistungen ergeben, oder aus einem anderen Anspruch in irgendeiner Weise im Zusammenhang mit Ihrer Nutzung des Dienstes oder eines Produkts stehen, einschließlich, aber nicht beschränkt auf Fehler oder Auslassungen in Inhalten oder jeglichen Verlust oder Schaden jeglicher Art, der sich aus der Nutzung des Dienstes oder der über den Dienst bereitgestellten Inhalte (oder Produkte) ergibt, sei es durch Veröffentlichung, Übertragung oder auf andere Weise, auch wenn auf die Möglichkeit solcher Schäden hingewiesen wurde. Da einige Staaten oder Rechtsordnungen den Ausschluss oder die Beschränkung der Haftung für Folge- oder Nebenschäden nicht zulassen, können sich diese Ausschlüsse oder Beschränkungen möglicherweise nicht auf Sie beziehen. In solchen Staaten oder Rechtsordnungen ist unsere Haftung auf das gesetzlich zulässige Höchstmaß beschränkt.

## Haftungsfreistellung

Sie erklären sich damit einverstanden, die ${company} und unser Mutterunternehmen, Tochtergesellschaften, verbundenen Unternehmen, Partner, leitende Angestellte, Direktoren, Agenten, Auftragnehmer, Lizenzgeber, Dienstleister, Subunternehmer, Lieferanten, Praktikanten und Mitarbeiter von jeglichen Ansprüchen oder Forderungen, einschließlich angemessener Anwaltskosten, schadlos zu halten, die von Dritten aufgrund oder im Zusammenhang mit Ihrem Verstoß gegen diese AGB oder der Dokumente, auf die sie Bezug nehmen, oder Ihrer Verletzung eines Gesetzes oder der Rechte Dritter entstehen.

## Teilungültigkeit

Sollte eine Bestimmung dieser AGB für ungültig, nichtig oder nicht durchsetzbar befunden werden, so bleibt diese Bestimmung dennoch in dem durch anwendbares Recht maximal zulässigen Umfang gültig und durchsetzbar, und der ungültige Teil wird von diesen AGB abgetrennt. Diese Feststellung beeinträchtigt nicht die Gültigkeit und Durchsetzbarkeit der übrigen Bestimmungen.

## Kündigung

Die Verpflichtungen und Haftungen der Parteien, die vor dem Kündigungsdatum eingegangen wurden, überdauern die Beendigung dieses Vertrags zu allen Zwecken.

Diese AGB bleiben wirksam, sofern sie nicht von Ihnen oder von uns gekündigt werden. Sie können diese AGB jederzeit kündigen, indem Sie uns benachrichtigen, dass Sie unsere Dienste nicht mehr nutzen möchten, oder wenn Sie die Nutzung unserer Website einstellen.

Wenn Sie unserer alleinigen Einschätzung nach gegen eine Bestimmung oder Bedingung dieser AGB verstoßen oder wir vermuten, dass Sie gegen eine Bestimmung oder Bedingung dieser AGB verstoßen haben, können wir diese Vereinbarung jederzeit ohne Vorankündigung kündigen, und Sie haften weiterhin für alle bis zum Kündigungsdatum fälligen Beträge; und/oder wir können Ihnen den Zugang zu unseren Dienstleistungen (oder einem Teil davon) verweigern.

## Gesamte Vereinbarung

Das Unterlassen unsererseits, ein Recht oder eine Bestimmung dieser AGB auszuüben oder durchzusetzen, stellt keinen Verzicht auf dieses Recht oder diese Bestimmung dar.

Diese AGB und alle von uns auf dieser Website veröffentlichten Richtlinien oder Betriebsregeln oder in Bezug auf den Dienst stellen die gesamte Vereinbarung und das Verständnis zwischen Ihnen und uns dar und regeln Ihre Nutzung des Dienstes, wobei sie alle vorherigen oder gleichzeitigen Vereinbarungen, Mitteilungen und Vorschläge, ob mündlich oder schriftlich, zwischen Ihnen und uns außer Kraft setzen (einschließlich, aber nicht beschränkt auf frühere Versionen der AGB).

Unklarheiten bei der Auslegung dieser AGB dürfen nicht gegen die erstellende Partei ausgelegt werden.
${when(country, `
## Geltendes Recht

Diese AGB und alle separaten Vereinbarungen, durch die wir Ihnen Dienstleistungen anbieten, unterliegen den Gesetzen von ${country} und sind entsprechend auszulegen.
`)}
## Änderungen der AGB

Sie können jederzeit die aktuellste Version der AGB auf dieser Seite einsehen.

Wir behalten uns das Recht vor, nach unserem alleinigen Ermessen jeden Teil dieser AGB durch Veröffentlichung von Aktualisierungen und Änderungen auf unserer Website zu aktualisieren, zu ändern oder zu ersetzen. Es liegt in Ihrer Verantwortung, unsere Website regelmäßig auf Änderungen zu überprüfen. Ihre fortgesetzte Nutzung oder Ihr Zugriff auf unsere Website oder den Dienst nach der Veröffentlichung von Änderungen dieser AGB stellt die Annahme dieser Änderungen dar.

## Lizenz

Sofern nicht anders angegeben, besitzen die ${company} und/oder seine Lizenzgeber die geistigen Eigentumsrechte an allen Materialien auf der Website. Alle geistigen Eigentumsrechte sind vorbehalten. Sie dürfen auf diese Website für Ihren persönlichen Gebrauch zugreifen, der in diesen AGB festgelegten Einschränkungen unterliegt.

Sie dürfen nicht:
 - Material von ${website} und anderen Diensten von der ${company} erneut veröffentlichen
 - Material von ${website} und anderen Diensten von der ${company} verkaufen, vermieten oder unterlizenzieren
 - Material von ${website} und anderen Diensten von der ${company} vervielfältigen, duplizieren oder kopieren
 - Inhalte von ${website} und anderen Diensten von der ${company} umverteilen

## Verlinkung auf unsere Inhalte

Die folgenden Organisationen dürfen ohne vorherige schriftliche Genehmigung auf unsere Website verlinken:

 - Regierungsbehörden
 - Suchmaschinen
 - Nachrichtenorganisationen
 - Online-Verzeichnisvertriebe dürfen auf dieselbe Weise auf unsere Website verlinken, wie sie zu den Websites anderer aufgelisteter Unternehmen verlinken

Diese Organisationen dürfen auf unsere Homepage, Publikationen oder andere Website-Informationen verlinken, solange der Link: (a) in keiner Weise irreführend ist; (b) keine falsche Sponsorship, Befürwortung oder Genehmigung der verlinkenden Partei und ihrer Produkte und/oder Dienstleistungen impliziert; und (c) in den Kontext der Website der verlinkenden Partei passt.

Wir können andere Linkanfragen von den folgenden Arten von Organisationen prüfen und genehmigen:

 - allgemein bekannte Verbraucher- und/oder Geschäftsinformationsquellen
 - Dot.com-Community-Websites
 - Vereine oder andere Gruppen, die Wohltätigkeitsorganisationen vertreten
 - Online-Verzeichnisvertriebe
 - Internetportale
 - Buchhaltungs-, Rechts- und Beratungsunternehmen
 - Bildungseinrichtungen und Handelsverbände

Wir werden Linkanfragen von diesen Organisationen genehmigen, wenn wir feststellen, dass: (a) der Link uns oder unseren akkreditierten Unternehmen nicht nachteilig erscheinen lässt; (b) die Organisation keine negativen Aufzeichnungen bei uns hat; (c) der Nutzen für uns aus der Sichtbarkeit des Hyperlinks den Mangel an die ${company} ausgleicht; und (d) der Link im Kontext allgemeiner Informationsressourcen steht.

Diese Organisationen dürfen auf unsere Homepage verlinken, solange der Link: (a) in keiner Weise irreführend ist; (b) keine falsche Sponsorship, Befürwortung oder Genehmigung der verlinkenden Partei und ihrer Produkte oder Dienstleistungen impliziert; und (c) im Kontext der Website der verlinkenden Partei steht.

Wenn Sie eine der in Absatz 2 aufgeführten Organisationen sind und daran interessiert sind, auf unsere Website zu verlinken, müssen Sie uns per E-Mail an [${email}](mailto:${email}) informieren. Bitte geben Sie Ihren Namen, den Namen Ihrer Organisation, Ihre Kontaktinformationen sowie die URL Ihrer Website an, eine Liste aller URLs, von denen aus Sie auf unsere Website verlinken möchten, und eine Liste der URLs auf unserer Website, auf die Sie verlinken möchten.

Genehmigte Organisationen dürfen auf unsere Website wie folgt verlinken:

 - Durch Verwendung unseres Dienstnamens
 - Durch Verwendung der Uniform Resource Locator, die verlinkt wird
 - Durch Verwendung einer anderen Beschreibung unserer Website, die im Kontext und im Format des Inhalts auf der Website der verlinkenden Partei Sinn macht.

Ohne vorherige Genehmigung und schriftliche Erlaubnis dürfen Sie keine Rahmen um unsere Webseiten erstellen.

Die Verwendung des Logos oder anderer Grafiken von der ${company} für Verlinkungen ist ohne Markenlizenzvereinbarung nicht gestattet.

## Kontaktinformationen

Fragen zu den AGB sollten an uns gesendet werden an [${email}](mailto:${email}).
`.trim();

export default generator;
