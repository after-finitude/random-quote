import theLeanSturtup from './images/theLeanSturtup.jpg';
import zeroToOne from './images/zeroToOne.jpg';
import deliveringHappiness from './images/deliveringHappiness.jpg';
import sharpObjects from './images/sharpObjects.jpg';
import theGoldBug from './images/theGoldBug.jpg';
import theGirlWithTheDragonTattoo from './images/theGirlWithTheDragonTattoo.jpg';

export const books = {
  business: [
    {
      title: 'Эрик Рис',
      subtitle:
        '«Бизнес с нуля. Метод Lean Startup для быстрого тестирования идей и выбора бизнес-модели»',
      description:
        'Основа метода экономичного стартапа, разработанного автором, заключается в быстром тестировании идей на реальных потребителях и постоянной корректировке бизнес-модели — чтобы начинать масштабные вложения в продукт только тогда, когда идея будет подтверждена фактами.',
      image: theLeanSturtup,
    },
    {
      title: 'Питер Тиль, Блейк Мастерс',
      subtitle:
        '«От нуля до единицы: заметки о стартапах, или как построить будущее»',
      description:
        'Питер Тиль — предприниматель, создавший платежную систему PayPal, и первый инвестор Facebook — в своей книге анализирует примеры Facebook, Microsoft, eBay, Twitter, LinkedIn и многих других компаний. На примерах он поясняет, какую стратегию нужно выбрать стартапу, чтобы «из нуля...',
      image: zeroToOne,
    },
    {
      title: 'Тони Шей',
      subtitle: '«Доставляя счастье»',
      description:
        'История о том, как основатель Zappos с нуля создал компанию, которая стала лучшей в США по клиентскому сервису. Книга живо и красочно описывает и взлёты, и падения, и то, как компания преодолевала все трудности.',
      image: deliveringHappiness,
    },
  ],
  detective: [
    {
      title: 'Гиллиан Флинн',
      subtitle: '«Острые предметы»',
      description:
        'Американка Гиллиан Флинн стала абсолютной звездой психологического триллера после экранизации своего третьего романа — «Исчезнувшая», фильм по нему снял Дэвид Финчер, а сценарий подготовила сама писательница. «Острые предметы» — её дебют и заслуживает ничуть не меньшег...',
      image: sharpObjects,
    },
    {
      title: 'Эдгар Аллан По',
      subtitle: '«Золотой жук»',
      description:
        'Эдгар Аллан По (1809–1849) – американский писатель-романтик, мастер новеллы, основоположник детективного рассказа и научно-фантастической повести. Мир произведений писателя причудливый и в то же время изысканный. Его законы подчиняются не общепринятой логике, а лишь игре...',
      image: theGoldBug,
    },
    {
      title: 'Стиг Ларссон «Девушка с татуировкой дракона»',
      subtitle: '«Девушка с татуировкой дракона»',
      description:
        'Сорок лет загадка исчезновения юной родственницы не дает покоя стареющему промышленному магнату, и вот он предпринимает последнюю в своей жизни попытку – поручает розыск журналисту Микаэлю Блумквисту. Тот берется за безнадежное дело больше для того, чтобы отвлечься от...',
      image: theGirlWithTheDragonTattoo,
    },
  ],
  drama: [],
  history: [],
  comedy: [],
  novel: [],
  fantastic: [],
  fantasy: [],
};

export const genres = [
  { value: 'business', label: 'Бизнес' },
  { value: 'detective', label: 'Детектив' },
  { value: 'drama', label: 'Драма' },
  { value: 'history', label: 'История' },
  { value: 'comedy', label: 'Комедия' },
  { value: 'novel', label: 'Роман' },
  { value: 'fantastic', label: 'Фантастика' },
  { value: 'fantasy', label: 'Фэнтези' },
];
