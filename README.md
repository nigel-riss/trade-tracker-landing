This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



==============================
Список правок для Atlantes.io.
Это актуальные вещи, которые могут сейчас пойти в работу.
(Отправляю разными сообщениями, чтобы если кому надо, мог себе припинить)

Дизайн:
1. Определиться с внешним видом Hero-секции.
Сейчас она не соответствует дизайну, т.к. сам заголовок стал шире и из-за этого подзаголовок не помещался. Плюс были вопросы к этой секции изначально. Поэтому я решил переделать её как сейчас. С тем текстом, что есть это оптимальный вариант. Если есть возможность поменять подзаголовок, то рекомендовал бы его сократить до менее 160 символов.
2. Подготовить мокап телефона без названия канала (бота) сверху в заголовке

Вёрстка:
1. Добавить анимации заголовков секций
2. Изменить анимации слайдера
3. Поправить обрезание фоновых градиентов (появляется горизонтальный скролл)
4. Добавить ссылки. В приоритете ссылка на покупку ботов

Тексты:
1. Исправить тексты слайдов. Описания должны попадать в диапазон 260 -- 340 символов
2. Текста подзаголовка Hero-секции ??? до 160 символов
3. Output для "телефона" в слайдере. Соответствие слайд -- сообщение на телефоне прописывается отдельно, так что их может быть меньше. Т.е. одно сообщения может соответствовать нескольким слайдам
4. Лимиты для ботов. И сразу желательно для про-версии. Т.к. это влияет на формат хранения вёрстки.
5. Ссылки: "Free trial", "Contact us", "Learn more"

API + бот:
1. Нужно чтобы бот генерировал ссылку для чекаута в виде: dev.atlantes.io/checkout?invoiceId=...
2. Предложение по айдишникам для для товаров (кейс можно поменять, camelCase, snake_case, kebab-case, без разницы).
    trade-volume-bot
    wallet-analyzer
    profit-maker


