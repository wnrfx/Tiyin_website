export interface NavItem {
  label: string;
  href: string;
}

export interface PainPointItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  exampleQuote: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  highlight?: string;
  iconName: 'calendar' | 'mic' | 'scan' | 'cpu' | 'shieldCheck' | 'piggyBank';
}

export interface StepItem {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
}

export interface SecurityPillar {
  title: string;
  description: string;
}

export interface PaymentRail {
  id: 'click' | 'payme' | 'uzum';
  name: string;
  tagline: string;
  badge: string;
  accentColor: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Проблема', href: '#problem' },
  { label: 'Решение', href: '#solution' },
  { label: 'Возможности', href: '#features' },
  { label: 'Как это работает', href: '#how-it-works' },
  { label: 'Безопасность', href: '#privacy' },
  { label: 'Платёжные системы', href: '#payments' },
];

export const HERO_VOICE_EXAMPLES: string[] = [
  '«Тийин, переведи папе 200 000 сум»',
  '«Тийин, оплати детский сад и домашний интернет»',
  '«Тийин, сколько мы потратили на продукты в этом месяце?»',
];

export const PAIN_POINTS: PainPointItem[] = [
  {
    id: 'recurring-bills',
    badge: 'Регулярные счета',
    title: 'Забытые платежи в самый неподходящий момент',
    description:
      'Детский сад, аренда квартиры, электричество, газ и домашний интернет требуют оплаты в разные дни. О них легко забыть в суете — пока интернет внезапно не отключат.',
    exampleQuote: '«Опять забыл оплатить интернет до 1-го числа...»',
  },
  {
    id: 'family-transfers',
    badge: 'Переводы близким',
    title: 'Путаница с картами родных и близких',
    description:
      'Чтобы отправить деньги папе, маме или брату, приходится искать номер карты в переписках или угадывать по инициалам среди десятков шаблонов в банковском приложении.',
    exampleQuote: '«Какая из трёх карт Uzcard принадлежит папе?»',
  },
  {
    id: 'cloud-privacy',
    badge: 'Приватность данных',
    title: 'Недоверие к приложениям, читающим ваши финансы',
    description:
      'Никому не хочется, чтобы история покупок, СМС от банка и личные скриншоты квитанций отправлялись на чужие облачные серверы и хранились неизвестно где.',
    exampleQuote: '«Почему финансовое приложение просит доступ ко всем моим данным в облаке?»',
  },
];

export const SOLUTION_CONTENT = {
  eyebrow: 'Решение — Tiyin AI',
  headline: 'Умный помощник, который понимает вас с полуслова и работает прямо на вашем смартфоне',
  paragraph:
    'Tiyin — это первый в Узбекистане финансовый ИИ-ассистент, который полностью работает локально на вашем устройстве, без отправки данных в облако. Он понимает живую речь и семейный контекст («папа», «детский сад», «аренда»), сам находит счета в сообщениях и на скриншотах и вовремя предлагает готовый платёж — вам остаётся лишь подтвердить его одним касанием или голосом.',
  highlights: [
    { value: '100%', label: 'Обработка на телефоне без облака' },
    { value: '< 2 сек', label: 'Подготовка перевода голосом' },
    { value: '0 сум', label: 'Списаний без вашего подтверждения' },
  ],
};

