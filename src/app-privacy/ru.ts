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
# Политика конфиденциальности
*Версия ${version}${when(updated, `, дата вступления в силу: ${updated}`)}.*

Эта Политика конфиденциальности описывает, как ваша Личная Информация собирается, используется и передается, когда вы используете${when(conditions?.shop, ' или совершаете покупку через')} ${appName} (далее «Приложение»).

## Собираемая нами личная информация

Когда вы используете Приложение, мы автоматически собираем определенную информацию о вашем устройстве, включая информацию об операционной системе, IP-адресе, часовом поясе и некоторых установленных на вашем устройстве средствах отслеживания. Кроме того, когда вы используете Приложение, мы собираем информацию о просмотрах отдельных страниц, о том, какие сайты или поисковые запросы привели вас к Приложению, и информацию о том, как вы взаимодействуете с Приложением. Мы называем эту автоматически собираемую информацию «Информация об устройстве».

### Мы собираем Информацию об устройстве${when(!conditions?.shop, ' (или Личную Информацию)')} с помощью следующих технологий:

 - «Лог-файлы» отслеживают действия, происходящие в Приложении, и собирают данные, включая ваш IP-адрес, тип устройства, интернет-провайдера, входные/выходные страницы и временные метки.
${when(conditions?.tracking, `
 - Файлы данных, которые размещаются на вашем устройстве или компьютере и часто включают анонимный уникальный идентификатор.
 - «Маяки», «теги» и «пиксели» — это электронные файлы, используемые для записи информации о том, как вы используете Приложение.
`.trim())}

${`
${when(conditions?.shop, 'Кроме того, когда вы совершаете покупку или пытаетесь совершить покупку через Приложение, мы собираем определенную информацию от вас, включая ваше имя, платежный адрес, адрес доставки, адрес электронной почты и номер телефона. Мы называем эту информацию «Информация о заказе.»')}
${when(conditions?.shop, 'Когда мы говорим о «Личной Информации» в этой Политике конфиденциальности, мы имеем в виду как Информацию об устройстве, так и Информацию о заказе.')}
`.trim()}

## Как мы используем вашу Личную Информацию?

${when(conditions?.shop, `
Мы используем Информацию о заказе, которую мы собираем, в общем для выполнения любых заказов, размещенных через Приложение (включая обработку вашей платежной информации, организацию доставки и предоставление вам счетов и/или подтверждений заказа). Кроме того, мы используем эту Информацию о заказе для:
 - Общения с вами;
 - Проверки наших заказов на предмет потенциальных рисков или мошенничества; и
 - Предоставления вам информации или рекламы, касающейся наших продуктов или услуг, в соответствии с вашими предпочтениями.
`)}
Мы используем Информацию об устройстве, которую мы собираем, чтобы помочь нам отслеживать потенциальные риски и мошенничество (в частности, ваш IP-адрес), и в общем для улучшения и оптимизации нашего Приложения (например, путем генерации аналитических данных о том, как наши пользователи просматривают и взаимодействуют с Приложением, и для оценки успешности наших маркетинговых и рекламных кампаний).

## Передача вашей Личной Информации

Мы передаем вашу Личную Информацию третьим лицам, чтобы помочь нам использовать вашу Личную Информацию, как описано выше. Например, мы используем хостинг-провайдера для поддержки наших серверов, используемых Приложением.

Мы также можем передавать вашу Личную Информацию для соблюдения применимых законов и нормативных актов, для ответа на повестку в суд, ордер на обыск или другой законный запрос о предоставлении информации, который мы получаем, или для защиты наших прав.
${when(conditions?.retargeting, `
## Поведенческая реклама
Как описано выше, мы используем вашу Личную Информацию для предоставления вам целевых рекламных объявлений или маркетинговых коммуникаций, которые, по нашему мнению, могут быть вам интересны. Для получения дополнительной информации о том, как работает целевая реклама, вы можете посетить образовательную страницу Network Advertising Initiative (NAI) по адресу http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.

Вы можете отказаться от целевой рекламы:
 - Facebook: https://www.facebook.com/settings/?tab=ads
 - Google: https://www.google.com/settings/ads/anonymous
 - Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads

Кроме того, вы можете отказаться от некоторых из этих услуг, посетив портал отказа от цифровой рекламы Digital Advertising Alliance по адресу: http://optout.aboutads.info/.
`)}
## Аналитика
Обратите внимание, что мы не изменяем наши методы сбора и использования данных Приложения при наличии сигнала "Не отслеживать" от вашей операционной системы.
${when(conditions?.gdpr, `
## Общий регламент защиты данных (GDPR)

Мы являемся Контролером данных вашей информации.

Правовое основание ${company} для сбора и использования личной информации, описанной в этой Политике конфиденциальности, зависит от собираемой нами Личной Информации и конкретного контекста, в котором мы ее собираем:

 - ${company} необходимо выполнять контракт с вами
 - Вы дали ${company} разрешение на это
 - Обработка вашей Личной Информации соответствует законным интересам ${company}
 - ${company} необходимо соблюдать закон

${company} будет хранить вашу Личную Информацию только до тех пор, пока это необходимо для целей, изложенных в этой Политике конфиденциальности. Мы будем хранить и использовать вашу информацию в той мере, в какой это необходимо для выполнения наших юридических обязательств, разрешения споров и обеспечения соблюдения наших политик.

Если вы являетесь резидентом Европы, мы отмечаем, что мы обрабатываем вашу информацию для выполнения контрактов, которые у нас могут быть с вами${when(conditions?.shop, ' (например, если вы делаете заказ через Сайт)')}, или иначе для преследования наших законных деловых интересов, указанных выше. Кроме того, обратите внимание, что ваша информация может быть передана за пределы Европы, включая Канаду и Соединенные Штаты.`)}
${when(conditions?.shop, `
## Сохранение данных
Когда вы размещаете заказ через Приложение, мы будем хранить вашу Информацию о заказе для наших записей, если и до тех пор, пока вы не попросите нас удалить эту информацию.
`)}
${when(minimumAge, `
## Ограничения по возрасту
Приложение не предназначено для лиц младше ${minimumAge} лет.
`)}
## Изменения
Мы можем периодически обновлять эту Политику конфиденциальности, чтобы отразить, например, изменения в наших практиках или по другим операционным, юридическим или нормативным причинам.

## Контакт
Для получения дополнительной информации о наших методах конфиденциальности, если у вас есть вопросы или если вы хотите подать жалобу, пожалуйста, свяжитесь с нами по электронной почте [${email}](mailto:${email}).
`.trim();

export default generator;