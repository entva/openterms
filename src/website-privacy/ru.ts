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
# Политика конфиденциальности
*Версия ${version}${when(updated, `, дата вступления в силу: ${updated}`)}.*

Эта Политика конфиденциальности описывает, как собирается, используется и передается ваша персональная информация, когда вы посещаете${when(conditions?.shop, ' или совершаете покупку на')} [${website}](${website}) (далее "Сайт").

## Личная информация, которую мы собираем

Когда вы посещаете Сайт, мы автоматически собираем определенную информацию о вашем устройстве, включая информацию о вашем веб-браузере, IP-адресе, часовой зоне и некоторые из установленных на вашем устройстве файлов cookie. Кроме того, когда вы просматриваете Сайт, мы собираем информацию об отдельных веб-страницах, которые вы просматриваете, о том, с каких веб-сайтов или поисковых запросов вы перешли на Сайт, а также, как вы взаимодействуете с Сайтом. Мы называем эту автоматически собираемую информацию "Информация об устройстве".

### Мы собираем информацию об устройстве${when(!conditions?.shop, ' (или Личную информацию)')} с использованием следующих технологий:

 - "Лог-файлы" отслеживают действия, происходящие на Сайте, и собирают данные, включая ваш IP-адрес, тип браузера, интернет-провайдера, страницы входа/выхода и метки даты/времени.
${when(conditions?.tracking, `
 - "Веб-маяки", "теги" и "пиксели" являются электронными файлами, используемыми для записи информации о том, как вы просматриваете Сайт.
`.trim())}

${`
${when(conditions?.shop, 'Кроме того, когда вы совершаете покупку или пытаетесь совершить покупку на Сайте, мы собираем определенную информацию о вас, включая ваше имя, адрес для выставления счета, адрес электронной почты и номер телефона. Мы называем эту информацию "Информация о заказе".')}
${when(conditions?.shop, 'Когда мы говорим о "Личной информации" в этой Политике конфиденциальности, мы имеем в виду как Информацию об устройстве, так и Информацию о заказе.')}
`.trim()}

## Как мы используем вашу личную информацию?

${when(conditions?.shop, `
Мы используем Информацию о заказе, которую мы собираем, в основном для выполнения любых заказов, размещенных через Сайт (включая обработку вашей платежной информации, организацию доставки и предоставление вам счетов и/или подтверждений заказов). Кроме того, мы используем эту Информацию о заказе для:
 - Общения с вами;
 - Проверки заказов на наличие потенциального риска или мошенничества;
 - В соответствии с вашими предпочтениями, предоставления вам информации или рекламы, касающейся наших продуктов или услуг.
`)}
Мы используем Информацию об устройстве, которую мы собираем, чтобы выявлять потенциальные риски и мошенничество (в частности, ваш IP-адрес), а также в более общем плане для улучшения и оптимизации нашего Сайта (например, путем генерации аналитических данных о том, как наши пользователи просматривают страницы и взаимодействуют с Сайтом, и для оценки успеха наших маркетинговых и рекламных кампаний).

## Передача вашей личной информации

Мы делимся вашей Личной информацией с третьими сторонами, чтобы обеспечить выполнение заказанных вами обязательств. Например, мы используем хостинг-провайдера для обеспечения работы нашего веб-сайта.
Мы также можем передавать вашу Личную информацию для соблюдения применимых законов и нормативных актов, чтобы ответить на повестку в суд, ордер на обыск или другой законный запрос о предоставлении информации, который мы получаем, или чтобы защитить наши права.

${when(conditions?.retargeting, `
## Поведенческая реклама
Как описано выше, мы используем вашу Личную информацию для предоставления вам целевых рекламных объявлений или маркетинговых коммуникаций, которые, по нашему мнению, могут вас заинтересовать. Для получения дополнительной информации о том, как работает целевая реклама, вы можете посетить образовательную страницу Network Advertising Initiative (NAI) по адресу http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.

Вы можете отказаться от целевой рекламы, перейдя по следующим ссылкам:
 - Facebook: https://www.facebook.com/settings/?tab=ads
 - Google: https://www.google.com/settings/ads/anonymous
 - Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads

Кроме того, вы можете отказаться от некоторых из этих услуг, посетив портал отказа от Digital Advertising Alliance по адресу: http://optout.aboutads.info/.
`)}
## Аналитика
Обратите внимание, что мы не изменяем наши методы сбора и использования данных на Сайте, когда видим сигнал Do Not Track от вашего браузера.
${when(conditions?.gdpr, `
## Общий регламент по защите данных (GDPR)

Мы являемся контролером данных вашей информации.

Правовое основание ${company} для сбора и использования личной информации, описанной в этой Политике конфиденциальности, зависит от Личной информации, которую мы собираем, и конкретного контекста, в котором мы ее собираем:

 - ${company} необходимо выполнить контракт с вами,
 - Вы дали ${company} разрешение на это
 - Обработка вашей личной информации отвечает законным интересам ${company},
 - ${company} необходимо соблюдать закон

${company} будет хранить вашу личную информацию только столько времени, сколько необходимо для целей, изложенных в этой Политике конфиденциальности. Мы будем хранить и использовать вашу информацию в той мере, в какой это необходимо для соблюдения наших юридических обязательств, разрешения споров и обеспечения соблюдения наших политик.

Если вы являетесь резидентом Европы, мы отмечаем, что обрабатываем вашу информацию, чтобы выполнять контракты, которые у нас могут быть с вами${when(conditions?.shop, ' (например, если вы делаете заказ через Сайт)')}, или иным образом для преследования наших законных деловых интересов, перечисленных выше. Кроме того, обратите внимание, что ваша информация может быть передана за пределы Европы, включая Канаду и Соединенные Штаты.`)}
${when(conditions?.shop, `
## Хранение данных
Когда вы размещаете заказ на Сайте, мы будем хранить Информацию о заказе для наших записей, если и до тех пор, пока вы не попросите нас удалить эту информацию.
`)}
${when(minimumAge, `
## Возрастные ограничения
Сайт не предназначен для лиц моложе ${minimumAge} лет.
`)}
## Изменения
Мы можем обновлять эту Политику конфиденциальности время от времени, чтобы отражать, например, изменения в нашей практике или по другим операционным, юридическим или нормативным причинам.

## Свяжитесь с нами
Для получения дополнительной информации о нашей практике конфиденциальности, если у вас есть вопросы или если вы хотите подать жалобу, пожалуйста, свяжитесь с нами по электронной почте: [${email}](mailto:${email}).
`.trim();

export default generator;