export const FEATURES_LIST: FeatureItem[] = [
  {
    id: 'auto-bills',
    title: 'Автооплата регулярных счетов',
    description:
      'Детский сад, аренда, коммунальные услуги (свет, газ, вода) и интернет под контролем. Tiyin заранее напомнит о платеже и подготовит квитанцию к нужной дате.',
    tag: 'Садик • Аренда • ЖКХ • Интернет',
    iconName: 'calendar',
  },
  {
    id: 'voice-transfers',
    title: 'Переводы близким голосом',
    description:
      'Просто скажите: «Тийин, отправь папе 200 000 сум». Ассистент сам знает, какая карта привязана к имени «Папа», и мгновенно подготовит перевод.',
    tag: '«Тийин, переведи папе»',
    highlight: 'Понимает семейные имена и контекст',
    iconName: 'mic',
  },
  {
    id: 'bill-detection',
    title: 'Распознавание счетов из чатов и скриншотов',
    description:
      'Прислали реквизиты карты в родительском чате или скриншот квитанции в Telegram? Tiyin сам считает сумму и номер карты прямо с экрана.',
    tag: 'СМС • Telegram • Скриншоты',
    iconName: 'scan',
  },
  {
    id: 'on-device-ai',
    title: 'Локальный ИИ для полной приватности',
    description:
      'Модель искусственного интеллекта живёт внутри вашего смартфона. Ваши голосовые команды, суммы и контакты никогда не покидают устройство.',
    tag: 'On-Device AI • Без облака',
    iconName: 'cpu',
  },
  {
    id: 'mandatory-confirmation',
    title: 'Обязательное подтверждение каждого платежа',
    description:
      'Полный контроль над деньгами: ИИ только готовит операцию, но ни один тийин не будет отправлен без вашего явного подтверждения по биометрии или коду.',
    tag: '100% защита от случайных списаний',
    iconName: 'shieldCheck',
  },
  {
    id: 'expense-tracking',
    title: 'Учёт расходов и цели накоплений',
    description:
      'Наглядная картина семейного бюджета без ручных таблиц. Узнавайте, сколько уходит на продукты и такси, и откладывайте на важные цели.',
    tag: 'Бюджет • Аналитика • Накопления',
    iconName: 'piggyBank',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    stepNumber: '01',
    title: 'Регистрация',
    description: 'Скачайте приложение и войдите по номеру телефона за 30 секунд без сложных анкет.',
    detail: 'Быстрый старт',
  },
  {
    stepNumber: '02',
    title: 'Привязка карт',
    description: 'Подключите свои карты Uzcard и Humo через привычные сервисы Click, Payme или Uzum.',
    detail: 'Uzcard • Humo',
  },
  {
    stepNumber: '03',
    title: 'Настройка голоса',
    description: 'Произнесите короткую фразу, чтобы локальный ИИ запомнил тембр именно вашего голоса.',
    detail: 'Голосовой ключ',
  },
  {
    stepNumber: '04',
    title: 'Ассистент готов',
    description: 'Оплачивайте счета и переводите деньги родным одной голосовой командой в любой момент.',
    detail: 'Готов к работе',
  },
];

export const SECURITY_PILLARS: SecurityPillar[] = [
  {
    title: 'ИИ работает на устройстве, а не в облаке',
    description:
      'В отличие от обычных голосовых помощников, Tiyin обрабатывает речь, сообщения и скриншоты прямо на процессоре вашего телефона.',
  },
  {
    title: 'Ваши финансовые тайны остаются у вас',
    description:
      'Мы не собираем базу ваших чеков, контактов или балансов. Даже при отключённом интернете Tiyin помнит ваш контекст и историю.',
  },
  {
    title: 'Двойная проверка перед каждой отправкой',
    description:
      'Распознавание владельца по голосу плюс обязательное финальное подтверждение (Face ID / отпечаток пальца) перед проведением платежа.',
  },
];

export const SUPPORTED_PAYMENT_RAILS: PaymentRail[] = [
  {
    id: 'click',
    name: 'Click',
    tagline: 'Мгновенные переводы с карты на карту и оплата тысяч локальных услуг и коммунальных счетов.',
    badge: 'Click Up • Uzcard / Humo',
    accentColor: '#00AAFF',
  },
  {
    id: 'payme',
    name: 'Payme',
    tagline: 'Привычная оплата счетов по лицевому счёту, детские сады, интернет-провайдеры и госуслуги.',
    badge: 'Payme • Быстрые платежи',
    accentColor: '#14C5C0',
  },
  {
    id: 'uzum',
    name: 'Uzum',
    tagline: 'Удобная интеграция с экосистемой Uzum Bank для ежедневных переводов и покупок без лишних шагов.',
    badge: 'Uzum Bank • Экосистема',
    accentColor: '#7000FF',
  },
];

export function formatUzsAmount(amount: number): string {
  if (!Number.isFinite(amount) || amount <= 0) {
    return '0 сум';
  }
  return `${Math.round(amount).toLocaleString('ru-RU').replace(/[\s\u00A0]+/g, ' ')} сум`;
}

export function validateWaitlistContact(
  channel: 'telegram' | 'email',
  value: string
): { valid: boolean; message: string } {
  const trimmed = value.trim();
  if (!trimmed) {
    return {
      valid: false,
      message:
        channel === 'telegram'
          ? 'Пожалуйста, укажите ваш ник в Telegram (например, @azamat_uz) или номер телефона.'
          : 'Пожалуйста, введите адрес электронной почты в формате name@example.com.',
    };
  }

  if (channel === 'telegram') {
    const isHandle = /^@?[a-zA-Z0-9_]{3,32}$/.test(trimmed);
    const isUzPhone = /^\+?998[\s\-()]?\d{2}[\s\-()]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/.test(trimmed);
    if (!isHandle && !isUzPhone) {
      return {
        valid: false,
        message: 'Введите корректный ник Telegram (например, @username) или номер +998 XX XXX-XX-XX.',
      };
    }
    return { valid: true, message: '' };
  }

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  if (!isEmail) {
    return {
      valid: false,
      message: 'Введите корректный email в формате name@example.com.',
    };
  }
  return { valid: true, message: '' };
}
