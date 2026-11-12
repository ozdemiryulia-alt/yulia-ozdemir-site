import {siteUrl as yuliaSiteUrl} from "./portability-domain-c5eae32fed.js";
// Existing-site redesign. Author copy: Yulia Ozdemir, 2026-11-04.
// All four supplied paragraphs are retained verbatim; no invented game mechanics.
export function createChessMysticsPage(runtime, React) {
  const { jsx, jsxs } = runtime;
  const copy = [
    'Жизнь — это путешествие, полное неожиданных встреч, испытаний, взлетов и падений. Мы идем по этому пути, не всегда понимая, что нас ведет вперед, а что возвращает назад.',
    '«Шахматы Мистиков» — древняя суфийская игра, которая помогает ясно увидеть этот путь.',
    'В системе "Шахмат мистиков" 100 клеток. Каждая клетка имеет название, символизирующее состояния: достоинство, щедрость, страх, благодарность и так далее. На поле изображены стрелы и змеи – они направляют ход игры. Игрок заканчивает игру, достигая единения с истинным собой.',
    'Игра помогает заглянуть внутрь себя и увидеть, как приключается наш мятежный дух. Она раскрывает, то что управляет нашим выбором, где мы застряли, а где пришло время сделать шаг вперед.'
  ];
  const message = encodeURIComponent('Здравствуйте! Хочу записаться на игру «Шахматы Мистиков».\n\nСогласие на обработку моих персональных данных для записи (редакция от 04.11.2026) подтверждаю.\nТекст согласия: https://ozdemiryulia-alt.github.io/yulia-ozdemir-site/documents/soglasie-shahmaty-mistikov-2026-11-04.html');
  const contacts = [
    { name: 'Telegram', href: `https://t.me/yulia_ozdemir?text=${message}` },
    { name: 'WhatsApp', href: `https://wa.me/79258898812?text=${message}` }
  ];
  const formats = [
    { title: 'Групповая игра', time: '3 часа', description: 'Онлайн или очно. До 6 человек.', price: '10 000 ₽', unit: 'за участника' },
    { title: 'Индивидуальная игра', time: '2 часа', description: 'Онлайн или очно.', price: '19 000 ₽', unit: 'за игру' }
  ];

  function BookingControls({ consentGranted, onConsentChange, id }) {
    return jsxs('div', {
      className: 'chess-booking-controls',
      children: [
        jsxs('label', {
          className: 'chess-consent-label',
          htmlFor: id,
          children: [
            jsx('input', {
              id,
              type: 'checkbox',
              checked: consentGranted,
              onChange: event => onConsentChange(event.target.checked),
              'aria-describedby': `${id}-hint`
            }),
            jsxs('span', {
              children: [
                'Даю ',
                jsx('a', {
                  href: yuliaSiteUrl('/yulia-ozdemir-site/documents/soglasie-shahmaty-mistikov-2026-11-04.html'),
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: 'согласие на обработку персональных данных'
                }),
                ' для записи на игру.'
              ]
            })
          ]
        }),
        jsx('div', {
          className: 'chess-contact-links',
          children: contacts.map((contact, index) => jsxs('button', {
            type: 'button',
            disabled: !consentGranted,
            'data-messenger-url': contact.href,
            onClick: () => {
              if (consentGranted) window.open(contact.href, '_blank', 'noopener,noreferrer');
            },
            className: `chess-button ${index === 0 ? 'chess-button-solid' : 'chess-button-outline'}`,
            'aria-label': `Записаться на игру «Шахматы Мистиков» через ${contact.name}`,
            children: [contact.name, jsx('span', { 'aria-hidden': true, children: '↗' })]
          }, contact.name))
        }),
        jsx('p', {
          id: `${id}-hint`,
          className: 'chess-consent-hint',
          children: consentGranted
            ? 'Откроется сторонний мессенджер. Сообщение отправляете вы.'
            : 'Для записи отметьте согласие. Оно не включает рекламные рассылки.'
        })
      ]
    });
  }

  return function ChessMysticsPage() {
    const [consentGranted, setConsentGranted] = React.useState(false);
    return jsxs('div', {
      className: 'chess-page',
      children: [
        jsx('section', {
          className: 'chess-hero',
          'aria-labelledby': 'chess-title',
          children: jsxs('div', {
            className: 'chess-container chess-hero-grid',
            children: [
              jsxs('div', {
                className: 'chess-hero-copy',
                children: [
                  jsx('a', { href: yuliaSiteUrl('/yulia-ozdemir-site/igry/'), className: 'chess-back', children: '← Все игры' }),
                  jsx('span', { className: 'chess-eyebrow', children: 'Древняя суфийская игра' }),
                  jsxs('h1', {
                    id: 'chess-title',
                    children: ['Шахматы', jsx('br', {}), 'Мистиков']
                  }),
                  jsxs('div', {
                    className: 'chess-intro',
                    children: [
                      jsx('p', { 'data-author-paragraph': '1', children: copy[0] }),
                      jsx('p', { 'data-author-paragraph': '2', children: copy[1] })
                    ]
                  }),
                  jsxs('div', {
                    className: 'chess-hero-booking',
                    children: [
                      jsx('p', { className: 'chess-booking-label', children: 'Записаться на игру' }),
                      jsx(BookingControls, { consentGranted, onConsentChange: setConsentGranted, id: 'chess-consent-top' })
                    ]
                  })
                ]
              }),
              jsx('figure', {
                className: 'chess-hero-photo',
                children: jsx('img', {
                  src: yuliaSiteUrl('/yulia-ozdemir-site/assets/shahmaty-mistikov.webp'),
                  alt: 'Поле игры «Шахматы Мистиков», свечи и игровые фигуры',
                  width: 1440,
                  height: 2560,
                  loading: 'eager',
                  fetchPriority: 'high',
                  decoding: 'async'
                })
              })
            ]
          })
        }),
        jsx('section', {
          className: 'chess-about',
          'aria-labelledby': 'chess-about-title',
          children: jsxs('div', {
            className: 'chess-container chess-about-grid',
            children: [
              jsxs('h2', {
                id: 'chess-about-title',
                children: [jsx('span', { className: 'chess-hundred', children: '100' }), 'состояний', jsx('br', {}), 'на пути к себе']
              }),
              jsxs('div', {
                className: 'chess-about-copy',
                children: [
                  jsx('p', { 'data-author-paragraph': '3', children: copy[2] }),
                  jsx('p', { 'data-author-paragraph': '4', children: copy[3] })
                ]
              })
            ]
          })
        }),
        jsx('section', {
          className: 'chess-formats',
          'aria-labelledby': 'chess-formats-title',
          children: jsxs('div', {
            className: 'chess-container',
            children: [
              jsx('h2', { id: 'chess-formats-title', children: 'Форматы участия' }),
              jsx('div', {
                className: 'chess-format-grid',
                children: formats.map(format => jsxs('article', {
                  className: 'chess-format',
                  children: [
                    jsxs('div', {
                      className: 'chess-format-top',
                      children: [jsx('h3', { children: format.title }), jsx('span', { className: 'chess-duration', children: format.time })]
                    }),
                    jsx('p', { className: 'chess-format-description', children: format.description }),
                    jsxs('p', {
                      className: 'chess-price',
                      children: [jsx('strong', { children: format.price }), jsx('span', { children: format.unit })]
                    })
                  ]
                }, format.title))
              }),
              jsxs('div', {
                className: 'chess-final-booking',
                children: [
                  jsxs('div', {
                    children: [
                      jsx('h3', { children: 'Записаться на игру' }),
                      jsx('p', { children: 'Напишите Юлии в удобном мессенджере.' })
                    ]
                  }),
                  jsx(BookingControls, { consentGranted, onConsentChange: setConsentGranted, id: 'chess-consent-bottom' })
                ]
              })
            ]
          })
        }),
        jsx('section', {
          className: 'chess-legal',
          'aria-labelledby': 'chess-legal-title',
          children: jsxs('div', {
            className: 'chess-container',
            children: [
              jsx('h2', { id: 'chess-legal-title', children: 'Важно перед записью' }),
              jsxs('div', {
                className: 'chess-legal-copy',
                children: [
                  jsx('p', { children: 'Игра — формат самоисследования. Она не является медицинской услугой, не заменяет диагностику, лечение или психотерапию. Конкретные изменения в жизни не гарантируются.' }),
                  jsx('p', { children: 'Заявка в мессенджере не означает автоматическое бронирование или оплату. Дату, формат участия и порядок оплаты вы согласуете с Юлией до оплаты.' }),
                  jsx('p', { children: 'Вы вправе отказаться от услуги в любое время. Возврат оплаты за неоказанную услугу производится за вычетом документально подтверждённых фактических расходов, связанных с исполнением вашего договора, в соответствии со статьёй 32 Закона РФ «О защите прав потребителей».' })
                ]
              }),
              jsxs('div', {
                className: 'chess-legal-footer',
                children: [
                  jsxs('p', {
                    children: [
                      'Исполнитель: ИП Оздемир Юлия Владимировна. ИНН 771983333009 · ОГРНИП 318774600109052. ',
                      jsx('a', { href: 'mailto:ozdemiryulia@gmail.com', children: 'ozdemiryulia@gmail.com' }),
                      ' · +7 925 889-88-12.'
                    ]
                  }),
                  jsx('a', { href: yuliaSiteUrl('/yulia-ozdemir-site/pravovye-usloviya/'), children: 'Правила записи и работы с данными' })
                ]
              })
            ]
          })
        })
      ]
    });
  };
}
