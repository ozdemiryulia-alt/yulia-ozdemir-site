import {siteUrl as yuliaSiteUrl} from "./portability-domain-c5eae32fed.js";
// Existing-site redesign; original text and all video reviews are retained.
// Added closing paragraphs are sourced from Wix /aktivacyazdorovya, not invented.
export function createHealthGamePage(runtime, React, VideoCard) {
  const { jsx, jsxs } = runtime;
  const consentUrl = yuliaSiteUrl('/yulia-ozdemir-site/documents/soglasie-aktivaciya-zdorovya-2026-11-04.html');
  const message = encodeURIComponent('Здравствуйте! Хочу записаться на игру «Активация здоровья. Психосоматика».\n\nСогласие на обработку моих персональных данных для записи (редакция от 04.11.2026) подтверждаю.\nТекст согласия: https://ozdemiryulia-alt.github.io/yulia-ozdemir-site/documents/soglasie-aktivaciya-zdorovya-2026-11-04.html');
  const contacts = [
    { name: 'Telegram', href: `https://t.me/yulia_ozdemir?text=${message}` },
    { name: 'WhatsApp', href: `https://wa.me/79258898812?text=${message}` }
  ];
  const formats = [
    { title: 'Групповая игра', time: '3 часа', description: 'Онлайн или очно. До 6 человек.', price: '10 000 ₽', unit: 'за участника' },
    { title: 'Индивидуальная игра', time: '2 часа', description: 'Онлайн или очно.', price: '19 000 ₽', unit: 'за игру' }
  ];
  const closing = [
    'Если чувствуете, что ответы внутри — игра поможет их увидеть.',
    'Это не анализ. Это — живое переживание, которое меняет внутреннее состояние, влияет на самочувствие и запускает восстановление.'
  ];

  function BookingControls({ consentGranted, onConsentChange, id }) {
    return jsxs('div', {
      className: 'chess-booking-controls',
      children: [
        jsxs('label', {
          className: 'chess-consent-label', htmlFor: id,
          children: [
            jsx('input', { id, type: 'checkbox', checked: consentGranted, onChange: event => onConsentChange(event.target.checked), 'aria-describedby': `${id}-hint` }),
            jsxs('span', { children: ['Даю ', jsx('a', { href: consentUrl, target: '_blank', rel: 'noopener noreferrer', children: 'согласие на обработку персональных данных' }), ' для записи на игру.'] })
          ]
        }),
        jsx('div', {
          className: 'chess-contact-links',
          children: contacts.map((contact, index) => jsxs('button', {
            type: 'button', disabled: !consentGranted, 'data-messenger-url': contact.href,
            onClick: () => { if (consentGranted) window.open(contact.href, '_blank', 'noopener,noreferrer'); },
            className: `chess-button ${index === 0 ? 'chess-button-solid' : 'chess-button-outline'}`,
            'aria-label': `Записаться на игру «Активация здоровья» через ${contact.name}`,
            children: [contact.name, jsx('span', { 'aria-hidden': true, children: '↗' })]
          }, contact.name))
        }),
        jsx('p', { id: `${id}-hint`, className: 'chess-consent-hint', children: consentGranted ? 'Откроется сторонний мессенджер. Сообщение отправляете вы.' : 'Для записи отметьте согласие. Оно не включает рекламные рассылки.' })
      ]
    });
  }

  return function HealthGamePage({ page }) {
    const [consentGranted, setConsentGranted] = React.useState(false);
    return jsxs('div', {
      className: 'health-page chess-page',
      children: [
        jsx('section', {
          className: 'health-hero', 'aria-labelledby': 'health-title',
          children: jsxs('div', {
            className: 'health-container health-hero-grid',
            children: [
              jsxs('div', {
                className: 'health-hero-copy',
                children: [
                  jsx('a', { href: yuliaSiteUrl('/yulia-ozdemir-site/igry/'), className: 'health-back', children: '← Все игры' }),
                  jsx('span', { className: 'health-eyebrow', children: 'Трансформационная игра-расстановка' }),
                  jsxs('h1', { id: 'health-title', children: ['Активация', jsx('br', {}), 'здоровья', jsx('span', { className: 'health-subtitle', children: 'Психосоматика' })] }),
                  jsx('p', { className: 'health-lead', 'data-health-copy': 'lead', children: page.lead }),
                  jsx('p', { className: 'health-hero-disclaimer', children: page.disclaimer }),
                  jsxs('div', { className: 'health-hero-booking', children: [jsx('p', { className: 'chess-booking-label', children: 'Записаться на игру' }), jsx(BookingControls, { consentGranted, onConsentChange: setConsentGranted, id: 'health-consent-top' })] })
                ]
              }),
              jsx('figure', { className: 'health-hero-photo', children: jsx('img', { src: page.photos[0].src, alt: page.photos[0].alt, width: 1024, height: 1280, loading: 'eager', fetchPriority: 'high', decoding: 'async' }) })
            ]
          })
        }),
        jsx('section', {
          className: 'health-about', 'aria-labelledby': 'health-about-title',
          children: jsxs('div', {
            className: 'health-container health-about-grid',
            children: [
              jsx('figure', { className: 'health-detail-photo', children: jsx('img', { src: page.photos[1].src, alt: page.photos[1].alt, width: 733, height: 1280, loading: 'lazy', decoding: 'async' }) }),
              jsxs('div', {
                className: 'health-about-copy',
                children: [
                  jsx('h2', { id: 'health-about-title', children: page.introTitle }),
                  ...page.intro.map((text, index) => jsx('p', { 'data-health-copy': `intro-${index}`, children: text }, `intro-${index}`)),
                  jsx('h3', { children: page.requestsTitle }),
                  jsx('ul', { className: 'health-request-list', children: page.requests.map((text, index) => jsx('li', { 'data-health-copy': `request-${index}`, children: text }, `request-${index}`)) })
                ]
              })
            ]
          })
        }),
        jsx('section', {
          className: 'health-process', 'aria-labelledby': 'health-process-title',
          children: jsxs('div', {
            className: 'health-container',
            children: [
              jsx('h2', { id: 'health-process-title', children: page.processTitle }),
              jsx('div', {
                className: 'health-process-grid',
                children: page.process.map((text, index) => jsxs('article', {
                  className: 'health-process-step',
                  children: [jsx('span', { className: 'health-step-number', 'aria-hidden': true, children: String(index + 1).padStart(2, '0') }), jsx('p', { 'data-health-copy': `process-${index}`, children: text })]
                }, `process-${index}`))
              })
            ]
          })
        }),
        jsx('section', {
          className: 'health-results', 'aria-labelledby': 'health-results-title',
          children: jsxs('div', {
            className: 'health-container health-results-grid',
            children: [
              jsx('h2', { id: 'health-results-title', children: page.audienceTitle }),
              jsxs('div', {
                children: [
                  jsx('ul', { className: 'health-results-list', children: page.audience.map((text, index) => jsx('li', { 'data-health-copy': `audience-${index}`, children: text }, `audience-${index}`)) }),
                  ...closing.map((text, index) => jsx('p', { className: 'health-closing', 'data-health-copy': `closing-${index}`, children: text }, `closing-${index}`)),
                  jsx('p', { className: 'health-experience-note', children: 'Авторское описание и впечатления участников не являются гарантией медицинского результата.' })
                ]
              })
            ]
          })
        }),
        jsx('section', {
          className: 'health-videos', 'aria-labelledby': `videos-${page.slug}`,
          children: jsxs('div', {
            className: 'health-container',
            children: [
              jsx('h2', { id: `videos-${page.slug}`, children: 'Видеоотзывы участников' }),
              jsx('div', { className: 'health-video-grid', children: page.videos.map((video, index) => jsx(VideoCard, { ...video, index: index + 1 }, video.video)) })
            ]
          })
        }),
        jsx('section', {
          className: 'health-formats', 'aria-labelledby': 'health-formats-title',
          children: jsxs('div', {
            className: 'health-container',
            children: [
              jsx('h2', { id: 'health-formats-title', children: 'Форматы участия' }),
              jsx('div', {
                className: 'chess-format-grid',
                children: formats.map(format => jsxs('article', {
                  className: 'chess-format',
                  children: [
                    jsxs('div', { className: 'chess-format-top', children: [jsx('h3', { children: format.title }), jsx('span', { className: 'chess-duration', children: format.time })] }),
                    jsx('p', { className: 'chess-format-description', children: format.description }),
                    jsxs('p', { className: 'chess-price', children: [jsx('strong', { children: format.price }), jsx('span', { children: format.unit })] })
                  ]
                }, format.title))
              }),
              jsxs('div', {
                className: 'health-final-booking',
                children: [
                  jsxs('div', { children: [jsx('h3', { children: 'Записаться на игру' }), jsx('p', { children: 'Напишите Юлии в удобном мессенджере.' })] }),
                  jsx(BookingControls, { consentGranted, onConsentChange: setConsentGranted, id: 'health-consent-bottom' })
                ]
              })
            ]
          })
        }),
        jsx('section', {
          className: 'chess-legal', 'aria-labelledby': 'health-legal-title',
          children: jsxs('div', {
            className: 'health-container',
            children: [
              jsx('h2', { id: 'health-legal-title', children: 'Важно перед записью' }),
              jsxs('div', {
                className: 'chess-legal-copy',
                children: [
                  jsx('p', { children: page.disclaimer }),
                  jsx('p', { children: 'Заявка в мессенджере не означает автоматическое бронирование или оплату. Дату, формат участия и порядок оплаты вы согласуете с Юлией до оплаты.' }),
                  jsx('p', { children: 'Вы вправе отказаться от услуги в любое время. Возврат оплаты за неоказанную услугу производится за вычетом документально подтверждённых фактических расходов, связанных с исполнением вашего договора, в соответствии со статьёй 32 Закона РФ «О защите прав потребителей».' })
                ]
              }),
              jsxs('div', {
                className: 'chess-legal-footer',
                children: [
                  jsxs('p', { children: ['Исполнитель: ИП Оздемир Юлия Владимировна. ИНН 771983333009 · ОГРНИП 318774600109052. ', jsx('a', { href: 'mailto:ozdemiryulia@gmail.com', children: 'ozdemiryulia@gmail.com' }), ' · +7 925 889-88-12.'] }),
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
