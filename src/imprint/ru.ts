import { when } from '../utils';
import type { Options } from './types';

const generator = ({
  email,
  address,
  phone,
  vat,
}: Options) => `
# Импрессум

## Отказ от ответственности

### Ответственность за контент
Контент наших страниц был создан с наивысшей тщательностью. Однако мы не можем гарантировать точность, полноту и актуальность контента. Как поставщики услуг, мы несем ответственность за собственный контент на этих страницах в соответствии с § 7 абз. 1 TMG по общим законам. В соответствии с §§ 8–10 TMG мы, как поставщики услуг, не обязаны контролировать переданную или сохраненную чужую информацию или исследовать обстоятельства, указывающие на незаконную деятельность. Обязательства по удалению или блокированию использования информации в соответствии с общими законами остаются в силе. Однако ответственность за это возможна только с момента, когда становится известно о конкретном нарушении закона. При выявлении соответствующих нарушений мы немедленно удалим этот контент.

### Ответственность за ссылки
Наше предложение содержит ссылки на внешние веб-сайты третьих лиц, на содержание которых мы не имеем влияния. Поэтому мы не можем нести ответственность за этот чужой контент. За содержание связанных страниц всегда отвечает соответствующий поставщик или оператор страниц. Связанные страницы были проверены на возможные правонарушения на момент создания ссылки. Незаконный контент не был выявлен на момент создания ссылки. Постоянный контроль содержания связанных страниц без конкретных указаний на правонарушение не представляется возможным. При выявлении нарушений мы немедленно удалим такие ссылки.

## Лицензии

Некоторые изображения, используемые на этом веб-сайте, предоставлены [Unsplash](https://unsplash.com). Эти изображения являются свободными от лицензий, указание источника не требуется.

## Поставщик веб-сайта
**E-Mail**: [${email}](mailto:${email})
**Почта:** ${address}
${when(phone, `**Телефон**: ${phone}`)}
${when(vat, `**ИНН**: ${vat}`)}
`.trim();

export default generator;
